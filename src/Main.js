import React from "react";
import styled, {css} from 'styled-components'


function Main() {
    return (
        <div>
            <MainVisu>
                <MainVisuTitle>Movie Search
                    <SubTitle>React.js App</SubTitle>
                </MainVisuTitle>
                <img src={`${process.env.PUBLIC_URL}/asset/main.jpg`} />
            </MainVisu>
        </div>
    )
}
export default Main;


const MainVisu = styled.div`
    position: relative;
    img { width: 100%; z-index:-1000; filter: brightness(0.7);}
`;

const MainVisuTitle = styled.h1`
    position: absolute;
    top:20px;
    left: 30px;
    color:#fff;
    font-family: HelveticaNeue;
    font-weight:600;
    z-index:1;
`;

const SubTitle = styled.p`
    color:#67ceff;
    font-size:12px;
    display:block;
    font-family: 'Roboto', sans-serif;
    letter-spacing:0.04em;
`;