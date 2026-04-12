import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Check } from "lucide-react"

const SelectPlayers = () => {

    return (
        <Card className="flex flex-col p-4 m-4 w-full max-w-md shadow-lg">

            <CardHeader >
                <CardTitle className="text-center text-4xl text-blue-500 font-semibold">Manage Players</CardTitle>
            </CardHeader>

            <CardContent className="h-full">
                <div className="flex flex-col p-2">
                    <h2 className="text-2xl text-left">Players</h2>
                    <div  className="flex gap-2 items-center">
                        <Checkbox className="p-2 m-2" id="player1" />
                        <h2 className="text-xl text-left">Jenish</h2>
                    </div>
                    <div  className="flex gap-2 items-center">
                        <Checkbox className="p-2 m-2" id="player1" />
                        <h2 className="text-xl text-left">Daniel</h2>
                    </div>
                    <div  className="flex gap-2 items-center">
                        <Checkbox className="p-2 m-2" id="player1" />
                        <h2 className="text-xl text-left">Ashwin</h2>
                    </div>
            
                
                </div>
                <div className=" flex flex-row items-center justify-center ">
                    <Button className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl">Add Player</Button>
                    <Button className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl">Next</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default SelectPlayers