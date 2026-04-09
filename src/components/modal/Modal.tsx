"use client";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal( { isOpen, onClose, children }: ModalProps ) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={onClose} // close when clicking background
        >

            <div
                className="bg-white p-6 rounded-xl"
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