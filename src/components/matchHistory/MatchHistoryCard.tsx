import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "../ui/card"

const MatchHistoryCard = () => {


    return (
        <Card className="flex flex-col p-4 m-4 w-full max-w-md shadow-lg">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Match History #</CardTitle>
                <h4 className="text-center text-lg text-muted-foreground">Date: {new Date().toLocaleDateString()}</h4>
                {/* Date */}
            </CardHeader>
            <CardContent>
                {/* Match history details will go here */}
            </CardContent>
        </Card>
    )
    }

export default MatchHistoryCard