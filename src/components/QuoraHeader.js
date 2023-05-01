// import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  // AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
// import CloseIcon from "@material-ui/icons/Close";
// import {  Button } from "@mui/icons-material";
import "./css/QuoraHeader.css";
import Quora from "../Assets/quora.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
// import React, { useState } from "react";
import { Link,Navigate } from 'react-router-dom';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ModalBar from "../components/modal";
import { BsPencilSquare } from 'react-icons/bs';
import { FaRegListAlt } from 'react-icons/fa';

import { useSelector } from "react-redux";
import { useState } from "react"





function QuoraHeader() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  if (openModal) {
    document.body.classList.add('active-modl')
  } else {
    document.body.classList.remove('active-modl')
  }


  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const { user } = useSelector((state) => state.authReducer.authData);


  return (
    <>
      <div className="qHeader">
        <div className="qHeader-content">

          <div className="quora-logo">
            <img src={Quora} alt="" />
          </div>
          {/* <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div> */}
          <div className="qHeader__icons">

            <Link to="/">
              <div className="qHeader__icon" title='jebhbbv'>
                <HomeOutlinedIcon />
              </div>
            </Link>
            {/* <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div> */}
            <div className="qHeader__icon">
              <FaRegListAlt size={25} />
            </div>
            <Link to="/Answer">
            
            <div className="qHeader__icon">
              <BsPencilSquare size={25} 
              />
            </div>
            </Link>

            <Link to="/Answer">
              <div className="qHeader__icon">
                <PeopleOutlineIcon />
              </div>
            </Link>

            <div className="qHeader__icon">
              <NotificationsOutlined />
            </div>
          </div>
          <div className="qHeader__input">
            <Search />
            <input type="text" placeholder="Search questions" />
          </div>

          <button className="q_try">
            Try Quora+
          </button>

          <Link to="/Auth">
            <div className="qHeader__icon">
              <LanguageIcon />
            </div>
          </Link>

          <Link to={`/ProfilePage/${user._id}`} >
            <div className="qHeader__icon">
             <img className='profileimg' src={  user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"} alt="" />
            </div>
          </Link>

          <button className="q_question" onClick={() => {
            setOpenModal(true);
          }}>
            Add Question
            <KeyboardArrowDownIcon />
          </button>

        </div>
      </div>

      <div className="q_headhome">
        <p className="sub-home">Home</p>
        <p className="sub-home1">Following</p>
        <p className="sub-home2">Answer</p>
        <p className="sub-home3">Spaces</p>
        <p className="sub-home4">Notifications</p>
      </div>
      {openModal && <ModalBar closeModal={setOpenModal} />}
    </>

  );
}

export default QuoraHeader;
