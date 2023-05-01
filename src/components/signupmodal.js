import { useRef, useState, useEffect } from "react";

// import { Route, useNavigate } from 'react-router-dom'
import "./css/signupmodal.css";
import CloseIcon from '@mui/icons-material/Close';
// import LanguageIcon from '@mui/icons-material/Language';
// import { AiOutlineRight } from 'react-icons/ai';
// import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function SignupBar({ closeModal }) {

    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");


    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        // HeadtextId : "",
      });

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { name, password, email,};
        if (IsValidate()) {
        console.log(regobj);
        fetch("http://localhost:3014/api/createusers", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Registered successfully.')
            navigate('/');
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        });
    }
}
 
    return (
        <>

            <div className='modal'>
                <div className='modalbackground'>
                    <div className='modalContainer'>

                        <div className='close_every'>
                            <div className='closebtn' >
                                <div className='btn'>
                                    <button className='btn1' onClick={() => closeModal(false)}> <CloseIcon /> </button>
                                </div>
                            </div>
                        </div>

                        <div className='form'>
                            <h3>Sign up</h3>

                            <form onSubmit={handlesubmit}>
                                <p className='title'>Name<span className="errmsg">*</span></p>
                                <div className='right'>
                                    <input value={name} onChange={e => namechange(e.target.value)}  className='myinput' type={'text'} placeholder="What would you like to be called" />

                                </div>
                                <p className='title'>Email<span className="errmsg">*</span></p>
                                <div className='right'>
                                    <input value={email} onChange={e => emailchange(e.target.value)}  className='myinput' type={'text'} placeholder="Your Email" />

                                </div>

                                <p className='title'>Password <span className="errmsg">*</span></p>
                                <div className='right'>
                                    <input value={password} onChange={e => passwordchange(e.target.value)} className='myinput' type={'password'} placeholder="Enter Password" />

                                </div>

                                <div className='button'>
                                    <button type="submit">Next</button>
                                </div>
                            </form>


                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupBar;




// let multer   = require("multer");
// let fs = require('fs');
// let path = require('path');
// let mongoose = require('mongoose')

// // models
// let Blog = new mongoose.Schema({
// 	name:{type:String,required:true},
// 	image:{type:String}

// })

// let storage = multer.diskStorage({
// 		destination: function (req, file, cb) {
// 			let __dir =  path.join(__dirname,'../uploads',); 
// 			cb(null, __dir);
// 		},
// 		filename: function (req, file, cb) {
// 				let filename = file.originalname.toLowerCase();
// 				cb(null, filename);
// 			}
// 		});
// let upload = multer({storage});


// app.post("/upload",upload.any(),(req,res)=>{
	
// 	   let blog  = new Blog(req.body)

//             req.files.map(e => {
//                 switch (e.fieldname) {
                   
//                     case 'image':
//                         blog.image = e.filename;
//                     break;
//                 }
//             })   

// 	blog.save()
// })