import React, { useState } from 'react';
import {  useRef , useEffect  } from 'react';
import styled, { css } from 'styled-components'

export default function Loading() {

    const [ loading , setLoading ] = useState(false);
    const LoadingRef = useRef();

    useEffect(() => {
        if ( () => setLoading(true) ) {
            setTimeout(() => {
                LoadingRef.current.style.display ="none"
            }, 3000);
        } else {}
    },[])


    return (
        <>
        <LoadingContainer 
            onLoad={ () => setLoading(true)} 
            className={`loadingContainer ${loading && "is-loaded" }`}
            ref={LoadingRef}
            >
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


