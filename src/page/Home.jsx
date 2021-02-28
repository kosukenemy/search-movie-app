
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components'



import { fetchMovieByGenre, fetchMovies , fetchTopratedMovie } from '../servies';

import RBCarousel from "react-bootstrap-carousel";
import SearchMovie from './SerchMovie';

export default function Home(){
    const [nowPlaying, setNowPlaying] = useState([]);
    const [movieByGenre ,setMovieByGenre ] = useState([]);
    const [movieToprated , setMovieToprated ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setNowPlaying(await fetchMovies());
            setMovieByGenre(await fetchMovieByGenre());
            setMovieToprated(await fetchTopratedMovie());
        }
        fetchApi();
    }, [])
    const movies = nowPlaying.slice(0.5).map((item , index) => {
        return (
            <div key={index}>
                <Carousel>
                    <Link to={`/movie/${item.id}`}>
                    <CarouselPoster>
                        <CarouselPosterContents>
                            <TopMovietitle>
                                <p>
                                    FEATURE
                                </p>
                                <h2>
                                    "{item.title}"
                                </h2>
                            </TopMovietitle>
                        </CarouselPosterContents>
                        <img src={item.backPoster} alt={item.title}/>
                    </CarouselPoster>
                    </Link>
                </Carousel>
                
            </div>
        );
    });

    const movieList = movieByGenre.slice(0 ,8).map((item, index) => {
        return (
            <div key={index}>
                
                <Card>
                    <Link to={`/movie/${item.id}`}>
                        <img style={{
                            width:'100%', height:'23rem',
                            borderRadius: '0.2rem',
                            border: 'solid 1px #444',
                        }} src={item.poster} alt={item.title}/>
                        <figcaption>
                        <p className="mt-2" style={{
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight : 'bold',
                            textAlign: 'center',
                            marginBottom : '0'
                        }}>{item.title}</p>
                        </figcaption>
                    </Link>
                </Card>
            </div>
        );
    });

    const topMovies = movieToprated.slice(0 ,8).map((item , index) => {
        return (
            <div key={index}>
                <Card>
                    <Link to={`/movie/${item.id}`}>
                        <img style={{
                            width:'100%', height:'23rem',
                            borderRadius: '0.2rem',
                            border: 'solid 1px #444',
                        }} src={item.poster} alt={item.title}/>
                        <figcaption>
                        <p className="mt-2" style={{
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight : 'bold',
                            textAlign: 'center',
                            marginBottom : '0'
                        }}>{item.title}</p>
                        </figcaption>
                    </Link>
                </Card>
            </div>
        );
    });

    
    return (
        <HomeContainer>
            <div className="row">
                <div className="col">
                <RBCarousel
                autoplay={true}
                pauseOnVisibility={true}
                slidesshowSpeed={2000}
                version={4}
                indicators={true}
                >
                    {movies}
                </RBCarousel>
                </div>
            </div>

            <Inner>
                <h3 className="topicsTitile">Discover Movie</h3>
                <MovieListInner>
                    {movieList}
                </MovieListInner>
                <>
                <h3 className="topicsTitile">TopRated Movie</h3>
                <MovieListInner>
                {topMovies}
                </MovieListInner>
                </>
            </Inner>
            
        </HomeContainer>
    )
    return null
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


const HomeContainer = styled.div`
    width:100%;
    margin: 0 auto;
    position:relative;

`;

const Carousel = styled.div`
    width:100vw;
    display:block;
    margin :0 auto;

    img {
        width:100%;

    }
`;

const CarouselPoster = styled.div`
    position:relative;
`;

const CarouselPosterContents = styled.div`
    position:absolute;
    left: 30px;
    bottom: 50px;
    ${media.phone`
    left: 3%;
    bottom: 5%;
    `}

    h2 {
        font-weight: 500;
        letter-spacing:0.02em;
        color:#fff;
        ${media.phone`
            font-size:calc( 14 * (100vw / 375) );
        `}
    }
`;

const TopMovietitle = styled.div`
    p {
        width:96px;
        background-color:#fff;
        padding:5px 10px;
        font-weight:bold;
        color:#444;
        opacity:0.7;
        letter-spacing:0.04rem;
        ${media.phone`
            width:fit-content;
            font-size: 10px;
            margin-bottom:10px;
        `}
    }
`;


const Inner = styled.div`
    max-width: 1080px;
    width:100%;
    margin:0 auto;

    .topicsTitile {
        font-size: 26px;
        font-weight: bold;
        margin:20px auto 10px;
        margin-top: 80px;
        color:#fff;
        ${media.phone`
            width:89.3%;
            margin:50px auto 10px;
            font-size:calc(24 * (100vw / 375));
        `}
    }
`;


const MovieListInner = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 10rem));
    place-content: center space-between;
    align-items: start;
    padding: 0rem 0px;
    gap: 2rem 1rem;
    ${media.phone`
        grid-template-columns: repeat(8, minmax(250px, 10rem));
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
