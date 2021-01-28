import React from "react";
import styled, {css} from 'styled-components'

function Footer(){
    return (
        <>
        <Column>
        footer
        </Column>
        </>
    )
}
export default Footer;

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

const Column = styled.footer`
  background:#3F5AA6;
  grid-row:3;
  grid-column: 1 / span 2;
`;