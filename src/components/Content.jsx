import {Route, Routes} from "react-router-dom";
import Home from "../routes/Home.jsx";
import About from "../routes/About.jsx";
import React from "react";

const Content = ({user}) => {
  return (<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About user={user} />}/>
  </Routes>)
}

export default Content;