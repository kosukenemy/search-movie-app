import React from "react";
import styled, {css} from 'styled-components'


//Page
import Home from '../page/Home';

function Main() {
    return (
        <>
        <MainColmun>
            <Home />
        </MainColmun>
        </>
    )
}
export default Main;


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

const MainColmun = styled.main`
  grid-row:2;
  grid-column:2;
  width:100%;
  overflow-x:hidden;
  ${media.phone`
    grid-column: 1;
    `}

  h3 {
    margin: 20px auto 10px 6px;
    color:#192A59;
    font-size:19px;
    font-weight: 600;
    letter-spacing:0.02em;
  }
`;

