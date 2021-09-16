// import { Link, Redirect } from 'react-router-dom';
// import { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { connect } from 'react-redux';
// // import { reset_password } from '../actions/auth';

// const ResetPassword = ({ reset_password }) => {
//     const [requestSent, setRequestSent ] = useState(false);

//     const [formData, setFormData] = useState({
//         email: '',
//     });

//     const { email } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

//     const onSubmit = e => {
//         e.preventDefault();

//         reset_password(email);
//         setRequestSent(true);
//     };

//     if (requestSent){
//         return <Redirect to = '/ResetLink' />
//     }

//     return (  
//         <div className = "signup-login">
//             <Helmet>
//                 <title>Password Reset</title>
//             </Helmet>
//             <div className = "create">
//                 <p className = "create-header">Password Reset</p>

//                 {/* {error && <p style = {{color: "red", border: "1px solid red", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>{ error }</p>}
//                 {message && <p style = {{color: "green", border: "1px solid green", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>{ message }</p>} */}

//                 <form onSubmit = {e => onSubmit(e)}>
//                     <label>Email</label>
//                     <input type="email" name = "email" value = {email} onChange = {e => {onChange(e)}} required/>

//                     <button style = {{width: '75px'}}>Reset</button>
//                     {/* {loading && <button disabled style = {{width: '133px'}}>Loading...</button>} */}
//                     <br /><br />

//                     <Link to = "/LogIn"><p style = {{color: "#f1356d"}}>Log In</p></Link>
//                 </form>
//             </div>
//             <br />
//             <p>Need an account? <Link to = "/SignUp"><span style = {{color: "#f1356d"}}>Sign Up</span></Link></p>
//         </div>
//     );
// }

// export default connect(null, {reset_password })(ResetPassword);
