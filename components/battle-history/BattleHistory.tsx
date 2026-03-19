const BattleHistory = () => {
  return (
    <div className="flex flex-col border-2 border-blue-500 rounded-lg p-4 m-4 w-full max-w-md">
        <h2 className="text-black text-2xl text-center">Battle History</h2>
        <div className="flex flex-row items-center w-full justify-around mt-4">
            <h2 className="text-black items-center justify-center p-2 text-center text-4xl">213</h2>
            <h2 className="text-black items-center justify-center p-2 text-center text-4xl">300</h2>
        </div>
        <div className="flex flex-row items-center w-full justify-around mt-4">
            <h2 className="text-black items-center justify-center p-2 text-center text-xl">Jenish</h2>
            <h2 className="text-black items-center justify-center p-2 text-center text-xl">Daniel</h2>
        </div>
    </div>
  )
}

export default BattleHistory