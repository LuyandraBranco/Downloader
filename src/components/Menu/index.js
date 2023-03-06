import {
    Navbar,
    Logo,
    NavLinks,
    Item,
    Link
}
    from './styles';
import { useState } from 'react';
import { FaBars, FaCog, FaRegAngry } from "react-icons/fa";
import { Sidebar } from '../Sidebar';

export function Menu() {

    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Navbar>

            <Logo href="">One::Link</Logo>

            <NavLinks>
                <Item><Link href="pages/About/index.js">Como usar?</Link></Item>
                <Item><Link href="#">Apoiar</Link></Item>
                <Item><Link href="#">Sobre</Link></Item>
                <Item><Link href="#">Baixar app</Link></Item>
            </NavLinks>
            
            <NavLinks>
                <Item><Link href="#"><FaCog/></Link></Item>
            </NavLinks>

            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}

        </Navbar>
    )
};