// import React, { useState } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'
// const LoginPopUp = ({setShowLogin}) => {
// //We destructure the setShowLogin popup
//     const [currState,setCurrState] = useState("Login")
//   return (
//     <div className='login-popup'>
//      <form  className="login-popup-container">
//         <div className="login-popup-title">
//             <h2>{currState}</h2>
//             <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
//         </div>
//         <div className="login-popup-inputs">
//             {currState==="Login"?<></>: <input type="text" placeholder='Your name' required/>
//             }
//             <input type="email" placeholder= "Your email" required />
//             <input type="password" placeholder='Password' required />
//         </div>
//         <button>{currState==="Sign Up"?"Create account":"Login"}</button>
//         <div className="login-popup-condition">
//             <input type="checkbox" required />
//             <p>By continuing,i agree to the terms of use & privacy policy.</p>
//         </div>
//         {currState==="Login"
//         ?<p>Create a new Account? <span onClick={()=>{setCurrState("Sign Up")}}>Click Here</span></p>
//          : <p>Already have an account? <span onClick={()=>{setCurrState("Login")}}>Login Here</span></p>
//         }

//      </form>
//     </div>
//   )
// }

// export default LoginPopUp

// //        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
// //Agar isme currstate login hota to wo khulega
// // Agar login nhi h tbhi name puchega nhi to bs password email

// LoginPopup.jsx

import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ?
                    <p>Create a new Account? <span onClick={() => { setCurrState("Sign Up") }}>Click Here</span></p>
                    :
                    <p>Already have an account? <span onClick={() => { setCurrState("Login") }}>Login Here</span></p>
                }
            </form>
        </div>
    );
}

export default LoginPopup;
