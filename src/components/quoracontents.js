import React, { useState } from "react";
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { FaRegComment } from 'react-icons/fa';
import "./css/quoracontents.css";
import userimg from "../Assets/user-img.jpeg"
import { useSelector } from "react-redux";
import { likePost } from "../api/PostsRequests";
import { Link } from "react-router-dom";







const Quoracontents = ({ data }) => {

    //   const { user } = useSelector((state) => state.authReducer.authData); 

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length)



    const handleLike = () => {
        likePost(data._id, user._id);
        setLiked((prev) => !prev);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    };




    return (
        <div>
            <div className="post-box">
                <div>
                    <div className="user-info">
                        <div className="post_userImg">
                            <img src={
                                user.profilePicture
                                    ? serverPublic + user.profilePicture
                                    : serverPublic + "defaultProfile.png"
                            } alt="" />
                        </div>

                        <div className="user-name">
                            <p className="user-hist1">
                                <Link to={`/ProfilePage/${user._id}`} style={{ textDecoration: "none", color:"black"}}>
                                    <span>
                                        {user.fullName}
                                    </span>
                                </Link>
                                <span className="use" style={{ margin: "0px 20px 0px 0px"}}>    Follow</span>
                                <br />
                                <span className="user_info">Answered by john Bergevin</span>
                            </p>
                            {/* <p className="user-hist">2yrs</p> */}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="topic">{data.desc}</p>
                </div>
                <div className="topic-img">
                    <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
                </div>

                <div className='comment_section'>
                    <div className='like-btn'>
                        <button className='sub-btn' onClick={handleLike}>
                            <ArrowCircleUpOutlinedIcon />
                            <p><span>Upvote</span>  <span>{likes}</span></p>
                        </button>
                        <button className='sub-btn2'>
                            <ArrowCircleDownOutlinedIcon />
                            <p>9.5k</p>
                        </button>
                    </div>
                    <button className='comment-btn'>
                        <FaRegComment size={20} />
                        <p>k</p>
                    </button>
                    <button className='share-btn'>
                        <LoopOutlinedIcon />
                        <p>9.5k</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quoracontents;