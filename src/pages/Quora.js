// import React from "react";
import QuoraBox from "../components/QuoraBox"

import QuoraHeader from "../components/QuoraHeader";
import Sidebar from "../components/Sidebar";

import "../components/css/Quora.css";


import React, { useEffect } from "react";
function Quora() {



  return (
    <div className="quora">
      <QuoraHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
           <QuoraBox />;
           
        </div>
      </div>
    </div>
  );
}

export default Quora;
