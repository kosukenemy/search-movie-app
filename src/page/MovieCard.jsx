
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled, {css} from 'styled-components'


export default function MovieCard({movie}){

    return (
        <div>
        <CardContainer>
            <CardThumbnail>
                <Link to={`/movie/${movie.id}`}>
                <>
                    <img style={{
                        width: '100%',
                    }}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                <CardContent>
                    <CardTitle>{movie.original_title}</CardTitle>
                </CardContent>
                </>
                </Link>
            </CardThumbnail>
        </CardContainer>
        </div>
        
    )
}

const SearchResultBox = styled.div`
    position:absolute;
    z-index:10;
`;

const CardContainer = styled.div`


`;

const CardThumbnail = styled.div`
    width:300px;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    font-size: 0;
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