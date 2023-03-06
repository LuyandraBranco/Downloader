import styled from "styled-components";

export const ContainerDiv = styled.footer`

    width: 50%;
    height: 10rem;
    display: flex;
    margin:0 auto;
    overflow-x:none;
    margin-top:1rem;

    @media screen and (max-width: 680px) {
        width: 100%;
        height: 21rem;
        flex-direction:column;
        overflow-x:hidden;
    }
    @media screen and (max-width: 780px) {
        width: 100%;
        height: 22rem;
        flex-direction:column;
        overflow-x:hidden;
    }

`;

export const Container= styled.div`

    width:30%;
    height:10rem;
    display:flex;
    flex-direction:column;
    margin-right:2%;

    @media screen and (max-width: 680px) {
        width: 100%;
        height: 7rem;
        flex-direction:column;
    }
    @media screen and (max-width: 780px) {
        width: 100%;
        height: 8rem;
        flex-direction:column;
        margin-right:0;
        margin-bottom:0;
    }

`;

export const Title = styled.h1`

    font-size:1.4rem;
    font-weight:500;
    color:#595F8C;
    text-align:left;
    font-style: normal;
    margin-bottom:0.5rem;

    @media screen and (max-width: 680px) {
        font-size:1.2rem; 
        text-align:center;
    }
    @media screen and (max-width: 780px) {
        font-size:1.28rem; 
        text-align:center;
    }

`;

export const Description = styled.p`

    font-size:1rem;
    font-weight:400;
    color:#777777;
    text-align:left;
    margin:0;
    font-style: normal;

    @media screen and (max-width: 680px) {
        text-align:center;
    }
    @media screen and (max-width: 780px) {
        text-align:center;
    }

`;








