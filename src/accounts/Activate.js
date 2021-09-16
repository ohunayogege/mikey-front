// import { Redirect } from 'react-router-dom';
// import { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { connect } from 'react-redux';
// // import { verify } from '../actions/auth';

// const Activate = ({ verify, match }) => {
//     const [verified, setVerfied] = useState(false);
   
//     const verify_account = e => {
//         const uid = match.params.uid
//         const token = match.params.token

//         verify(uid, token);
//         setVerfied(true)
//     };

//     if (verified){
//         return <Redirect to = '/LogIn' />
//     }

//     return (  
//         <div className = "signup-login">
//              <Helmet>
//                 <title>Verify </title>
//             </Helmet>
//             <div className = "create">
//                 <p className = "create-header">Verify your account</p>

//                 {/* {error && <p style = {{color: "red", border: "1px solid red", padding: "10px", borderRadius: "5px", marginBottom: "15px"}}>{ error }</p>} */}

                
//                 <button type = "submit" onClick = {verify_account}>Verify</button>
//                 {/* {loading && <button disabled>Loading...</button>}*/}<br /><br /> 
//             </div>
//             {/* <br /> */}
//             {/* <p>Don't have an account? <Link to = "/SignUp"><span style = {{color: "#f1356d"}}>Sign Up</span></Link></p> */}
//         </div>
//     );
// }

// export default connect(null, { verify })(Activate);