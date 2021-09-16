import { Fragment } from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

const DIV = styled.div`
 
    #sign-up{
        background: white;
        margin-top: 20px;
        margin-right: 10px;
        border: 1px solid black;
        padding: 10px;
        cursor: pointer;
        font-size: 15px;
    }
  
    #log-in{
        background: white;
        margin-top: 20px;
        margin-right: 10px;
        border: 1px solid black;
        padding: 10px;
        cursor: pointer;
        font-size: 15px;
    }
  
    .card{
        margin: 0 auto;
        max-width: 700px;
        width: 75%;
        border: none;
        box-shadow: 0 4px 5px 0 #e4698d;
        margin-top: 80px;
        padding: 50px 20px 50px 20px;
        border-radius: 20px;
    }
    #create{
        margin-top: 80px;
        font-size: 16px;
    }
    #we{
        font-size: 30px;
    }
    #to{
        font-size: 23px;
    }
    #div-circle{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    #div-circle p{
        color: #f1356d;
        font-size: 25px
    }
    #circles{
        margin: 0 auto;
        max-width: 50%;
        border: none;
        padding: 20px;
        border-radius: 10px;
        font-size: 25px;
        font-weight: 500;
        color: #f1356d;
    }
`
const Home = () => {
    const authLink = () => (
        <Fragment>
            <p id = "create">Sign Up/Login</p>
            <Link to = "/SignUp"><button id = "sign-up">Sign Up</button></Link>
            <Link to = "/LogIn"><button id = "log-in">Log In</button></Link>
        </Fragment>
    );

    const profileLink = () => (
        <div>
            <p id = "create">View Profile</p>
            <Link to = "/Profile"><button id = "sign-up">Profile</button></Link>
        </div>
    );

    const [isAuth, setisAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null){
            setisAuth(true)
        }
    }, []);
    
    return(
        <DIV className = "home">
            <Helmet>
                <title>Home</title>
            </Helmet>
          

            {isAuth === true ? profileLink() : authLink()}
        
        </DIV>
    );
};    

export default Home; 