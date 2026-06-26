
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import RichTextEditor from './RichTextEditor';
import { useData } from '../contexts/DataContext';
import { SparklesIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { groqChat, groqSystemMsg, groqUserMsg } from '../lib/groq';

const modalInputStyles = "w-full px-4 py-2 bg-surface-inset border border-border rounded-lg placeholder:text-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition";
const modalSelectStyles = "w-full px-4 py-2 bg-surface-inset border border-border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none cursor-pointer";
const modalPrimaryButtonStyles = "px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed";
const modalSecondaryButtonStyles = "px-5 py-2.5 bg-surface-inset text-text-primary font-semibold rounded-lg hover:bg-border transition-colors duration-200 text-sm";

const AIGenerateNoteModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
    const { subjects, addNote } = useData();
    const [stage, setStage] = useState<'prompt' | 'review'>('prompt');
    const [prompt, setPrompt] = useState('');
    const [subjectId, setSubjectId] = useState('');
    
    const [generatedTitle, setGeneratedTitle] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');
    
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (stage === 'review') {
            setEditedTitle(generatedTitle);
            setEditedContent(generatedContent);
        }
    }, [stage, generatedTitle, generatedContent]);

    const handleClose = () => {
        setStage('prompt');
        setPrompt('');
        setGeneratedTitle('');
        setGeneratedContent('');
        setEditedTitle('');
        setEditedContent('');
        setError('');
        setIsLoading(false);
        onClose();
    };

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError("Please enter a topic.");
            return;
        }
        setError('');
        setIsLoading(true);

        const systemPrompt = `You are a study note generator. Generate a detailed, well-structured study note about the given topic. Format your response in HTML. Use <h1> for the title, <h2> for section headings, <ul>/<li> for lists, <b> for emphasis. Start with an <h1> title tag containing the main title. Do NOT wrap the entire response in a code block.`;

        try {
            const result = await groqChat([
                groqSystemMsg(systemPrompt),
                groqUserMsg(`Generate a study note about: "${prompt}". Make it comprehensive and well-structured with proper HTML formatting.`)
            ], { model: 'llama-3.3-70b-versatile', temperature: 0.5, max_tokens: 8192 });

            let htmlContent = result;
            
            const titleMatch = htmlContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
            let title = prompt;
            let content = htmlContent;

            if (titleMatch && titleMatch[1]) {
                title = titleMatch[1].trim();
                content = htmlContent.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '').trim();
            }

            setGeneratedTitle(title);
            setGeneratedContent(content);
            setStage('review');

        } catch (e) {
            console.error(e);
            setError("Failed to generate note. Please check your connection.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSave = () => {
        if (!editedTitle.trim()) return;
        addNote({
            title: editedTitle,
            content: editedContent,
            subjectId: subjectId || undefined,
            topic: 'General'
        });
        handleClose();
    };

    const renderPromptStage = () => (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Topic</label>
                <textarea
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    placeholder="Enter a topic, e.g., 'The basics of quantum mechanics' or 'History of the Roman Empire'"
                    rows={4}
                    className={modalInputStyles}
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Subject</label>
                <select
                    value={subjectId}
                    onChange={e => setSubjectId(e.target.value)}
                    className={modalSelectStyles}
                >
                    <option value="">General Note (No Subject)</option>
                    {subjects.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
            </div>

            {error && <p className="text-sm text-red-500 bg-red-50 p-2 rounded-lg">{error}</p>}
            
            <div className="mt-8 pt-4 flex justify-end gap-3 border-t border-border -mx-6 -mb-6 px-6 pb-6 bg-surface-muted rounded-b-2xl">
                <button type="button" onClick={handleClose} className={modalSecondaryButtonStyles}>Cancel</button>
                <button onClick={handleGenerate} className={`${modalPrimaryButtonStyles} flex items-center gap-2`} disabled={isLoading}>
                    <SparklesIcon className="h-5 w-5" />
                    {isLoading ? 'Generating...' : 'Generate Note'}
                </button>
            </div>
        </div>
    );
    
    const renderReviewStage = () => (
        <div className="space-y-4">
            <input
                type="text"
                value={editedTitle}
                onChange={e => setEditedTitle(e.target.value)}
                placeholder="Note Title"
                className={modalInputStyles}
            />
            <div className="bg-surface-inset rounded-xl">
                 <RichTextEditor value={editedContent} onChange={setEditedContent} />
            </div>
             <div className="mt-8 pt-4 flex justify-between items-center border-t border-border -mx-6 -mb-6 px-6 pb-6 bg-surface-muted rounded-b-2xl">
                <button type="button" onClick={() => setStage('prompt')} className={`${modalSecondaryButtonStyles} flex items-center gap-2`}>
                    <ArrowLeftIcon className="h-4 w-4" />
                    Back
                </button>
                <div className="flex gap-3">
                    <button type="button" onClick={handleClose} className={modalSecondaryButtonStyles}>Discard</button>
                    <button onClick={handleSave} className={modalPrimaryButtonStyles}>Save Note</button>
                </div>
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title={stage === 'prompt' ? "Generate Note with AI" : "Review Generated Note"} size="3xl">
            {isLoading && stage === 'prompt' ? (
                <div className="flex flex-col items-center justify-center min-h-[200px]">
                    <SparklesIcon className="h-12 w-12 text-primary animate-pulse" />
                    <p className="mt-4 text-text-secondary font-medium">Generating your notes...</p>
                    <p className="text-sm text-text-muted mt-1">Drafting content...</p>
                </div>
            ) : (
                stage === 'prompt' ? renderPromptStage() : renderReviewStage()
            )}
        </Modal>
    );
};

export default AIGenerateNoteModal;
