import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [result, setResult] = useState({});

    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => (res.json()))
        .then((data) => setResult(data[currency]))
       console.log(result)
    }, [currency])

    console.log(result)

    return result;
}

export default useCurrencyInfo;