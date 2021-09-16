import styled from "styled-components";

import { Link, Redirect } from 'react-router-dom'

const DIV = styled.div`
    .email-logout{
        margin: 0 auto;
        display: flex;
        margin-top: 80px;
        justify-content: space-between;
        max-width: 95%;
    }
    .header{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    #logout{
        background: white;
        border: 1px solid black;
        padding: 8px;
        cursor: pointer;
        font-size: 15px;
    }
 
    #head{
        margin-top: 50px;
        font-size: 30px;
    }
    .select{
        margin: 0 auto;
        margin-top: 50px;
        max-width: 70%;
        width: 600px;
        transition: 0.2s all linear;
    }
   
    #course{
        border: 1px solid black;
        border-radius: 10px;
        transition: 0.2s all linear;
        cursor: pointer;
        padding: 8px;
    }
    #course p{
        font-size: 19px;
    }
   
`
const Profile = () => {

    if (localStorage.getItem('access_token') === null){
        alert("User not logged In");
        return <Redirect to = '/' />
    }

    return (  
        <DIV className = "select-course">
            <div className = "email-logout">
                <div className = "header">
                    <Link to = "/Logout"><button id = "logout" >Log out</button></Link>
                </div>
            </div>
            
            <p id = "head">Profile</p>
            <div className = "select">
                <div id = "course-price">
                    <Link to = "#">
                        <div id = "course">
                        <p>protected content  100/Monthly</p>
                        </div>
                    </Link><br /><br /><br />
                    <Link to = "#">
                        <div id = "course">
                        <p>protected content  200/Monthly</p>
                        </div>
                    </Link>
                </div>
                <br /><br />
               
            </div>
        </DIV>
    );
}

 
export default Profile;