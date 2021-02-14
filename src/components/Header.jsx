import React from "react";
import styled, {css} from 'styled-components'
import { Link } from "react-router-dom";
import SideBar from '../components/SideBar';

function Header(){
    return (
        <>
        <Column>
            <Link to="/">
            <div>
                <img style={{
                    width:'110px',
                    margin:'0px 40px'
                }} src={`${process.env.PUBLIC_URL}/logo.svg`} />
            </div>
            </Link>
            <SideBar />
        </Column>
        </>
    )
}
export default Header;

// メディアクエリ
export const media = {
    desktop: (...args) => css`
    @media (min-width: 1300px) {
        ${ css(...args)}
    }
    `,
    mid: (...args) => css`
    @media (min-width: 1025px) {
        ${ css(...args)}
    }
    `,
    phone: (...args) => css`
    @media (max-width: 768px) {
        ${ css(...args)}
    }
    `
}

const Column = styled.div`
    background:#000;
    grid-row: 1;
    grid-column: 1 / span 2;
    border-bottom: #444;
    display: flex;
    align-items:center;
    


    h1 {
        color:#444;
        margin: 10px 20px;
    }
`;