import React from 'react'
import Image from "../user-img.jpeg"
import "./leftSide.css"
import { useSelector } from "react-redux";


import QuoraBox from '../../../components/QuoraBox'
const LeftSide = () => {


  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const posts = useSelector((state)=>state.postReducer.posts)


    return (
        <div className="left__container">
            <div className="all__details">
                <div className="profile__image__name">

                    <div className="profile__img">
                        <img src={  user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"} alt="" />
                    </div>




                    <div className="profile__name_details">
                        <div>
                        <span className='name'>{user.fullName} </span>
                        </div>
                        <span className="info">Consultant @ $5B Tech Co. | Published Forbes, Inc, LinkedIn 
                        <br/> 
                        </span>
                        <span className='followers_length'>
                            <span>{user.followers.length} </span>followers <span>{user.following.length}</span>following</span>
                        <div className="buttons_follow_notify_ask">
                            <button>Follow</button>
                            <button>notify</button>
                            <button>Ask</button>
                            <button>More</button>
                        </div>
                    </div>
                </div>
                <div className="about__profile">
                    <p className="info_text">
                    I’m just here trying to enjoy the ride. Here are 10 things about me. 1. 
                    Consultant for a large tech company in Automotive. 2. 
                    Worked in sales and marketing most of my career. 3. Owned and sold a 24-hour fitness fr…{ "     "}
                    </p>
                </div>
                <div className="section__list">
                    <ul className="list">
                        <li className="sub__list">Profile</li>
                        <li className="sub__list">221 Answers</li>
                        <li className="sub__list">90 Questions</li>
                        <li className="sub__list">{posts.length} Posts</li>
                        <li className="sub__list">{user.followers.length}Followers</li>
                        <li className="sub__list">{user.following.length}Following</li>
                        <li className="sub__list">More</li>
                    </ul>
                </div>
                <span className='profile__most-recent'>
                    <p className="profile">Profile</p>
                    <button className="most-recent">Most Recent</button>
               </span>


            </div>
            <QuoraBox/>
        </div>
    )
}

export default LeftSide