import React from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import RandomChar from "./components/randomChar/randomChar";
import './App.css';
import mainBgImg from './image-asset.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        {/*<img className='mainBgImg' src={mainBgImg} alt="mainBgImg"/>*/}
        <Navbar/>
        <RandomChar />
      </div>

    </div>
  );
}

export default App;
