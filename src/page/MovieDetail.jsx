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
                    <img className="img-fluid" src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title}/>
                </div>
            </div>
            <div>
                {detail.title}
                {detail.homepage}
                <div>
                    {detail.overview}
                </div>
            </div>
        </DetailContainer>
    )
}
export default MovieDetail;


const DetailContainer = styled.div`
    width:100%;
    margin:0 auto;

`;