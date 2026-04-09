"use client";

import { Button } from "../ui/button";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    children: React.ReactNode;
};

export default function Modal( { isOpen, onClose, onOpen, children }: ModalProps ) {
    if (!isOpen) return(
        <Button 
            size="icon-lg" 
            className="p-5 m-5 w-1/8 h-1/20 rounded-3xl bg-blue-300"
            onClick={onOpen}
            >
                Play!
        </Button>
    );

    return (
        <div
            className="flex items-center justify-center shadow-lg rounded-lg"
            onClick={onClose} // close when clicking background
        >

            <div
                className="bg-zinc-50 p-6 rounded-xl rounded-md"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
            {children}

                <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-gray-200 rounded"
                >
                    Close
                </button>

            </div>
        </div>
    )
}