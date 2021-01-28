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
  background:#fafafa;
  grid-row: 1;
  grid-column: 1 / span 2;

  display: flex;
  align-items:center;


  h1 {
    color:#fff;
    margin: 19px;
  }
`;