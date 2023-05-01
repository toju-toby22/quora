
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import "./css/QuoraBox.css";
import React, { useState, useEffect } from "react";
import ModalBar from "../components/modal";
import { BsPencilSquare } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import Quoracontents from './quoracontents'
import { getTimelinePosts } from "../actions/PostsAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const QuoraBox =() => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [openModal, setOpenModal] = useState(false)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;



  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if (!posts) return 'No Posts';
  if (params.id) posts = posts.filter((post) => post.userId === params.id)


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
              <img className='user' src={  user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"}alt="" />
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


           <div>
           {loading
            ? "Fetching posts...."
            : posts.map((post, id) => {
              return <Quoracontents data={post} key={id} user={post} />;
            })}
           </div>




      </div>
    </>
  );
}

export default QuoraBox;
