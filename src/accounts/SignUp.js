import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {useState} from 'react';
import  axiosInstance  from '../axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
        // password2: '',

	});

	const [formData, updateFormData] = useState(initialFormData);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);



	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        setLoading(true);
		// console.log(formData);
        
        axiosInstance
            .post(`user/create/`, {
                email: formData.email,
                user_name: formData.username,
                password: formData.password,
                // password2: formData.password2,

            })
            .then((res) => {
                setLoading(false);
                history.push('/Login');
                // console.log(res);
                // console.log(res.data);
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
                <title>Sign Up</title>
            </Helmet>
            <div className = "create">
                <p className = "create-header">Sign Up</p>
                {errors === true && <p style = {{color: "#bb3b39", backgroundColor: "#ebccd1", border: "1px solid #ebccd1", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>Check email or password should not be less than 6 characters</p>}

                <form>
    
                    
                    <label>Email</label>
                    <input type="email" name = "email" placeholder = "Email*" autoComplete = "email" onChange = {handleChange} required/>

                    <label>Username</label>
                    <input type="text" name = "username" placeholder = "Username*" autoComplete = "username" onChange = {handleChange} required/>

                    <label>Password</label>
                    <input type="password" name = "password" placeholder = "Password*"  minLength = '6' autoComplete = "current-password" onChange = {handleChange} required/>

                    {/* <label>Confirm Password</label>
                    <input type="password" name = "password2" placeholder = "Confirm Password*"  minLength = '6' autoComplete = "current-password" onChange = {handleChange} required/>   */}

                    {loading && <button disabled>Loading...</button>}
                    {!loading && <button type = "submit" onClick = {handleSubmit}>Sign Up</button>}
                </form>
            </div>
            <br />
        </div>
    );
}



export default SignUp;
