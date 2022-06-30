import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Instructor from "./pages/Instructor";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navigation from './components/Navigation';
// import Footer from './components/Footer';



export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes> 
      
    </Router>
  );
}


