import React from 'react'
import './Loader.css'
import styled from 'styled-components';
import { animations } from 'react-animation';

function ElementsLoading() {
    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
}

function SongLoading () {
    return (
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    )
}

const FadeLoader = styled.div`
    width: '100%';
    height: '100%';
    text-align: 'center';
    animation: ${animations.fadeIn};
    animation-duration: 0.5s;
`;

export default function Loader({type}) {
    return(
        <FadeLoader> 
            {type === "elements" ? <ElementsLoading /> : ''}
            {type === "song" ? <SongLoading /> : ''}
        </FadeLoader>
    )
}