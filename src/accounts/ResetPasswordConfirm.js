// import { Link, Redirect } from 'react-router-dom';
// import { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { connect } from 'react-redux';
// // import { reset_password_confirm } from '../actions/auth';

// const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
//     const [requestSent, setRequestSent ] = useState(false);

//     const [formData, setFormData] = useState({
//         new_password: '',
//         re_new_password: ''
//     });

//     const { new_password, re_new_password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

//     const onSubmit = e => {
//         e.preventDefault();

//         const uid = match.params.uid;
//         const token = match.params.token;

//         reset_password_confirm(uid, token, new_password, re_new_password);
//         setRequestSent(true);
//     };

//     if (requestSent){
//         return <Redirect to = '/' />
//     }

//     return (  
//         <div className = "signup-login">
//             <Helmet>
//                 <title>Password Reset Confirmation</title>
//             </Helmet>
//             <div className = "create">
//                 <p className = "create-header">Password Reset Confirmation</p>

//                 {/* {error && <p style = {{color: "red", border: "1px solid red", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>{ error }</p>}
//                 {message && <p style = {{color: "green", border: "1px solid green", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>{ message }</p>} */}

//                 <form onSubmit = {e => onSubmit(e)}>
//                     <label>Enter new password</label>
//                     <input type="password" name = 'new_password' value = {new_password} placeholder = "New Password" onChange = {e => {onChange(e)}} minLength = '6' required/> 
//                     <input type="password" name = 're_new_password' value = {re_new_password} placeholder = "Confirm New Password" onChange = {e => {onChange(e)}} minLength = '6' required/> 

//                     <button style = {{width: '75px'}}>Reset</button>
//                     {/* {loading && <button disabled style = {{width: '133px'}}>Loading...</button>} */}
//                     <br /><br />
//                     {/* <Link to = "/LogIn"><p style = {{color: "#f1356d"}}>Log In</p></Link> */}
//                 </form>
//             </div>
//             <br />
//             <p>Need an account? <Link to = "/SignUp"><span style = {{color: "#f1356d"}}>Sign Up</span></Link></p>
//         </div>
//     );
// }

// export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);
