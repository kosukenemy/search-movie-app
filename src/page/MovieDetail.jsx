import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCasts, fetchMovieDetail } from '../servies';
import styled from 'styled-components'

function MovieDetail({match}) {
    let params = match.params;
    const [detail, setDetail] = useState([]); 
    const [casts , setCasts] = useState([]);

    useEffect(() => {
        const FetchAPI = async() => {
            setDetail(await fetchMovieDetail(params.id));
            setCasts(await fetchCasts(params.id));
            console.log(casts)
        };
        FetchAPI();
    }, [params.id]);

    const person = casts.map((item, index) => {
        return (
            <div key={index}>
                <p　style={{ color:'#fff'}}>
                    {item.name} / {item.character}
                </p>
                <div>
                    <img src={item.img} alt={item.title}/>
                </div>
            </div>
        )
    })

    return (
        <DetailContainer>
            <KeyVisualContainer>
                <div className="posterImage" style={{width: '100%', position:'relative', left:'15%'}}>
                    <img className="img-fluid" src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title}/>
                </div>
                <InnerContents>
                    <BlackMask />
                    <Contents>
                        <h2>
                            {detail.title}
                        </h2>
                        <p>
                            {detail.overview}
                        </p>
                        <a href={detail.homepage} target="_blank" rel="noreferrer">
                            HP
                        </a>
                    </Contents>
                </InnerContents>
            </KeyVisualContainer>
            <div>
                <div className="staffCredit">
                    <p style={{color:'#fff', fontWeight:'bold', fontSize:'20px' }}> 
                        出演者
                    </p>
                    <div>
                        {person}
                    </div>
                </div>
            </div>
        </DetailContainer>
    )
}
export default MovieDetail;


const DetailContainer = styled.div`
    width:100%;
    margin:0 auto;
    overflow-x:hidden;

`;

const KeyVisualContainer = styled.div`
    position:relative;
    

`;

const InnerContents = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background :linear-gradient(to right,#171717 0,rgba(23,23,23,.98) 20%, 
            rgba(23,23,23,.08) 100%,
            rgba(23,23,23,.03) 70%,
            rgba(23,23,23,0) 100%)
`;

const BlackMask = styled.div`
    width: 36%;
    height: 100%;
    background: rgba(23,23,23,.95);
    position: absolute;
    z-index: 1;
    opacity: 0.3;
    background: linear-gradient(to right,#171717 0,
    rgba(23,23,23,.98) 20%, rgba(23,23,23,.97) 25%,
    rgba(23,23,23,.95) 35%,rgba(23,23,23,.94) 40%, 
    rgba(23,23,23,.92) 45%,rgba(23,23,23,.9) 50%,rgba(23,23,23,.87) 55%, 
    rgba(23,23,23,.82) 60%,rgba(23,23,23,.75) 65%,rgba(23,23,23,.63) 70%, 
    rgba(23,23,23,.45) 75%,rgba(23,23,23,.27) 80%,rgba(23,23,23,.15) 85%, 
    rgba(23,23,23,.08) 90%,rgba(23,23,23,.03) 95%,rgba(23,23,23,0) 100%);
`;

const Contents = styled.div`
    margin-top:70px;
    margin-left:40px;
    width:50%;
    z-index: 2;
    position: relative;

    h2 {
            color:#fff;
            font-weight:bold;
            font-size:34px;
            letter-spacing:0.04em;
            margin-bottom:20px;
        }
    p {
        color:#fff;
        font-size:16px;
        letter-spacing:0.04em;
        line-height:1.8;
    }

`;