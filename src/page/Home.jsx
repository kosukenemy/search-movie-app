
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled, {css} from 'styled-components'



import { fetchMovieByGenre, fetchMovies } from '../servies';

import RBCarousel from "react-bootstrap-carousel";

export default function Home(){
    const [nowPlaying, setNowPlaying] = useState([]);
    const [movieByGenre ,setMovieByGenre ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setNowPlaying(await fetchMovies());
            setMovieByGenre(await fetchMovieByGenre());
            console.log(movieByGenre);
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

                        <p className="mt-2" style={{
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight : 'bold',
                            textAlign: 'center',
                            marginBottom : '0'
                        }}>{item.title}</p>

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
                <h3 style={{
                    fontSize: '26px',
                    fontWeight: 'bold',
                    margin:'20px auto 10px',
                    marginTop: '80px',
                    color:'#fff',
                }}>Discover Movie</h3>
                <MovieListInner>
                    {movieList}
                </MovieListInner>
            </Inner>

        </HomeContainer>
    )
    return null
};

const HomeContainer = styled.div`
    width:100%;
    margin: 0 auto;

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

    h2 {
        font-weight: 500;
        letter-spacing:0.02em;
        color:#fff;
    }
`;

const TopMovietitle = styled.div`
    p {
        background-color:#fff;
        padding:5px 10px;
        font-weight:bold;
        color:#444;
        opacity:0.7;
        letter-spacing:0.04rem;
    }
`;


const Inner = styled.div`
    max-width: 1080px;
    margin:0 auto;

`;


const MovieListInner = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 10rem));
    place-content: center space-between;
    align-items: start;
    padding: 0rem 0px;
    gap: 2rem 1rem;
`;

const Card = styled.div`
    width:100%;
`;