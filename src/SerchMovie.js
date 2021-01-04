import React, {useState} from 'react';
import styled, {css} from 'styled-components'
import MovieCard from './MovieCard.js';

export default function SearchMovie() {


    //states- input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [page , setPage ] = useState(1);
    const [ currentMovie , setCurrentMovie ] = useState(null)

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
    const viewMoviePage = (id) => {
        const filteredMovie = this.useState.movies.filter(movie => movie.id == id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] :null
        this.setState({ currentMovie : filteredMovie });
    }
    return (
        <>
            <SearchForm onSubmit={searchMovies}>
                <label className="label" htmlFor="query">
                </label>
                <SearchFormTitle>キーワードから映画を検索</SearchFormTitle>
                <InputText className="input" id="keyWords" type="text" name="query" required="required" placeholder="i.e Jurassic Park, 2020,   " value={query} onChange={(e) => setQuery(e.target.value)}/>
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
    margin: 30px auto 100px;
    width: 621px;
`;

const SearchFormTitle = styled.p`
    color:#fff;
    text-align:center;
    font-size:14px;
    letter-spacing:0.06em;
    margin:0 auto 10px;

`;

const InputText = styled.input`
    font-family: 'Roboto', sans-serif;
    width:480px;
    height:50px;
    padding-left: 10px;
    border: 0.2px solid #999;
`;
const SubmitBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    border:none;
    height: 52px;
    padding: 3px 44px 3px 44px;
    text-decoration: none;
    color: #FFF;
    font-weight:800;
    background-image: linear-gradient(#6795fd 0%, #67ceff 100%);
    transition: .4s;

    &:hover {
        background-image: linear-gradient(#6795fd 0%, #67ceff 70%);
    }
`;

const MovieList = styled.div`

`;