import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const ManagePlayers = () => {
    return (
        <Card className="flex flex-col p-4 m-4 w-full max-w-md">
            <CardHeader >
                <CardTitle className="text-center text-4xl text-blue-500 font-semibold">Manage Players</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    <li>
                        <h1 className="text-2xl text-left p-2">Player 1</h1>
                    </li>
                    <li>
                        <h1 className="text-2xl text-left p-2">Player 2</h1>
                    </li>
                    <li>
                        <h1 className="text-2xl text-left p-2">Player 3</h1>
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default ManagePlayers