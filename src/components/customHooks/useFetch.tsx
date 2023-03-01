import { useEffect, useState } from "react";

const useFetch = (url: string) => {

    const [dado, setDado] = useState<any>();

    useEffect(() =>{
        const loadData = async () => {
            const data = await fetch(url)
                         .then(data => data.json())
                         .catch(err => console.error());
            
            setDado(data);          
        };

        loadData();
    }, [url]);

  return {dado};
};

export default useFetch;
