import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";


const SelectWinner = () => {

    return (
        <Card className="flex flex-col p-4 m-4 w-full max-w-md shadow-lg">
            <CardHeader >
                <CardTitle className="text-center text-4xl text-blue-500 font-semibold">Who Won?</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
                <h2>Match 1</h2>
                <div className="grid grid-cols-2 gap-4 p-2">

                    <h2 className="text-xl text-center">1</h2>
                    <h2 className="text-xl text-center">Jenish</h2>
                    <h2 className="text-xl text-center">2</h2>
                    <h2 className="text-xl text-center">Daniel</h2>
                    <h2 className="text-xl text-center">3</h2>
                    <h2 className="text-xl text-center">Ashwin</h2>

                </div>
                <div className="flex flex-row items-center justify-around p-2">
                    <div className=" flex flex-row items-center justify-center ">
                        <Button className="p-3 m-3 w-1/3 h-1/3 bg-white text-xl text-black">Back</Button>
                    </div>
                    <div className=" flex flex-row items-center justify-center ">
                        <Button className="p-3 m-3 w-1/3 h-1/3 bg-white text-xl text-black">Next</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default SelectWinner