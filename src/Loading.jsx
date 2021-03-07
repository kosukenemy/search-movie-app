import React, { useState , useEffect } from 'react';
import styled, { css } from 'styled-components'

export default function Loading() {

    const [isLoad, setLoadingActive] = useState("false");

    const Loading = () => {
        
        setTimeout(() => {
            setLoadingActive(!isLoad);
        }, 4000);

    };


    return (
        <>
        <LoadingContainer className={isLoad ? "loadingView" : "is-loaded"} onLoad={Loading}>
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} />
        </LoadingContainer>
        </>
    )
};

const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background:#000;
    position: relative;
    z-index:20;

    img {
        width:110px;
        position:absolute;
        top:50vh;
        left: 50%;
        transform:translate(-50% , -50%);
    }
`;


