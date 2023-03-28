import React from "react";
// import QuoraBox from "./QuoraBox"

// import QuoraHeader from "./QuoraHeader";
// import Sidebar from "./Sidebar";
import "../components/css/answer.css";
// import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';





function Answerbox() {
  return (
   <>
   <div className="ansbox">
          <div className="answerbox">
            <div className="qusbox">
              <div className="starbox">
                <StarIcon sx={{ color: grey[50] }}/>
              </div>
              <p>Questions for you</p>
            </div>
          </div>
          <div className="answerbox">
            <div className="boxfeed">
              <p className="boxtext1">How can I make money online with no money and long hours of stress?<br/><span>3 answers . Last followed jan 4</span></p>
              <div>
                <CloseIcon/>
              </div>
            </div>
            <p></p>
          </div>
   </div>
   </>
  );
}

export default Answerbox;
