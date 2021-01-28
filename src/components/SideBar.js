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
  background:#fafafa;
  grid-row:2;
  grid-column:1;
  border-right : solid 1px #E0E2E7;

  ${media.phone`
    display:none;
    `}

    ul {
      li {
        padding:20px;
        font-size:12px;
        
        a {
            color:#333;
        }
      }
    }
`;
