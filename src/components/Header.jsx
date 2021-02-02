import React from "react";
import styled, {css} from 'styled-components'

function Header(){
    return (
        <>
        <Column>
            <h1>Header</h1>
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
    background:#fff;/*#eeeeee */
    grid-row: 1;
    grid-column: 1 / span 2;
    box-shadow:-6px -6px 14px rgb(255 255 255 / 70%), -6px -6px 10px rgb(255 255 255 / 50%), 6px 6px 8px rgb(255 255 255 / 8%), 6px 6px 10px rgb(0 0 0 / 15%);
    display: flex;
    align-items:center;


    h1 {
        color:#444;
        margin: 10px 20px;
    }
`;