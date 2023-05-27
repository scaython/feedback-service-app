//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import Header from './components/Header';
//import Feedbackitem from './components/Feedbackitem';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Stats from './components/Stats';
import FeedbackForm from './components/FeedbackForm';

import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from "./context/FeedBackContext"


function App() {
  //const [feedbackdata,setFeedback]= useState(FeedbackData)
  


  
  return (
    <div className="App">
      <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm/>
                <hr />
                <br />
                <Stats/>
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path="/about" element={<AboutPage />}>
             
            </Route>
            
          </Routes>
          <AboutIconLink/>
        </div>
      </Router>
     
      </FeedbackProvider>
    
      
    </div>
  );
}

export default App;
