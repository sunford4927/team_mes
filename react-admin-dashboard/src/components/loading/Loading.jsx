import React from 'react';
import { Background, LoadingText } from './Styles';
import Spinner from  './spinner.gif';

function Loading() {
    return (
        <Background>
        <LoadingText>
            Loading
        </LoadingText>
        <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
    );
}

export default Loading;

// yarn add styled-components

