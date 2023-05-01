import React from 'react'

import LeftSide from './LeftSide/LeftSide'
import RightSide from './rightSide/RightSide'
import QuoraHeader from '../../components/QuoraHeader'
import "./profile.css"

const ProfilePage = () => {
    return (


        <div className="quora">
            <QuoraHeader />
            <div className="quora__contents">
                <div className="quora__content">
                    <section className="profile__container">
                        <LeftSide />
                        {/* <RightSide /> */}
                    </section>

                </div>
            </div>
        </div>
    )
}

export default ProfilePage