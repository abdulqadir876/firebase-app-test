import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import Post from './Post';


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/post" element={<Post />}/>
      </Routes>
      
    </div>
  )
}

export default App