import BattleHistory from "../../components/battle-history/BattleHistory";

export default function Home() {
  return (
    <div className="flex flex-col h-1/6 items-center justify-center bg-zinc-50 font-sans ">
      
      <main className="flex min-h-screen flex-col items-center justify-center py-32 px-16 bg-zinc sm:items-start w-full">
        <h1 className="text-4xl w-full text-black justify-center items-center text-center p-5 m-5">Battle Buddies Homepage!</h1>

        <div className="flex flex-row items-center justify-center h-full w-full">
          <BattleHistory />
        </div>

      </main>
      
      
    </div>
  );
}
