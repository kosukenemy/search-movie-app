import React, {useState} from 'react';
import { useEffect } from 'react';
import styled, {css} from 'styled-components'
import { BrowserRouter, Route, Link , Switch, Router } from 'react-router-dom';
import MoviePage from './MoviePage';

const PopularMovie = () => {
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
        
        <Inner>
        <>
            {movies.filter(movie => movie.poster_path).map(movie => (
                <div key={movie.id}>

                    <>
                    <Link to="/ViewMore">
                    <img 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                    <div className="movieTitle">
                        <p>
                            {movie.original_title}
                        </p>
                    </div>
                    </Link>
                    </>

                </div>
            ))}
        </>
        </Inner>
    )
}
export default PopularMovie;




const Inner = styled.ul`
    display: flex;

    div {
        position: relative;
        margin: 0 auto;

        img {
        width:12vw;
        padding: 0px 6px;
        }
        .movieTitle {
            position: absolute;
            left: 12px;
            bottom:8px; 
            color:#fff;
            width:12vw;
            

            p { 
                font-size: 12px;
                font-weight:600;
            }
        }

        &:hover {
            transform:scale(1.1);
            transition:all 0.2s ease-in;
        }

    }
`;

