import React from 'react';
import { Link } from "react-router-dom";
import { useEffect ,useState  } from 'react';
import { fetchGenre } from '../servies';

import styled, {css} from 'styled-components'

function Genre(){
    const [genre , setGenre] = useState([]);

    useEffect(() => {   
        const FetchAPI = async() => {
            setGenre(await fetchGenre());
        };
        FetchAPI();
    }, []);

    console.log(genre);

    // 映画のジャンル
    const movieGenre = genre.map((type , index) => {
        return (
            <GenerList className="listparent" key={index}>

                <GenerItem>
                    <Link className="gener-list" to={`/movieGenre/${type.id}`}>
                        {type.name}
                    </Link>
                </GenerItem>
            </GenerList>
        )
    });

    return (
        <GenerInner>
            {movieGenre}
        </GenerInner>
    )
}

export default Genre;

const GenerInner = styled.div`
    width:100%;
    margin:30px auto 0;
`;

const GenerList = styled.ul`
    display:inline-flex;
`;

const GenerItem = styled.li`

    .gener-list {
        color:#fafafa;
        font-size:14px;
        border:solid 1px #fafafa;
        border-radius:20px;
        margin:2px;
        padding:2px 15px;
        width:fit-content;
        text-align:center;
        &:hover {
            transition: all 0.3s ease-in-out;
            background:#fafafa;
            color:#333 ;
            display:block;
            }
    }

`;