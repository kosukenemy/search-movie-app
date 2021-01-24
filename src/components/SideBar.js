import React from "react";
import styled, {css} from 'styled-components';
import { BrowserRouter, Route, Link , Switch, Router } from 'react-router-dom';

function SideBar(){
    return (
    <>
    <Nav>
    <ul>
        <li><Link to="/">
        HOME
        </Link></li>
        <li><Link to="/MENU2">
        MENU
        </Link></li>
        <li><Link to="/MENU3">
        MENU
        </Link></li>
        <li><Link>
        MENU
        </Link></li>
    </ul>
    </Nav>
    </>
    )
}
export default SideBar;

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


const Nav　= styled.nav`
  background:#F9F9F9;
  grid-row:2;
  grid-column:1;

  ${media.phone`
    display:none;
    `}

    ul {
      li {
        padding:20px;
        border-bottom: solid 1px #f4f4f4;
      }
    }
`;
