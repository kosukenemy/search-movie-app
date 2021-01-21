import React, {useState} from 'react';
import { useEffect } from 'react';
import styled, {css} from 'styled-components'

const Home = () => {
    const [movies , setMovies ] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=0fc8e9e04a9029823b63bf639cf9752d&language=ja&page=1&include_adult=false";

    useEffect(() => {
        try {
            fetch(url)
            .then(( res => {
                return( res.json() )
            }))
            .then(( data ) => {
                setMovies(data.results)
                console.log(data)
                console.log(movies)
    
            })
        } catch(err) {
            console.log(err)
        }
    }, []);

    return (
        
        <>
            {movies.filter(movie => movie.poster_path).map(movie => (
                <div key={movie.id}>
                    <>
                    <img 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                    </>
                </div>
            ))}
        </>
    )
}
export default Home;