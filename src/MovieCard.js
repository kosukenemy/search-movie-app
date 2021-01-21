import React, { useState } from "react";
import styled, {css} from 'styled-components'
import { BrowserRouter as Router, Route, useHistory , Link , Switch } from "react-router-dom";
import MoviePage from "./MoviePage";
import Home from "./Home";


export default function MovieCard({movie}){

    const ViewMoreBtn =() => {
        return (
            <>
            <OverReview>{movie.overview}</OverReview>
            <ReleaseDate>Release: {movie.release_date}</ReleaseDate>
            </>
        )
    }
    const trigger = document.querySelectorAll('#trigger');

    
    return (
        <CardContainer>
            <CardThumbnail>
                <>
                    <img 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                    <Rating> 
                        <img src={`${process.env.PUBLIC_URL}/asset/ratingIcon.png`} />
                        {movie.vote_average}
                    </Rating>
                </>
            </CardThumbnail>

            <CardContent>
                <CardTitle>{movie.original_title}</CardTitle>

                <div>
                    <Router>
                    <Switch>
                    <>
                    <Link to="/MoviePage">
                        <Btn id="trigger">ViewMore</Btn>
                    </Link>
                    <Route path="/MoviePage" component={ViewMoreBtn}/>
                    </>
                    </Switch>
                    </Router>
                </div>
            </CardContent>

        </CardContainer>
    )
}

const CardContainer = styled.div`
    width:90%;
    display: flex;
    align-items:center;
    margin: 30px auto 10px;
    border-bottom: 1px solid #999;
    padding-bottom: 30px;
    color:#fff;
`;

const CardThumbnail = styled.div`
    position:relative;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    font-size: 0;
`;

const Rating = styled.p`
    width:30px;
    background:#fff;
    position:absolute;
    display:flex;
    align-items:center;
    flex-direction:column;
    font-family: 'Roboto', sans-serif;
    font-size:10px;
    font-weight: 600;
    color:#333;
    bottom:0;
    right:0;
    padding:2px;
    img {
        width:20px;
    }
`;

const CardContent = styled.div`
    margin:30px;
`;

const CardTitle = styled.p`
    font-family: HelveticaNeue;
    font-size:22px;
    font-weight: 600;
    text-align:left;
    line-height: 1.8;
    color:#fff;
    text-decoration:none;
    margin-bottom:20px;
`;


const OverReview = styled.p`
    font-family:HelveticaNeue;
    font-size:13px;
    line-height:1.4;
    letter-spacing:0.06em;
    text-align:left;
`;

const ReleaseDate = styled.p`
    font-size:10px;
    text-align:left;

`;

const Btn = styled.button`

font-family: 'Roboto',sans-serif;
    display: inline-block;
    border: none;
    height: 22px;
    padding: 3px 4px 3px 4px;
    margin-bottom:20px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #FFF;
    font-weight: 800;
    background-image: linear-gradient(#6795fd 0%,#67ceff 100%);
    -webkit-transition: .4s;
    transition: .4s;
`;