import { Card, CardHeader, CardTitle } from "../ui/card"

const NumberOfRaces = () => {
    return (
        <Card className="flex flex-col p-4 m-4 w-full max-w-md shadow-lg">
            <CardHeader >
                <CardTitle className="text-center text-4xl text-blue-500 font-semibold">Select the number of races</CardTitle>
            </CardHeader>

        </Card>
    )

}

export default NumberOfRaces