import React from "react";
import { useEffect , useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
    } from "react-router-dom";
import styled, {css} from 'styled-components';


function ViewMore() {
    const [data, setData] = useState(null);
    const [movieId , setmovieId ] = useState('651571');



    useEffect( () => {

        async function fetchData() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0fc8e9e04a9029823b63bf639cf9752d&language=en&page=1`);
            const jsonData = await response.json()
            setData(jsonData);
            console.log(jsonData);
            console.log(response);
        }
        fetchData();
    },[])


    return (
        <>
            {data && (
            <>
            <p>{data.original_title}</p>
            <div>
                <img 
                        src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                        alt={data.title + ' poster'}
                />
            </div>
            <p>{data.overview}</p>

            </>
            )}
        </>
    )
}
export default ViewMore;