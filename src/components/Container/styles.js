import styled from "styled-components";

export const ContainerDiv = styled.section`

    width: 50%;
    height: 28rem;
    display: flex;
    margin:0 auto;
    flex-direction:column;
    overflow-x:none;
    border-bottom: 0.12em solid #DDDDDD;
    margin-top:2rem;

    > svg{
        color: #777777;
        width: 1.8rem;
        height: 1.5rem;
        margin-top:1.5rem;
        margin-right:1rem;
        display:none;

        @media screen and (max-width: 780px) {
            display:inline;
        }
    }

    @media screen and (max-width: 680px) {
        width: 100%;
        height: 27rem;
    }
    @media screen and (max-width: 780px) {
        width: 100%;
        height: 28rem;
        margin-top:1rem;
    }

`;

export const Title = styled.h1`

    font-size:1.75rem;
    font-weight:500;
    color:#595F8C;
    text-align:center;
    font-style: normal;
    margin-bottom:0.6rem;

    @media screen and (max-width: 680px) {
        font-size:1.25rem;
        
    }
    @media screen and (max-width: 780px) {
        font-size:1.3rem;
    }

`;

export const Subtitle = styled.p`

    font-size:1rem;
    font-weight:400;
    color:#777777;
    text-align:center;
    margin:0;
    font-style: normal;
 
`;

export const Buttons = styled.div`

    width:100%;
    height:18rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:0.5rem;

    @media screen and (max-width: 680px) {
        
    }
    @media screen and (max-width: 780px) {
       
    }

`;

export const Button1 = styled.button`

    width:11rem;
    height:11rem;
    border-radius:50%;
    border:none;
    background:linear-gradient(211.43deg, #AFB2C9 13.37%, #9296BA 86.17%);

    @media screen and (max-width: 780px) {
        
    }

`;

export const Button2 = styled.button`

    width:8.8rem;
    height:8.8rem;
    border-radius:50%;
    border:none;
    background:linear-gradient(213.45deg, #595F8C 12.72%, #74799C 85.38%);
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 780px) {
        top: 15.4125rem;
    }

    
    &:hover{
        transform: scale(1.13);
        
        + ${Button1} {
            transform: scale(1.13);
        }
    }

`;

export const Button3 = styled.button`

    width:6.6rem;
    height:6.6rem;
    border-radius:50%;
    border:none;
    background:linear-gradient(212.59deg, #656777 13.18%, #2D3047 86.22%);
    transition: all 0.18s ease-in-out;

    @media screen and (max-width: 780px) {
        top: 16.5125rem;
    }

    &:hover{
        transform: scale(1.2);

        + ${Button2} {
            transform: scale(1.13);
        }
    }
    
`;

export const SocialMedias= styled.div`

    width:100%;
    height:3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 0.2rem;
    margin-bottom: 1.5rem;

    > svg{
        color: #999999;
        width: 1.5rem;
        height: 1.125rem;
        padding: 0.5rem;
    
        @media screen and (max-width: 680px) {
            margin-top: 1.9rem;       
        }
        @media screen and (max-width: 780px) {
            margin-top: 2rem;   
        }
    }
`;
