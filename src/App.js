import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import mainBgImg from './image-asset.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        {/*<img className='mainBgImg' src={mainBgImg} alt="mainBgImg"/>*/}
        <Navbar/>
      </div>

    </div>
  );
}

export default App;
