import React from "react";
import styled, {css} from 'styled-components'
import SideBar from '../components/SideBar';

function Header(){
    return (
        <>
        <Column>
            <h1>Header</h1>
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
    background:#191919;
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