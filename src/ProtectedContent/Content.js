import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Content = () => {
    if (localStorage.getItem('access_token') === null){
        return <Redirect to = '/' />
    }
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
                fontSize: "50px"}}>This is the protected content</p>
            </div>
           
        </div>
    );
}
 
export default Content;