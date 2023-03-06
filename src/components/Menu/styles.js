import styled from "styled-components";

export const Navbar = styled.nav`

    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    overflow-x:none;
    border-bottom: 0.12em solid #DDDDDD;

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
        height: 3.5rem;
        overflow-x:hidden;
    }
    @media screen and (max-width: 780px) {
        height: 4.5rem;
        overflow-x:hidden;
    }

`;

export const Logo = styled.a`
    
    text-decoration:none;
    color:#595F8C;
    font-size:1.25rem;
    font-weight:700;
    margin-left:6%;
    margin-top:0.8rem;
    cursor:pointer;
    
    @media screen and (max-width: 680px) {
        font-size:1.5rem;
    }

`;

export const NavLinks = styled.ul`
    
    display:flex;
    list-style:none;

    @media screen and (max-width: 680px) {
       display:none;
    }
    @media screen and (max-width: 780px) {
       display:none;
    }

`;

export const Item = styled.li`
   
    justify-content:center;
    align-items:center;
    margin-right:1rem;
    margin-top:0.2rem;
    font-weight:400;
    cursor:pointer;

`;

export const Link = styled.a`
    
  text-decoration:none;
  color:#777777;

  > svg{
    color: #777777;
    width: 1.8rem;
    height: 1.5rem;
    margin-right:5rem;

    @media screen and (max-width: 780px) {
        
    }
}

`;




