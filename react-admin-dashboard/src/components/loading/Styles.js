import styled from 'styled-components'

export const Background = styled.div`
    position : absolute;
    left: 0;
    right:  0;
    top : 50%;
    z-index: 999;
    display: flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`

export const LoadingText = styled.div`
    font : 1rem 'Noto SansKR';
    text-align : center;
`