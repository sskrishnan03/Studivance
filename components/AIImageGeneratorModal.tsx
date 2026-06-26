import React from 'react';
import Modal from './Modal';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface AIImageGeneratorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onInsertImage: (base64Image: string) => void;
}

const AIImageGeneratorModal: React.FC<AIImageGeneratorModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Nano Banana Image Studio" size="2xl">
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-surface-inset rounded-full flex items-center justify-center mb-6">
                    <PhotoIcon className="h-10 w-10 text-text-muted" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Image Generation Unavailable</h3>
                <p className="text-text-secondary max-w-md">
                    The current API provider (Groq) does not support image generation. 
                    Image generation requires a Gemini API key from Google AI Studio.
                </p>
                <p className="text-text-muted text-sm mt-4">
                    All other AI features (chat, notes, summaries, quizzes, generators) work with the current API.
                </p>
                <button
                    onClick={onClose}
                    className="mt-8 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-all"
                >
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default AIImageGeneratorModal;
