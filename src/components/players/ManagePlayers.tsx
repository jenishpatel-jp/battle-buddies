import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Checkbox } from "../ui/checkbox"

const ManagePlayers = () => {
    return (
        <Card className="flex flex-col p-4 m-4 w-full max-w-md">
            <CardHeader >
                <CardTitle className="text-center text-4xl text-blue-500 font-semibold">Manage Players</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    <li className="flex flow-row">
                        <h1 className="text-2xl text-left p-2">Player 1</h1>
                    </li>
                    <li className="flex flow-row">
                        <h1 className="text-2xl text-left p-2">Player 2</h1>
                    </li>
                    <li className="flex flow-row">
                        <h1 className="text-2xl text-left p-2">Player 3</h1>
                    </li>
                </ul>
                <div className=" flex flex-row items-center justify-center ">
                    <Button className="p-3 m-3 w-1/3 h-1/5 bg-blue-300 text-xl">Add Player</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ManagePlayers