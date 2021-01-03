import React from "react";
import styled, {css} from 'styled-components'

export default function MovieCard({movie}){
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
                    <OverReview>{movie.overview}</OverReview>
                    <ReleaseDate>Release: {movie.release_date}</ReleaseDate>
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

const CardTitle = styled.div`
    font-family: HelveticaNeue;
    font-size:22px;
    font-weight: 600;
    text-align:left;
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