import React, {useState} from 'react';
import styled, {css} from 'styled-components'
import MovieCard from './MovieCard.js';

export default function SearchMovie() {

    //states- input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async(e) => {
        e.preventDefault();
        const keyWords = document.getElementById('keyWords').value;
        console.log(keyWords)
        const query = keyWords;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=0fc8e9e04a9029823b63bf639cf9752d&language=ja&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        } catch(err) {
            console.log(err)
        }
    } 
    return (
        <>
            <SearchForm onSubmit={searchMovies}>
{/*                 <label className="label" htmlFor="query">
                </label> */}
                <InputText className="input" id="keyWords" type="text" name="query" required="required" placeholder="i.e Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <SubmitBtn className="button" type="submit">
                    Search
                </SubmitBtn>
            </SearchForm>
            <MovieList>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </MovieList>
        </>
    )
}


const SearchForm = styled.form`
    position: absolute;
    top: 20px;
    right:30px;
`;

const InputText = styled.input`
    font-family: 'Roboto', sans-serif;
    width:230px;
    height:30px;
    padding-left: 10px;
    border: 0.2px solid #999;
`;
const SubmitBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    border:none;
    height: 31px;
    padding: 3px 14px 3px 14px;
    text-decoration: none;
    color: #FFF;
    font-weight:bold;
    background-image: linear-gradient(#6795fd 0%, #67ceff 100%);
    transition: .4s;

    &:hover {
        background-image: linear-gradient(#6795fd 0%, #67ceff 70%);
    }
`;

const MovieList = styled.div`

`;