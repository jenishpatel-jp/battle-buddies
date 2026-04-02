import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const BattleHistory = () => {
  return (
    <div className="flex flex-col border-2 border-blue-500 rounded-lg p-4 m-4 w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Battle History</CardTitle>

        </CardHeader>
      </Card>

    </div>
  )
};

export default BattleHistory