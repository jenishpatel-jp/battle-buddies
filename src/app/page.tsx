'use client'

import Modal from "@/components/modal/Modal";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      
      <main className="flex flex-col items-center justify-center w-full py-16 px-6">

          <Modal 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)} 
            onOpen={() => setIsOpen(true)} 
            >

            <p>This is the modal content.</p>
          </Modal>

      </main>
      
      
    </div>
  );
}
