import React, { useRef, useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import "./css/modal.css";
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Cancel } from '@mui/icons-material';
import { uploadImage, uploadPost } from "../actions/UploadAction";
import { useDispatch, useSelector } from "react-redux";




function ModalBar({ closeModal }) {

  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [show, setShow] = useState(true)
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.postReducer.uploading);


  //handleimage
  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const desc = useRef();
  const navigate = useNavigate();


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };


  //handle post

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }


    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    navigate('/');
    resetShare();

  }

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <>

      <div className='modal'>
        <div className='modalbackground'>
          <div className='modalContainer'>

            <div className='close_every'>
              <div className='closebtn' >
                <div className='btn'>
                  <button className='btn1' onClick={() => closeModal(false)}><CloseIcon /></button>
                </div>
                <div className='everyone'>
                  <button className='btn2'><LanguageIcon /><span className='btn-spn'>Everyone</span></button>
                </div>
              </div>
            </div>

            <div>
              <div className='questi0n_post'>
                <div className='add-question'><p>Add Question</p></div>
                <div onClick={() => setShow(!show)} className='create-post'><p>Create Post</p></div>
              </div>



              {
                show &&
                <div>
                  <div className='credential'>
                    <div className="user-img">
                      <p className="user">T</p>
                    </div>
                    <div className='credential2'>
                      <p>Tobi Otoju<span><button className='btn_credentials'>Choose Credential<AiOutlineRight className='right-btn' /></button></span></p>
                      {/* <button className='btn_credentials'>Choose credential</button> */}
                    </div>
                  </div>

                  {/* <form> */}

                  <div className='text-box'>
                    <textarea required ref={desc} className='say' placeholder="Say something" />
                    <div style={{ position: "absolute" }}>
                      {image && (
                        <>
                          <div className='box'>
                            <Cancel onClick={() => setImage(null)} />
                            <img className='img2' src={URL.createObjectURL(image)} alt="preview" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>


                  <div className='post'>
                    <div className='text-mod'>
                      <input style={{ display: "none" }} type='file' ref={imageRef} onChange={onImageChange} name="" />
                      <button className='Aa' onClick={() => imageRef.current.click()}>
                        Aa
                      </button>
                      <div></div>
                    </div>

                    <div className='post-btn'>
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        >
                        {loading ? "uploading" : "Post"}
                        Post</button>
                    </div>
                  </div>
                  {/* </form> */}
                </div>
              }


            </div>




          </div>
        </div>
      </div>
    </>
  )
}

export default ModalBar;



//post as a user with Image
//comment post
//register as a user
//login as a user
//view user profile
//create categories for backend