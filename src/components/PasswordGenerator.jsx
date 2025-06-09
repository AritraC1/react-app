import { useState, useCallback } from "react"


function PasswordGenerator() {
    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const PasswordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str += "0123456789";
        if(characterAllowed) str += "!@#$%^&*()-_=+\{};:/?.><~|`";

        for(let i = 1; i <= array.length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);

            pass = str.charAt(char);
        }

        setPassword(pass)

    }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>

    <h1 className="text-4xl text-center my-4">Password Generator</h1>

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-neutral-50" placeholder="Password" readOnly/>
            <button className="outline-none bg-orange-500 text-white px-3 py-1 shrink-0">Copy</button>
        </div>
    </div>
    
    </>
  )
}

export default PasswordGenerator