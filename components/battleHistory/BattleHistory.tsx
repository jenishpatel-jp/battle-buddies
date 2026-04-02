import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const BattleHistory = () => {
  return (
    <div className="flex flex-col p-4 m-4 w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-4xl">Battle History</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2">
              <h1 className="text-3xl text-center">Jenish</h1>
              <h1 className="text-3xl text-center">Daniel</h1>
              <h2 className="text-2xl text-center">50</h2>
              <h2 className="text-2xl text-center">100</h2>
            </div>

          </div>

        </CardContent>
      </Card>

    </div>
  )
};

export default BattleHistory