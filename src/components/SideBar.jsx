import React from "react";
import styled, {css} from 'styled-components';
import { BrowserRouter, Route, Link , Switch, Router } from 'react-router-dom';
import SearchMovie from "../page/SerchMovie";

function SideBar(){
    return (
    <>
    <Nav>
    <ul>
{/*         <li><Link to="/">
        HOME
        </Link></li> */}
        <li><Link to="/search">
        映画を検索
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
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    ${media.phone`
        display:block;
        `}

        ul {
            width:250px;
            display:flex;
            justify-content:space-between;
            align-self: center;
            margin-bottom:0 !important;
        li {
            list-style:none;
            font-size:12px;
                a {
                    color:#fafafa;
                    font-weight:bold;
                }
            }
        }
`;
