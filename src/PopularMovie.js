import React, {useState} from 'react';
import { useEffect } from 'react';
import styled, {css} from 'styled-components'
import { BrowserRouter, Route, Link , Switch, Router } from 'react-router-dom';
import MoviePage from './MoviePage';
import ViewMore from './ViewMore';

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

    for (let i = 0; i < movies.length; i++) {
        const Nodes = movies[i];
        console.log(Nodes)
    }



    return (
        
        <Inner>
        <>
            {movies.filter(movie => movie.poster_path).map(movie => (
                <li key={movie.id}>

                    <>
                    <Link to={`${process.env.PUBLIC_URL}/movie/${movie.id}`}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                    <div className="movieTitle">
                        <p>
                            {movie.original_title}
                        </p>
                    </div>
                    </Link>
                    </>
                </li>
            ))} 
        </>
        </Inner>
    )
}
export default PopularMovie;




const Inner = styled.ul`
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
    place-content: space-between space-evenly;
    -webkit-box-align: start;
    align-items: start;
    padding: 4rem 0px;
    gap: 2rem;

    li {
        position: relative;
        list-style:none;

        img {
        width:100%;
        height: 23rem;
        border-radius: 1rem;
        }
        .movieTitle {
            color:#192A59;
            width:100%;
            

            p { 
                font-size: 12px;
                font-weight:600;
                text-align:center;
            }
        }


    }
`;

