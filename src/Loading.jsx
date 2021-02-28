import React from 'react';
import {  useRef , useEffect  } from 'react';
import styled, { css } from 'styled-components'

export default function Loading() {

    const loadingElem = useRef("")
    useEffect(() => {
        const { current } = loadingElem;

        window.onload = function () {
            const LateDisplay = () => {
                current.classList.add('inViseble');
            }
            LateDisplay();
            /* setTimeout(LateDisplay, 3000);  */
        }
    });

    return (
        <>
        <LoadingContainer ref={loadingElem}>
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

