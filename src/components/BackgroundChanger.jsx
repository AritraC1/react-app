import { useState } from 'react'

function BackgroundChanger() {
    const [color, setColor] = useState("yellow")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
                <button onClick={() => setColor ("red")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'red'}}>Red</button>
                <button onClick={() => setColor ("blue")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'blue'}}>Blue</button>
                <button onClick={() => setColor ("orange")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'orange'}}>Orange</button>
                <button onClick={() => setColor ("green")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'green'}}>Green</button>
                <button onClick={() => setColor ("purple")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'purple'}}>Purple</button>
                <button onClick={() => setColor ("pink")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'pink'}}>Pink</button>
                <button onClick={() => setColor ("gray")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'gray'}}>Gray</button>
                <button onClick={() => setColor ("black")} className="outline-none px-4 py-1 rounded-2xl text-white" style={{backgroundColor: 'black'}}>Black</button>
            </div>
        </div>
    </div>
  )
}

export default BackgroundChanger