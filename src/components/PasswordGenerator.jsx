import { useState, useCallback, useEffect, useRef } from "react"

function PasswordGenerator() {
    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // useRef Hook
    const passwordRef = useRef(null);

    const PasswordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str += "0123456789";
        if(characterAllowed) str += "!@#$%^&*()-_=+\{};:/?.><~|`";

        for(let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass)

    }, [length, numberAllowed, characterAllowed, setPassword]); // here setPassword is added for optimization. It is a part of Memoization 
    // (Memoization in React is an optimization technique that involves caching the results of expensive function calls and reusing those cached results when the same inputs occur again. This helps to avoid unnecessary re-renders and computations, improving the performance of React applications)

    // PasswordGenerator() // too many re-renders, react limits

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0,100)
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        PasswordGenerator()
    }, [length, numberAllowed, characterAllowed, PasswordGenerator]); // it re-renders if something changes in the dependency
    return (
        <>
            <h1 className="text-4xl text-center my-4">Password Generator</h1>

            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600">
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-neutral-50" placeholder="Password" readOnly ref={passwordRef}/>
                    <button className="outline-none bg-orange-500 text-white px-3 py-1 shrink-0 cursor-pointer" onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
                        <label className="text-orange-500">Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {setNumberAllowed(prev => !prev)}}/> 
                        {/* Reversing the prev value 'prev => !prev' */}
                        <label htmlFor="numberInput" className="text-orange-500">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={characterAllowed} id="numberInput" onChange={() => {setCharacterAllowed(prev => !prev)}}/>
                        <label htmlFor="characterInput" className="text-orange-500">Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordGenerator