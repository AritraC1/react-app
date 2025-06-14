// Custom Hook
// React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.

import { useEffect, useState } from "react";

// Hooks name always start with use (default)
function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // Empty object for contingency plan

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    
    useEffect(()=>{
        // API call
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
        // console.log(`The Data is ${data}`);
    }, [currency]);
    // console.log(`Now the data is ${data}`);
    
    return data;
}

export default useCurrencyInfo