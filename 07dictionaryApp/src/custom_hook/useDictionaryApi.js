import { useEffect, useState } from "react";


function useDictionaryApi(word){

    const [result, setResult] = useState({})

    useEffect(() => {

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => (res.json()))
            .then((data) => (setResult(data)))
            .catch((e) => {console.error(e)})
        // console.log(result)

    }, [word])
    // console.log(result)
    return result;

}

export default useDictionaryApi;