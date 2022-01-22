import React, {Component} from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import RandomChar from "./components/randomChar/randomChar";
import './App.css';
import CharacterList from "./components/characterList/characterList";
import CharDetails from "./components/charDetails/charDetails";

class App extends Component {

 state = {
   hideRandomChar: false,
   selectedChar: 112
 }

 toggleHideRandom = () => {
   this.setState({
     hideRandomChar: !this.state.hideRandomChar
   })
 }

 onCharSelected = (id) => {
   this.setState({
     selectedChar: id
   })
 }

 render() {
   const {hideRandomChar} = this.state

   return (
       <div className="App">
         <Header/>
         <div className="main">
           <Navbar/>
           <button className="btn btn-secondary btn-toggle-random"
                   onClick={this.toggleHideRandom}>{hideRandomChar ? "Show Random Char" : "Hide Random Character"}</button>
           {hideRandomChar ? null : <RandomChar/>}
           <div className="char-info">
            <CharacterList onCharSelected={this.onCharSelected}/>
            <CharDetails charId={this.state.selectedChar}/>
           </div>
         </div>

       </div>
   );
 }
}

export default App;
