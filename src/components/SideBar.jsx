import React from "react";
import { useState } from 'react';
import styled, {css} from 'styled-components';
import {  Link  } from 'react-router-dom';


function SideBar(){
    const [ dropdown , setDropdown ] = useState(false);

    return (
    <>
    <Nav>
    <ul>
        <li>
            <Link to="/search">
                Search Movie
            </Link>
        </li>
        <DropDownMenu 
            onClick={ () => setDropdown(true) }
            >
            <Link>
            Genre 
            </Link>
        </DropDownMenu>
        <>
        </>
    </ul>
    <DropDownMenuWindow className={` ${dropdown && "is-opened"}`}>
            <a className="dropDownList" href="">メニュー</a>
            <a className="dropDownList" href="">メニュー</a>
            <p onClick={ () => setDropdown(false) }>
                close
            </p>
        </DropDownMenuWindow>
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
    position:relative;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    ${media.phone`
        display:block;
        `}

        ul {
            width:150px;
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

const DropDownMenu = styled.li`
    position:relative;
    padding: 0 0 0 16px;

    &::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 6px;
        left: 0;
        border: 6px solid transparent;
        border-top: 7px solid #fff;   /* 好みで色を変えてください */  
    }

`;

const DropDownMenuWindow = styled.div`
    width:200px;
    padding:30px 20px;
    background:#333;
    position: absolute;
    top: 39px;
    left: 100px;

    // 初期は非表示
    opacity:0;


    > .dropDownList {
        display:block;
        color:#fff;
        font-size:12px;
    }
`;