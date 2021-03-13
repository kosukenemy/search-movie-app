
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import { fetchMovieByGenre } from '../servies';

export default function GenreMovie({match}){
    let params = match.params;
    const [movieByGenre ,setMovieByGenre] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [genreLoaded , setGenreLoaded] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            setMovieByGenre(await fetchMovieByGenre(params.id));
        }
        fetchApi();
    }, [params.id])

    console.log(movieByGenre);

    const movieList = movieByGenre.map((genre, index) => {
        return (
            <div key={index}>
                
                <div className="cards-inner">
                    <Link to={`/movie/${genre.id}`}>
                        <Card>
                        <img src={genre.poster} alt={genre.title}
                            className={`smooth-image image- ${imageLoaded ? 'visible' :  'hidden'}`}
                            onLoad={()=> setImageLoaded(true)}
                            onLoad={() => setGenreLoaded(true)}
                        />
                        <CardCaption>
                            <p>
                                {genre.title}
                            </p>
                        </CardCaption>
                        </Card>

                        {!imageLoaded && (
                            <div className="smooth-preloader">
                                <span className="loader" />
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <GenreMovieContainer className={`isloadClose ${genreLoaded && "isloadOpen"}`}>
            <MovieListInner>
                {movieList}
            </MovieListInner>
        </GenreMovieContainer>
    )
};


// メディアクエリ
export const media = {
    desktop: (...args) => css`
    @media (min-width: 1300px) {
        ${ css(...args)}
    }
    `,
        mid: (...args) => css`
        @media (min-width: 1025px) {
            ${ css(...args)}
        }
        `,
    phone: (...args) => css`
    @media (max-width: 768px) {
        ${ css(...args)}
    }
    `
}


const GenreMovieContainer = styled.div`
    width: 1080px;
    margin: 50px auto 0;
`;

const MovieListInner = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 10rem));
    place-content: center space-between;
    align-items: start;
    padding: 0rem 0px;
    gap: 2rem 1rem;
    ${media.phone`
        grid-template-columns: repeat(20, minmax(250px, 10rem));
        overflow-x:scroll;
    `}
`;

const Card = styled.figure`
    width:100%;
    
    img {
        width:100%;
        height:23rem;
        border-radius: 0.2rem;
        border: solid 1px #444;
    }

`;
const CardCaption = styled.figcaption`
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 10px auto 0;
`;