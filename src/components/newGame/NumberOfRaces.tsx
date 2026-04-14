import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"

type ModalProps = {
    setSelectingRaces: React.Dispatch<React.SetStateAction<boolean>>;
    setRaceNumber: React.Dispatch<React.SetStateAction<number>>;
}

const NumberOfRaces = ( { setSelectingRaces, setRaceNumber }: ModalProps ) => {
    return (
        <Card className="flex flex-col p-4 m-4 w-full max-w-md shadow-lg">
            <CardHeader >
                <CardTitle className="text-center text-4xl text-blue-500 font-semibold">Select the number of races</CardTitle>
            </CardHeader>
            <CardContent className="h-full flex flex-row items-center justify-center flex-wrap gap-4">
                <Button 
                    className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl" 
                    onClick={() => setRaceNumber(2)}
                >
                    2
                </Button>
                <Button 
                    className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl" 
                    onClick={() => setRaceNumber(4)}
                >
                    4
                </Button>
                <Button 
                    className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl" 
                    onClick={() => setRaceNumber(8)}
                >
                    8
                </Button>
                <Button 
                    className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl" 
                    onClick={() => setRaceNumber(2)}
                >
                    12
                </Button>
                <Button 
                    className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl" 
                    onClick={() => setRaceNumber(32)}
                >
                    32
                </Button>
            </CardContent>
            <div className=" flex flex-row items-center justify-around">
                <Button className="p-3 m-3 w-1/3 h-1/5 bg-white text-black text-xl flex items-center justify-center rounded-lg">
                    <h2 className="text-2xl p-2">Back</h2>
                </Button>
                <Button  
                    className="p-3 m-3 w-1/3 h-1/5 bg-white text-black text-xl flex items-center justify-center rounded-lg"
                    onClick={() => {
                        setSelectingRaces(false);
                        setRaceNumber(1);
                    }}
                    >
                    <h2 className="text-2xl p-2">Next</h2>
                </Button>
            </div>

        </Card>
    )

}

export default NumberOfRaces