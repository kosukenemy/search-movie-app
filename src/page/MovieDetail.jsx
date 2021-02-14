import React from 'react';
import { useEffect ,useState , useRef  } from 'react';
import { fetchCasts, fetchMovieDetail, fetchMovieVideos } from '../servies';
import styled from 'styled-components'

function MovieDetail({match}) {
    let params = match.params;
    const [detail, setDetail] = useState([]); 
    const [casts , setCasts] = useState([]);
    const [detailVideo, setDetailVideo] = useState([]);


    useEffect(() => {   
        const FetchAPI = async() => {
            setDetail(await fetchMovieDetail(params.id));
            setCasts(await fetchCasts(params.id));
            setDetailVideo(await fetchMovieVideos(params.id));
        };
        FetchAPI();
    }, [params.id]);


    const person = casts.map((item, index) => {
        return (
            <Peformer key={index}>
                <div>
                    <img style={{width:'150px'}} src={item.img} onError={(e) => e.target.src = `${process.env.PUBLIC_URL}/asset/person_null.png`} alt={item.title}/>
                    <p　style={{ color:'#fff', fontSize:'14px', marginBottom:'2px', fontWeight:'bold'}}>
                        {item.name} / 
                        <span style={{display:'block', fontWeight:'normal'}}>
                            {item.character}
                        </span>
                    </p>
                </div>
            </Peformer>
        )
    });
    const els = useRef("")
    useEffect(() => {
        const { current } = els;

        const LateDisplay = () => {
            current.classList.remove('hide');
        }
        setTimeout(LateDisplay, 1500);
    });



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
                        <OverReviewText>
                            {detail.overview}
                        </OverReviewText>
                        <a href={detail.homepage} target="_blank" rel="noreferrer">
                            公式サイトをみる
                        </a>
                    </Contents>
                </InnerContents>
            </KeyVisualContainer>
            <>
            <MovieDetailContent　ref={els} className="hide">
                <MovieDetailInfo>
                    <h3>
                        詳細情報
                    </h3>
                    <p>
                        リリース：{detail.release_date}
                    </p>
                    <p>
                        評価：{detail.vote_average}
                    </p>
                    <p>
                        評価したユーザー数：{detail.vote_count}人
                    </p>
                </MovieDetailInfo>

                <YoutubeVideoContainer>
                    <h4>トレーラー</h4>
                    <div>
                        <iframe className="iframeVideo" width="560" height="315" src={`https://www.youtube.com/embed/${detailVideo.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>
                            {detailVideo.name}
                        </p>
                    </div>
                </YoutubeVideoContainer>

                <PeformerContainer>
                    <p style={{color:'#fff', fontWeight:'bold', fontSize:'18px' ,letterSpacing:'0.04rem' }}> 
                        出演者
                    </p>
                    <Card>
                        {person}
                    </Card>
                </PeformerContainer>


            </MovieDetailContent>

            </>
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
    background :linear-gradient(to right,#171717 0,rgba(23,23,23,.98) 20%, rgba(23,23,23,.08) 100%,rgba(23,23,23,.03) 70%,rgba(23,23,23,0) 100%);
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

const OverReviewText = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 13;
    overflow: hidden;
`;

const Contents = styled.div`
    margin-top:70px;
    margin-left:40px;
    width:50%;
    z-index: 2;
    position: relative;
    overflow:hidden;

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

const MovieDetailContent = styled.div`
    max-width: 1080px;
    margin: 30px auto 60px;
`;

const MovieDetailInfo = styled.div`
    margin:0 auto 30px;
    h3 {
        color:#fff;
        font-size:24px;
        font-weight:bold;
        letter-spacing:0.04rem;
        margin-bottom:30px;
    }
    p {
        color:#fff;
        font-size:16px;
        line-height:1.5;
        letter-spacing:0.04rem;
    }

`;

const YoutubeVideoContainer = styled.div`
    width:100%;
    margin:0 auto;
    h4 {
        color:#fff;
        font-size:20px;
        font-weight:bold;
        letter-spacing:0.04rem;
    }
    div {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        z-index: 2;
    }
    .iframeVideo {
        position: absolute;
        top: 0;
        right: 0;
        width: 100% !important;
        height: 100% !important;
    }
    p {
        text-align:center;
        color:#fff;
    }
`;

const PeformerContainer = styled.div`
    max-width: 1080px;
    margin: 0 auto;
`;

const Peformer = styled.div`
    width:15%;


`;

const Card = styled.div`
    display:flex;
    overflow-x: scroll;
    gap:1rem;
`;