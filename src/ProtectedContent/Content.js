import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import axiosInstance from '../axios';
import { useEffect } from 'react';


const Content = () => {
    if (localStorage.getItem('access_token') === null){
        return <Redirect to = '/' />
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
		axiosInstance.get('user/protected/', {
		})
        .then((res) => {
            console.log(res.data);
            if (res.data.status === true) {
                const dat = document.getElementById("someText");
                dat.innerText = "This page has been unlocked."
            }
            else {
                const dat = document.getElementById("someText");
                dat.innerText = "This page has been locked."
            }
        })
        .catch(error => {
            console.log(error)
        });
        axiosInstance.defaults.headers['Authorization'] = "Bearer "+localStorage.getItem('access_token');
    });
    return (
        <div>
            <Helmet>
                <title>Content</title>
            </Helmet>
            <div>
                <p style = {{
                textAlign: "center", 
                width: "80%", 
                margin: "0 auto",
                maxWidth: "400px",
                padding: "15px",
                borderRadius: "10px",
                marginTop: "100px",
                color: "black",
                fontSize: "50px"}} id="someText">This is the protected content</p>
            </div>
           
        </div>
    );
}
 
export default Content;