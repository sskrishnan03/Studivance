
import React, { useState } from 'react';
import Modal from './Modal';
import AIIcon from './AIIcon';
import { groqChatJSON, groqSystemMsg, groqUserMsg } from '../lib/groq';

const modalInputStyles = "w-full px-4 py-2 bg-surface-inset border border-border rounded-lg placeholder:text-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition";
const modalPrimaryButtonStyles = "px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed";

interface BaseGeneratorProps {
    isOpen: boolean;
    onClose: () => void;
}

// --- Subject Generator ---
interface AISubjectGeneratorModalProps extends BaseGeneratorProps {
    onGenerate: (subjects: { title: string; type: 'Theory' | 'Practical'; semester?: string }[]) => void;
}

export const AISubjectGeneratorModal: React.FC<AISubjectGeneratorModalProps> = ({ isOpen, onClose, onGenerate }) => {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        try {
            const data = await groqChatJSON<{ subjects: { title: string; type: 'Theory' | 'Practical'; semester?: string }[] }>([
                groqSystemMsg(`You are a curriculum designer. Generate a list of 5-8 typical academic subjects for a student based on their grade, major, or course. Return valid JSON with a "subjects" array where each item has: title (string), type ("Theory" or "Practical"), semester (string or null).`),
                groqUserMsg(`Generate subjects for: ${prompt}`)
            ]);
            if (data.subjects) onGenerate(data.subjects);
        } catch (e) { console.error(e); alert("Failed to generate subjects."); } 
        finally { setIsLoading(false); }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Generate Subjects with AI" size="lg">
            <div className="space-y-4">
                <p className="text-text-secondary">Enter your grade, major, or course (e.g., "Grade 10 Science" or "Computer Science Sem 4").</p>
                <input value={prompt} onChange={e => setPrompt(e.target.value)} className={modalInputStyles} placeholder="e.g. Mechanical Engineering Year 2" />
                <div className="flex justify-end">
                    <button onClick={handleGenerate} disabled={isLoading} className={`${modalPrimaryButtonStyles} flex items-center gap-2`}>
                        <AIIcon className="h-5 w-5" /> {isLoading ? 'Generating...' : 'Generate Subjects'}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

// --- Task Generator ---
interface AITaskGeneratorModalProps extends BaseGeneratorProps {
    onGenerate: (tasks: { title: string; priority: 'High' | 'Medium' | 'Low' }[]) => void;
}

export const AITaskGeneratorModal: React.FC<AITaskGeneratorModalProps> = ({ isOpen, onClose, onGenerate }) => {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        try {
            const data = await groqChatJSON<{ tasks: { title: string; priority: 'High' | 'Medium' | 'Low' }[] }>([
                groqSystemMsg(`You are a task planner. Generate a checklist of 5-10 actionable tasks to achieve a given goal. Return valid JSON with a "tasks" array where each item has: title (string), priority ("High", "Medium", or "Low").`),
                groqUserMsg(`Generate tasks for: ${prompt}`)
            ]);
            if (data.tasks) onGenerate(data.tasks);
        } catch (e) { console.error(e); alert("Failed to generate tasks."); } 
        finally { setIsLoading(false); }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Generate Tasks with AI" size="lg">
            <div className="space-y-4">
                <p className="text-text-secondary">Describe a project or goal you need to complete (e.g., "Prepare for Physics Final" or "Organize a College Fest").</p>
                <input value={prompt} onChange={e => setPrompt(e.target.value)} className={modalInputStyles} placeholder="e.g. Complete Biology Assignment" />
                <div className="flex justify-end">
                    <button onClick={handleGenerate} disabled={isLoading} className={`${modalPrimaryButtonStyles} flex items-center gap-2`}>
                        <AIIcon className="h-5 w-5" /> {isLoading ? 'Generating...' : 'Generate Tasks'}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

// --- Exam Generator ---
interface AIExamGeneratorModalProps extends BaseGeneratorProps {
    onGenerate: (exams: { title: string; type: 'Theory' | 'Practical' }[]) => void;
}

export const AIExamGeneratorModal: React.FC<AIExamGeneratorModalProps> = ({ isOpen, onClose, onGenerate }) => {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        try {
            const data = await groqChatJSON<{ exams: { title: string; type: 'Theory' | 'Practical' }[] }>([
                groqSystemMsg(`You are an exam scheduler. Generate a list of likely exams (Midterms, Finals, Practicals) for a student based on their course. Return valid JSON with an "exams" array where each item has: title (string), type ("Theory" or "Practical").`),
                groqUserMsg(`Generate exams for: ${prompt}`)
            ]);
            if (data.exams) onGenerate(data.exams);
        } catch (e) { console.error(e); alert("Failed to generate exams."); } 
        finally { setIsLoading(false); }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Generate Exams with AI" size="lg">
            <div className="space-y-4">
                <p className="text-text-secondary">Enter your course or curriculum to suggest standard exams (e.g., "IB Diploma Year 1" or "MBA Semester 1").</p>
                <input value={prompt} onChange={e => setPrompt(e.target.value)} className={modalInputStyles} placeholder="e.g. High School Finals" />
                <div className="flex justify-end">
                    <button onClick={handleGenerate} disabled={isLoading} className={`${modalPrimaryButtonStyles} flex items-center gap-2`}>
                        <AIIcon className="h-5 w-5" /> {isLoading ? 'Generating...' : 'Generate Exam List'}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

// --- Timetable Generator ---
interface AITimetableGeneratorModalProps extends BaseGeneratorProps {
    onGenerate: (events: { title: string; dayOfWeek: number; startTime: string; endTime: string }[]) => void;
}

export const AITimetableGeneratorModal: React.FC<AITimetableGeneratorModalProps> = ({ isOpen, onClose, onGenerate }) => {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        try {
            const data = await groqChatJSON<{ events: { title: string; dayOfWeek: number; startTime: string; endTime: string }[] }>([
                groqSystemMsg(`You are a timetable scheduler. Generate a weekly study timetable based on the user's description. dayOfWeek: 0=Sunday, 1=Monday... 6=Saturday. Times in HH:MM 24h format. Return valid JSON with an "events" array where each item has: title (string), dayOfWeek (number 0-6), startTime (string HH:MM), endTime (string HH:MM).`),
                groqUserMsg(`Generate a timetable for: ${prompt}`)
            ]);
            if (data.events) onGenerate(data.events);
        } catch (e) { console.error(e); alert("Failed to generate timetable."); } 
        finally { setIsLoading(false); }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Generate Timetable with AI" size="lg">
            <div className="space-y-4">
                <p className="text-text-secondary">Describe your availability and what you want to study (e.g., "I want to study Math and Physics on Mon/Wed evenings and History on weekends").</p>
                <textarea rows={3} value={prompt} onChange={e => setPrompt(e.target.value)} className={modalInputStyles} placeholder="Describe your schedule needs..." />
                <div className="flex justify-end">
                    <button onClick={handleGenerate} disabled={isLoading} className={`${modalPrimaryButtonStyles} flex items-center gap-2`}>
                        <AIIcon className="h-5 w-5" /> {isLoading ? 'Generating...' : 'Generate Schedule'}
                    </button>
                </div>
            </div>
        </Modal>
    );
};
