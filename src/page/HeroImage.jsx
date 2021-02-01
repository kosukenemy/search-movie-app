
import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components'


import { fetchMovies } from '../servies';

import RBCarousel from "react-bootstrap-carousel";

export default function HeroImage(){
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setNowPlaying(await fetchMovies());
        }
        fetchApi();
    }, [])
    const movies = nowPlaying.slice(0.5).map((item , index) => {
        return (
            <div key={index}>
                <Carousel>
                    <div>
                        <div>
                        {item.title}
                        </div>
                        <img src={item.backPoster} alt={item.title}/>
                    </div>
                </Carousel>
                
            </div>
        );
    });
    return (
        <div className="container-xl">
            <div className="row">
                <div className="col">
                <RBCarousel
                autoplay={true}
                pauseOnVisibility={true}
                slidesshowSpeed={100}
                version={4}
                indicators={true}
                >
                    {movies}
                </RBCarousel>
                </div>
            </div>

        </div>
    )
    return null
};

const Carousel = styled.div`
    background: #fafafa;
    img {
        width:100%;
    }
`;