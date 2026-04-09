"use client";

import { Button } from "../ui/button";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal( { isOpen, onClose, children }: ModalProps ) {
    if (!isOpen) return(
        <Button size="icon-lg" className="p-5 m-5 w-1/8 h-1/20 rounded-3xl bg-blue-300">
            Play!
        </Button>
    );

    return (
        <div
            className="flex items-center justify-center"
            onClick={onClose} // close when clicking background
        >

            <div
                className="bg-black p-6 rounded-xl"
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