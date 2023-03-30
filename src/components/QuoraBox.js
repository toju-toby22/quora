// import { Avatar } from "@material-ui/core";

import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

// import { useSelector } from "react-redux";
// import { selectUser } from "../feature/userSlice";
import "./css/QuoraBox.css";
// import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import userimg from "../Assets/user-img.jpeg"
import postimg from "../Assets/post img.jpg"



// import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ModalBar from "../components/modal";
import { BsPencilSquare } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';



function QuoraBox() {
  // const user = useSelector(selectUser);



  // const { id } = useParams()

  const [aData, setaData] = useState([]) 
const [count, setCount] = useState(0)
const [decrement, setDecremrnt] = useState(0)

const handleIncrement = () =>{
  setCount(count + 1)
}

const handleDecrement = () =>{
  setDecremrnt(decrement - 1)
}



  useEffect(() => {
    const getdata = () => {
      axios.get(`http://localhost:3014/api/posts`).then((res) => {
        console.log(res.data);
        setaData(res.data);
      }).catch((err) => {

      })
    }
    getdata()
  }, [])
  console.log(aData);


  const [openModal, setOpenModal] = useState(false)

  if (openModal) {
    document.body.classList.add('active-modl')
  } else {
    document.body.classList.remove('active-modl')
  }
  return (
    <>
      {openModal && <ModalBar closeModal={setOpenModal} />}
      <div className="qbox">
        <div className="quora-Box">
          <div className="input-box">
            <div className="user-img">
              <p className="user">T</p>
            </div>
            <input className="quora-input" type="text" placeholder="What do you want to ask or share?" />
          </div>


          <div className="quora-Box2">

            <div className='sub-box'>
              <button className="quora__boxIcon" onClick={() => {
                setOpenModal(true);
              }}>
                <ContactSupportOutlinedIcon />
                Ask
              </button>
            </div>

            <div className='sub-box2'>
              <button className="quora__boxIcon" onClick={() => {
                setOpenModal(true);
              }}>
                <BsPencilSquare size={20} />
                <span className='anss'>Answer</span>
              </button>
            </div>

            <div className='sub-box'>
              <button className="quora__boxIcon" onClick={() => {
                setOpenModal(true);
              }}>
                <BiPencil size={20} />
                <span className='pst'>Post</span>
              </button>
            </div>

          </div>

        </div>









        {
          aData && aData.map((items) => {
            return (
              <>

                <div className="post-box">


                  <div className='pusg'>
                    <div>
                      <div className="user-info">
                        <div className="post_userImg">
                          <img src={userimg} alt="" />
                        </div>

                        <div className="user-name">
                          <p className="user-hist1">Quotes Canvas.<span className="use">Follow</span>
                            <br />
                            <span className="user_info">Answered by john Bergevin</span>
                            {aData.length}
                          </p>
                        </div>
                      </div>
                    </div><div>
                      <p className="topic">{items.textId}</p>
                    <p className="user-hist">What do we know about a web developer and his abilities to evolve in tech
                    What do we know about a web developer and his abilities to evolve in tech
                    What do we know about a web developer and his abilities to evolve in tech
                    What do we know about a web developer and his abilities to evolve in tech
                    What do we know about a web developer and his abilities to evolve in tech
                    What do we know about a web developer and his abilities to evolve in tech
                    What do we know about a web developer and his abilities to evolve in tech
                    What do we know about a web developer and his abilities to evolve in tech 
                     </p>
                    </div>
                    <div className="topic-img">
                      <img src={postimg} alt="" />
                    </div><div className='comment_section'>
                      <div className='like-btn'>
                        <div className='lk-btn'>
                          <button className='sub-btn' onClick={handleIncrement}>
                            <ArrowCircleUpOutlinedIcon />
                            <p className='up-vote'>{count}Up Vote</p>
                          </button>
                        </div>
                        <button className='sub-btn2' onClick={handleDecrement}>
                          <ArrowCircleDownOutlinedIcon />
                          <p>{decrement}</p>
                        </button>
                      </div>

                      <button className='comment-btn'>
                        <FaRegComment size={20} />
                        <p>9.5k</p>
                      </button>
                      <button className='share-btn'>
                        <LoopOutlinedIcon />
                        <p>9.5k</p>
                      </button>
                    </div>
                  </div>

                </div>
              </>

            )
          })
        }
        {/* <modalBar/> */}






















        <div className="post-box">
          <div>
            <div className="user-info">
              <div className="post_userImg">
                <img src={userimg} alt="" />
              </div>

              <div className="user-name">
                <p className="user-hist1">Quotes Canvas . <span className="use">Follow</span>
                  <br />
                  <span className="user_info">Answered by john Bergevin</span>
                </p>
                {/* <p className="user-hist"></p> */}
              </div>
            </div>
          </div>
          <div>
            <p className="topic">What is the best way to Improve life?</p>
          </div>
          <div className="topic-img">
            <img src={postimg} alt="" />
          </div>

          <div className='comment_section'>
            <div className='like-btn'>
              <button className='sub-btn'>
                <ArrowCircleUpOutlinedIcon />
                <p>9.5k</p>
              </button>
              <button className='sub-btn2'>
                <ArrowCircleDownOutlinedIcon />
                {/* <p>9.5k</p> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoraBox;
