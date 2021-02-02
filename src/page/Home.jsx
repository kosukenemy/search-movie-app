
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled, {css} from 'styled-components'


import { fetchMovieByGenre, fetchMovies } from '../servies';

import RBCarousel from "react-bootstrap-carousel";

export default function HeroImage(){
    const [nowPlaying, setNowPlaying] = useState([]);
    const [movieByGenre ,setMovieByGenre ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setNowPlaying(await fetchMovies());
            setMovieByGenre(await fetchMovieByGenre());
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
                            <p>
                                {item.title}
                            </p>
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
                            borderRadius: '0.2rem'
                        }} src={item.poster} alt={item.title}/>

                        <p className="mt-2" style={{
                            color: '#192A59',
                            fontSize: '14px',
                            fontWeight : 'bold',
                            textAlign: 'center'
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
                    marginTop: '80px'
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
    img {
        width:100%;
        margin :0 auto;
    }
`;

const CarouselPoster = styled.div`
    position:relative;
`;

const CarouselPosterContents = styled.div`
    position:absolute;
    left: 20px;
    top: 10px;

    p {
        color:#fff;
        font-size:20px;
        font-weight: 500;
    }
`;


const Inner = styled.div`
    width:98%;
    max-width: 1080px;
    margin:0 auto;

`;


const MovieListInner = styled.ul`
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
    place-content: space-between space-evenly;
    -webkit-box-align: start;
    align-items: start;
    padding: 0rem 0px;
    gap: 2rem 1rem;
`;

const Card = styled.div`

`;