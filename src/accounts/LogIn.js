import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom'

const LogIn = () => {

    const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);


	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
  
    
	const handleSubmit = (e) => {
        setLoading(true);

		e.preventDefault();
		// console.log(formData);

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
                history.push('/SelectCourse');
                setLoading(false);

				//console.log(res);
				//console.log(res.data);
			})
            .catch(error => {
                if(typeof error.response  === 'undefined'){
                    setLoading(false)
                }else{
                    setErrors(true)
    
                    setTimeout(() => {
                        setErrors(false)
                    }, 6000);                
                    
                    setLoading(false)
                }
            })
	};
    if (localStorage.getItem('access_token') !== null){
        alert("Sorry you have to log out");
        return <Redirect to = '/' />
    }
 
    return (  
        <div className = "signup-login">
             <Helmet>
                <title>Log In </title>
            </Helmet>
            <div className = "create">
                <p className = "create-header">Log In</p>

                {errors === true && <p style = {{color: "#bb3b39", backgroundColor: "#ebccd1", border: "1px solid #ebccd1", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>Error Check email or password</p>}

                <form>
                    <label>Email</label>
                    <input type="email" onChange = {handleChange} name = "email"  placeholder = "Email" required/>

                    <label>Password</label>
                    <input type="password" onChange = {handleChange} name = "password" placeholder = "Password" minLength = '6' required/> 

                    {loading && <button disabled>Loading...</button>}
                    {!loading && <button type = "submit" onClick = {handleSubmit}>Log In</button>}<br />

                    {/* <Link to = "/reset-password"><p style = {{color: "#f1356d"}}>Forgot Password?</p></Link> */}
                </form>
            </div>
            <br />
        </div>
    );
}


export default LogIn;