import React, { useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import "./css/modal.css";
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';




function ModalBar({ closeModal }) {

  const [show, setShow] = useState(true)
  // const url = ""
  // const [posts, setPosts] = useState ([])
  const navigate = useNavigate()
  const [data, setData] = useState({
    textId: "",
    // HeadtextId : "",
  });

  function submit(e) {
    e.preventDefault();
    axios.post(('http://localhost:3014/api/card-posts'), {
      textId: data.textId,
    })
      .then(res => {
        console.log(res.data)
        closeModal(false)
        navigate('/')

      });

  };


  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)

    // const addPost = async () => {
    //   const post = (newData);
    //   await Axios.post(url, post);
    //   setPosts([post, ...posts])
    // }
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

                  <form method='post' onSubmit={(e) => submit(e)}>
                    <div className='text-box'>
                      <textarea onChange={(e) => handle(e)} id="textId" value={data.textId} className='say' placeholder="Say something" />
                    </div>

                    <div className='post'>
                      <div className='text-mod'>
                        {/* <input  type='file' className='Aa'/> */}
                        
                        <div></div>
                      </div>

                      <div className='post-btn'>
                        <button>Post</button>
                      </div>
                    </div>
                  </form>
                </div>
              }

              {/* <div>
                <div className='credential'>
                  <div className="user-img">
                        <p className="user">T</p>
                      </div>
                      <div className='credential2'>
                        <p>Tobi Otoju<span><button className='btn_credentials'>Choose Credential<AiOutlineRight className='right-btn' /></button></span></p>
                        <button className='btn_credentials'>Choose credential</button>
                      </div>
                </div>

                <form method='post' onSubmit={(e) => submit(e)}>
                  <div className='text-box'>
                    <textarea onChange={(e) => handle(e)} id="textId" value={data.textId} className='say' placeholder="Say something" />
                  </div>

                  <div className='post'>
                    <div className='text-mod'>
                      <button className='Aa'>
                        Aa
                      </button>
                      <div></div>
                    </div>

                    <div className='post-btn'>
                      <button>Post</button>
                    </div>
                  </div>
                </form>
              </div> */}


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