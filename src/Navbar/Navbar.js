import styled from 'styled-components'
import RightNav from "./RightNav";

const Nav = styled.nav`
    border-radius: 0px 40px;
    padding-bottom: 17px;
    padding-top: 17px;
    display: flex;
    align-items: center;
    /* max-width: 1350px; */
    margin: 0 auto;
    text-decoration: none;
    position: sticky;
    top: 0;

    p{
        color: #e45a83;
        font-size: 20px;
        transition: all linear 0.2s;
    }
  
`;

const Navbar = () => {
    return ( 
        <Nav className = "navbar">
         
            <RightNav/>
        </Nav>

    );
}
export default Navbar;