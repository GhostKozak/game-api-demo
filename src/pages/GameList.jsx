import React,{useState} from 'react';
import axios from "axios";
import { useEffect } from 'react';

const GameList = () => {
    const [apiData, setApiData] = useState(null);
    const [games, setGames] = useState(null);
    
    useEffect(() => {
        // axios({
        //     url: "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games",
        //     method: 'POST',
        //     headers: {
        //         'Accept' : 'application/json',
        //         'Client-ID' : import.meta.env.VITE_CLIENT_ID,
        //         'Authorization' : import.meta.env.VITE_AUTHORIZATION_TOKEN, 
        //     },
        //     data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
        // })
        // .then(response => {
        //     setGames(response.data);
        // })
        // .catch(err => {
        //     console.error(err);
        // });
        axios.get(`${import.meta.env.VITE_BASE_URL}games${import.meta.env.VITE_API_KEY}`)
            .then((response) => {
                setApiData(response.data)
                setGames(response.data.results)
                console.log(response.data.results)
            })
            .catch((reason) => console.log(reason))

        //Çalışıyor
    }, [])

    return(
        <div className='p-5'>
            <h1 className='mb-4'>Game List</h1>
            {
                (games && games.map(game => (
                    <div className='border p-4 rounded mb-3' key={game.id}>
                        <h1>{game.name}</h1>
                        <p> { game.genres.map(genre => <span key={genre.id}>{genre.name}, </span>) } </p>
                        <p>Metacritic : {game.metacritic}/100</p>
                        <p>Platforms: { game.platforms.map(plat => <span key={plat.platform.id}>{plat.platform.name}, </span>) }</p>
                        <p>Release Date : {game.released}</p>
                        <div className='grid grid-cols-4 gap-2 max-w-full'>
                            {
                                game.short_screenshots.map(ss => (
                                    <img key={ss.id} className='rounded' src={ss.image} alt="" />
                                ))
                            }
                        </div>
                    </div>
                )))
            }
        </div>
    )
}

export default GameList;