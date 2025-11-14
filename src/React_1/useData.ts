// custom hook -> is a way to share logic across files.

import { useState } from "react";

// It just encapsulates the data fetching

async function useFetchData(url: RequestInfo | URL){
    const [ data, setData]=useState(null);
    const [loading, setloading]=useState(false);
    const [error, setError]=useState(null);

    async function fetcher(){
        try{
        setloading(true);
        const response=await fetch(url);
        const data=await response.json();
        setData(data);
        }
        catch(err){
            setError(error);
        }
        finally{
            setloading(false);
        }
    }

    fetcher();

    return {loading, data, error};
}