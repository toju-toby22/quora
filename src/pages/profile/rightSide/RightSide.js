import React from 'react'

const RightSide = () => {
  return (
    <div className="left__container">
    <div className="all__details">
        <div className="profile__image__name">

            <div className="profile__img">
                {/* <img src={Image} alt="" /> */}
            </div>




            <div className="profile__name_details">
                <div><h1 className="name">Josh Gwin <br/>
               <div> <p className="info">Consultant @ $5B Tech Co. | Published Forbes, Inc, LinkedIn</p></div>

                 </h1></div>
            <div>    <p className="followers_length">7,726 followers <span>379 following</span></p></div>
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
                <li className="sub__list">15 Posts</li>
                <li className="sub__list">7.7k Followers</li>
                <li className="sub__list">Following</li>
                <li className="sub__list">More</li>
            </ul>
        </div>

        <div className="profile__most-recent">
            <h4 className="profile">Profile</h4>
            <button className="most-recent">Most Recent</button>
        </div>


    </div>
</div>
  )
}

export default RightSide