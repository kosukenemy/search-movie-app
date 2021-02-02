import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchMovieDetail } from '../servies';
import styled, {css} from 'styled-components'

function MovieDetail({match}) {
    let params = match.params;
    const [detail, setDetail] = useState([]); 

    useEffect(() => {
        const FetchAPI = async() => {
            setDetail(await fetchMovieDetail(params.id));
        };
        FetchAPI();
    }, [params.id]);
    return (
        <DetailContainer>
            <div className="row mt-2">
                <div className="col text-center" style={{width: '100%'}}>
                    <h4 style={{color:'#fff'}}>
                        {detail.title}
                    </h4>
                    <img className="img-fluid" src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title}/>
                </div>
            </div>
            <div>
                <p style={{color:'#fff'}}>
                    {detail.title}
                </p>
                <a href={detail.homepage} target="_blank" rel="noreferrer">
                    HP
                </a>
                <p style={{color:'#fff'}}>
                    {detail.overview}
                </p>
            </div>
        </DetailContainer>
    )
}
export default MovieDetail;


const DetailContainer = styled.div`
    width:100%;
    margin:0 auto;

`;