import styled from "styled-components";


export const ContainerSidebar = styled.div`
    
    height:100%;
    display:flex;
    flex-direction:column;
    position: fixed;
    background: #595F8C;
    height: 100%;
    top: 0px;
    right: 0px;
    right: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;

    @media screen and (max-width: 680px) {
        width:100%;
    }
    @media screen (max-width: 780px) {
       width:50%;
    }

    > svg {
        position: fixed;
        color: #fff;
        width: 1.5rem;
        height: 1.5rem;
        margin-top:1.5rem;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }
    @keyframes showSidebar {
        from {
        opacity: 0;
        width: 0;
        }
        to {
        opacity: 1;
        }

        @media screen and (max-width: 680px) {
            width:100%;
        }
        @media screen (max-width: 780px) {
            width: 50%;
        }
    }
`;
export const NavLinks = styled.ul`
    
    display:flex;
    flex-direction:column;
    align-items:center;
    list-style:none;
    margin-top:5rem;
    cursor:pointer;

`;

export const Item = styled.li`
    
   margin-right:1rem;
   margin-top:0.7rem;
   font-weight:400;
   cursor:pointer;

`;

export const Link = styled.a`
    
  text-decoration:none;
  color:#FFF;

`;


