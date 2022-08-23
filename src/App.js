import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';


const App = () => {
  const pageSize = 15;
  const apikey = process.env.REACT_APP_NEWS
  // state = {
  //   progress : 10

  // }
  const [progress, setProgress] = useState(0)
  // setProgress = (progress) =>{
  //   setState({progress: state.progress})
  // }
  console.log("sadsasadasd", apikey);
  return (
    <div>
      <Navbar text="NewsMonkey" />
      <LoadingBar
        color='#f11946'
        progress={progress}

      />
      <Router>
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="business" />}></Route>
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="business" />}></Route>
          <Route path="/entairnment" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="entairnment" />}></Route>
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="general" />}></Route>
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="health" />}></Route>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="science" />}></Route>
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="sports" />}></Route>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apikey} pageSize={pageSize} country="in" category="technology" />}></Route>

        </Routes>

      </Router>
    </div>
  )
}

export default App;