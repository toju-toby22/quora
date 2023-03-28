


import React from "react";
import Quora from "../Assets/quora.png";
import "../components/css/signup.css"
import SignupBar from "../components/signupmodal";
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function SignUp() {
    const [openModal, setOpenModal] = useState(false)
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
            },[]);


    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj={"email": email,
            "password": password};
            fetch("http://localhost:3013/signup/users",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                }else{
                     toast.success('Success');
                     sessionStorage.setItem('email',email);
                     sessionStorage.setItem('jwttoken',resp.jwtToken);
                   usenavigate('/')
                }
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('email',email);
                        usenavigate('/')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    // const ProceedLogin = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         ///implentation
    //         // console.log('proceed');
    //         fetch("http://localhost:3013/signup/users/" + email).then((res) => {
    //             return res.json();
    //         }).then((resp) => {
    //             //console.log(resp)
    //             if (Object.keys(resp).length === 0) {
    //                 toast.error('Please Enter valid username');
    //             } else {
    //                 if (resp.password === password) {
    //                     toast.success('Success');
    //                     sessionStorage.setItem('email',email);
    //                     sessionStorage.setItem('userrole',resp.role);
    //                     usenavigate('/')
    //                 }else{
    //                     toast.error('Please Enter valid credentials');
    //                 }
    //             }
    //         }).catch((err) => {
    //             toast.error('Login Failed due to :' + err.message);
    //         });
    //     }
    // }


    const validate = () => {
        let result = true;
        let errormessage = 'Please enter the value in ';
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter Email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        if (!result) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                result = false;
                toast.warning('Please enter the valid email')
            }
        }
        return result;
    }




    return (
        <>
            {openModal && <SignupBar closeModal={setOpenModal} />}
            <div>
                <div className="back-picture">
                    <div className="white-container">
                        <div classname="logo_section">
                            <img className="logo" src={Quora} alt="" />
                            <p className="sect">A place to share knowledge and better understand the world</p>
                        </div>

                        <div className="sigupform">
                            <div className="left-side">
                                <p className="terms">
                                    By continuing you indicate that you agree to
                                    Quora’s Terms of Service and Privacy Policy.
                                </p>
                                <div className="media-btn">
                                    <button>Continue with Google</button>
                                    <button>Continue with Facebook</button>
                                </div>
                                <button className="soe" onClick={() => { setOpenModal(true); }}>
                                    Sign up with email</button>
                            </div>


                            <div className="right-side">
                                <p className="login">Login</p>


                                <form onSubmit={ProceedLoginusingAPI}>
                                    <div className="input">
                                        <p>Email</p>
                                        <div className="right">
                                            <input value={email} onChange={e => emailupdate(e.target.value)} className="right-input" type="email" placeholder="Your email" />
                                        </div>
                                    </div>

                                    <div className="input">
                                        <p>Password</p>
                                        <div className="right">
                                            <input value={password} onChange={e => passwordupdate(e.target.value)} className="right-input" type="password" placeholder="Your password" />
                                        </div>
                                    </div>

                                    <div className="forgot">
                                        <p>Forgot Password</p>
                                        <button type="submit">Login</button>
                                    </div>
                                </form>






                            </div>
                        </div>

                        <div className="new">
                            <div className="new-sect">
                                <p>New: العربية, עברית, polski, ગુજરાતી, ಕನ್ನಡ, മലയാളം and తెలుగు</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default SignUp;