import React, {Component} from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import RandomChar from "./components/randomChar/randomChar";
import './App.css';
import mainBgImg from './image-asset.jpeg'

class App extends Component {

 state = {
   hide: false
 }

 toggleHideRandom = () => {
   this.setState({
     hide: !this.state.hide
   })
 }

 render() {
   const {hide} = this.state

   return (
       <div className="App">
         <Header/>
         <div className="main">
           {/*<img className='mainBgImg' src={mainBgImg} alt="mainBgImg"/>*/}
           <Navbar/>
           <button className="btn btn-secondary btn-toggle-random" onClick={this.toggleHideRandom}>{hide ? "Show Random Char" : "Hide Random Character"}</button>
           {hide ? '' : <RandomChar/>}
         </div>

       </div>
   );
 }
}

export default App;
