import React, {useState} from 'react';
import styled, {css} from 'styled-components'
import MovieCard from './MovieCard';
import { BrowserRouter, Route, Router , Switch, useParams ,Link } from "react-router-dom";

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
        
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '検索キーワード：' + keyWords;

        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
            console.log(data);
            
        } catch(err) {
            console.log(err)
        }
    } 

    return (
        <>
        <SearchMovieContainer>
            <SearchForm onSubmit={searchMovies}>
                <label className="label" htmlFor="query">
                    <InputText className="input" id="keyWords" type="text" name="query" required="required" placeholder="" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <SubmitBtn className="button" type="submit">
                        Search
                    </SubmitBtn>
                </label>
                {/* 検索キーワード */}
                <SearchResults>
                    <p id="searchResults"></p>
                </SearchResults>
            </SearchForm>

            <>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </>
        </SearchMovieContainer>
        </>
    )
}

const SearchMovieContainer = styled.div`
    width:1080px;
    margin:0 auto;
    display:block;
`;


const SearchForm = styled.form`
    text-align:center;
    margin:50px auto 200px;
`;

const SearchFormTitle = styled.p`
    color:#fff;
    text-align:center;
    font-size:14px;
    font-weight: bold;
    letter-spacing:0.06em;
    margin:0 auto 10px;

`;

const InputText = styled.input`
    font-family: 'Roboto', sans-serif;
    width:600px;
    padding-left: 10px;
    border: 0.2px solid #999;
`;
const SubmitBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    border:none;
    text-decoration: none;
    color: #FFF;
    background:transparent;
    border: 1px solid #888;
    border-radius: 2px;
    transition: .4s;

`;

const SearchResults = styled.div`
    p {
        color:#fff;
        margin-top: 10px;
        font-size: 14px;
        letter-spacing: 0.06em;
    }

`;

