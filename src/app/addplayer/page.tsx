export default function AddPlayer() {
    return(
        <div className="flex flex-1 min-h-screen bg-zinc-50 items-center justify-center flex-col">
            <h1 className="text-black text-3xl font-bold p-3 m-5">Add Player</h1>
            <div className="border-2 border-black p-4  ">
                <ul>
                    <li className="text-black text-lg">Jenish</li>
                    <li className="text-black text-lg">Daniel</li>
                    <li className="text-black text-lg">Ashwin</li>

                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add Player</button>

            </div>
        </div>
    )
};