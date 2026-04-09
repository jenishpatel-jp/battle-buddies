'use client'

import BattleHistory from "../components/battleHistory/BattleHistory";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      
      <main className="flex flex-col items-center justify-center w-full py-16 px-6">
        <h1 className="text-4xl font-extrabold w-full text-black text-center p-5 m-5">Scoreboard!</h1>

        <div className="flex items-center justify-center w-full max-w-4xl">

          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            >
            <CarouselContent >
              <CarouselItem className="flex items-center justify-center w-full">
                <BattleHistory />
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center w-full">
                <BattleHistory />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          

        </div>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onOpen={() => setIsModalOpen(true)}>
            <p>This is the modal content.</p>
          </Modal>

      </main>
      
      
    </div>
  );
}
