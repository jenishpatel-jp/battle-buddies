"use client";

import NumberOfRaces from "../newGame/NumberOfRaces";
import SelectPlayers from "../newGame/SelectPlayers";
import { Button } from "../ui/button";
import Dashboard from "./Dashboard";
import { useState } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    children: React.ReactNode;
}

export default function Modal( { isOpen, onClose, onOpen, children }: ModalProps ) {

    const [step, setStep] = useState(1);  

    if (!isOpen) return(
        <div className="flex flex-col items-center justify-center ">
            <Dashboard />
            <Button 
                size="icon-lg" 
                className="p-5 m-5 w-1/8 h-1/20 rounded-3xl bg-blue-300"
                onClick={onOpen}
                >
                    Play!
            </Button>
        </div>
    );

    switch(step){
        case 0:
            return (
                <SelectPlayers />
            )
        case 1:
            return(
                <NumberOfRaces />
            )
    }
}