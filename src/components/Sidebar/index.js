import {
    ContainerSidebar,
    NavLinks,
    Item,
    Link
}
from './styles';
import {FaTimes, FaCog} from "react-icons/fa";

export const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }
    
    return(
        <ContainerSidebar sidebar={active}>
            <FaTimes onClick={closeSidebar}/> 

            <NavLinks>
                <Item><Link href="pages/About/index.js">Como usar?</Link></Item>
                <Item><Link href="#">Apoiar</Link></Item>
                <Item><Link href="#">Sobre</Link></Item>
                <Item><Link href="#">Baixar app</Link></Item>
                <Item><Link href="#"><FaCog/></Link></Item>
            </NavLinks>
        </ContainerSidebar>
    )
};