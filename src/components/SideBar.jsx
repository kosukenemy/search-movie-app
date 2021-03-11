import React from "react";
import { useState } from 'react';
import styled, {css} from 'styled-components';
import {  Link  } from 'react-router-dom';


function SideBar(){
    const [ dropdown , setDropdown ] = useState(false);
    const toggle = () => {
        setDropdown(!dropdown);
    };

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
            onClick={toggle}
            >
            <Link>
            Genre 
            </Link>
        </DropDownMenu>
        <>
        </>
    </ul>
        <DropDownMenuWindow className={` ${dropdown ? "is-toggleOpen" : "is-toggleClose"} `}>
            <p className="dropDownTitle">ジャンルから選ぶ</p>
            <Link to="/search" className="dropDownList" href="">Search Movie</Link>
            <Link className="dropDownList" href="">メニュー</Link>
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
        border-top: 7px solid #fff;   
    }

`;

const DropDownMenuWindow = styled.div`
    width:200px;
    padding:30px 20px;
    background:#333;
    position: absolute;
    top: 39px;
    left: 100px;

    > .dropDownTitle {
        display:block;
        color:#fff;
        font-size:12px;
        font-weight:bold;
        border-bottom:solid 1px #fff;
    }

    > .dropDownList {
        display:block;
        color:#fff;
        font-size:12px;
    }
`;