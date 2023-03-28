import { Add } from "@mui/icons-material";
import React from "react";
import "./css/SidebarOptions.css";
import userimg from "../Assets/user-img.jpeg"





function SidebarOptions() {
  return (
    <div className="sidebarOptions">

      <div className="sidebarOption">
        <Add />
        <p className="text">Create Spaces</p>
      </div>
      <div className="sidebarOption">
        <img className="userimg"
          src={userimg}
          alt=""
        />
        <p>Business</p>
      </div>

      <div className="sidebarOption">
        <img className="userimg"
          src={userimg}
          alt=""
        />
        <p>Marvel Comics</p>
      </div>

      <div className="sidebarOption">
        <img className="userimg"
          src={userimg}
          alt=""
        />
        <p>Fashion and style</p>
      </div>


      <div className="sidebarOption">
        <img className="userimg"
          src={userimg}
          alt=""
        />
        <p>Business</p>
      </div>


      <div className="sidebarOption">
        <img className="userimg"
          src={userimg}
          alt=""
        />
        <p>Business</p>
      </div>


      <div className="sidebarOption">
        <img className="userimg"
          src={userimg}
          alt=""
        />
        <p>Business</p>
      </div>



      <div className="sidebarOption">
        <img className="userimg"
          src={userimg}
          alt=""
        />
        <p>Business</p>
      </div>
    

    </div>
  );
}

export default SidebarOptions;
