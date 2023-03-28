import { Routes, Route } from 'react-router-dom'
import React from 'react';
// import ReactDOM from 'react-dom';
import Quora from "./pages/Quora"
import Answer from "./pages/Answer"
import SignUp from "./pages/SignUp"
import QuoraBox from "./components/QuoraBox"
// import Courses from "./Pages/courses"
// import About from "./Pages/about"
// import Contact from "./Pages/contact"
// import Module1 from "./Pages/module1"
// import Module2 from "./Pages/module2"
import { ToastContainer } from 'react-toastify';

import './App.css'
function App() {
  //path means Url for the browser to display your component as a page
  return (
    <div>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>

      <Routes>
        <Route element={<Quora />} path="/" />
        <Route element={<Answer />} path="Answer" />
        <Route element={<QuoraBox />} path="QuoraBox" />
        <Route element={<SignUp />} path="SignUp" />
      </Routes>

    </div>
  );
}
export default App;