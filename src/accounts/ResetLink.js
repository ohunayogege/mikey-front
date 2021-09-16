import { Helmet } from 'react-helmet';

const ResetLink = () => {

    return (  
        <div className = "signup-login">
            <Helmet>
                <title>Password Reset Confirmation</title>
            </Helmet>
            <div className = "create">
                <p style = {{color: "green", fontSize: "25px"}}>Check email for password reset confirmation</p>
                {/* {error && <p style = {{color: "red", border: "1px solid red", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>{ error }</p>}
                {message && <p style = {{color: "green", border: "1px solid green", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>{ message }</p>} */}
            </div>
        </div>
    );
}

export default ResetLink;
