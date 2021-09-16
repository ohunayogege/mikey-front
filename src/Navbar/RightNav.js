import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Ul = styled.ul`
    margin-left: auto;
    margin-right: 50px;
    flex-flow: row nowrap;
    display: flex;
    list-style: none;

    li{
        color: black;
        margin-left: 40px;
        padding: 10px;
        text-decoration: none;
        font-size: 16px;
        transition: all 0.1s linear;    
    }
`;

const RightNav = () => {
    return ( 
        <Ul>
           <button><Link to = '/'><li>Home</li></Link></button> 
        
        </Ul>
    );
}
 
export default RightNav;