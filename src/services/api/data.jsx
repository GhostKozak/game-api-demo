import axios from "axios";
import { useEffect ,useState} from 'react';

export const getGames =  () => {
    const [apiData, setApiData] = useState(null);
    const [games, setGames] = useState(null);
    
    useEffect( () => {

        axios.get(`${import.meta.env.VITE_BASE_URL}games${import.meta.env.VITE_API_KEY}`)
            .then((response) => {
                setApiData(response.data)
                setGames(response.data.results)
            })
            .catch((reason) => console.log(reason))

    }, [])

    return games;
}
