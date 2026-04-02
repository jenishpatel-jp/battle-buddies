import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const BattleHistory = () => {
  return (
    <div className="flex flex-col p-4 m-4 w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-4xl text-blue-500 font-semibold">Battle History</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-col p-4">
            <div className="grid grid-cols-2">
              <h1 className="text-3xl text-center p-2">Jenish</h1>
              <h1 className="text-3xl text-center p-2">Daniel</h1>
              <h2 className="text-2xl text-center p-2">50</h2>
              <h2 className="text-2xl text-center p-2">100</h2>
            </div>

          </div>

        </CardContent>
      </Card>

    </div>
  )
};

export default BattleHistory