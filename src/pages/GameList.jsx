import React,{useState} from 'react';
import axios from "axios";
import { useEffect } from 'react';
import {getGames} from "../services/api/data"

const GameList = () => {
    const [apiData, setApiData] = useState(null);
    const [games, setGames] = useState(null);
    const data = getGames();
    
    useEffect(() => {
        setGames(data);
    }, [data])

    return(
        <div className='p-5'>
            <h1 className='mb-4'>Game List</h1>
            <div className='grid grid-cols-3 gap-4'>
            {
                (games && games.map(game => (
                    <div className='border p-4 rounded mb-3' key={game.id}>
                        <img src={game.background_image} alt="" className='max-h-80 mx-auto w-full aspect-square object-cover object-top' />
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
        </div>
    )
}

export default GameList;