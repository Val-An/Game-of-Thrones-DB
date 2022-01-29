import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import RandomChar from "./components/randomChar/randomChar";
import './App.css';
import ErrorMesage from "./components/errorMesage/errorMesage";
import CharacterPage from "./components/pages/characterPage/characterPage";
import gotService from "./services/gotService";
import HousesPage from "./components/pages/housesPage/housePage";
import BooksPage from "./components/pages/booksPage/bookPage";
import BooksItem from "./components/pages/booksPage/booksItem";

export default class App extends Component {
  gotService = new gotService()

 state = {
   hideRandomChar: false,
   error: false
 }

 componentDidCatch() {
   console.log("error")
   this.setState({
     error: true
   })
 }

  toggleHideRandom = () => {
   this.setState({
     hideRandomChar: !this.state.hideRandomChar
   })
 }


 render() {
   const {hideRandomChar} = this.state

   if (this.state.error) {
     return <ErrorMesage/>
   }

   return (
         <div className="App">

           <Header/>
           <div className="main">
             <Navbar/>
             <button className="btn btn-secondary btn-toggle-random"
                     onClick={this.toggleHideRandom}>
               {hideRandomChar ? "Show Random Char" : "Hide Random Character"}
             </button>
             {hideRandomChar ? null : <RandomChar/>}
             <Routes>
               {/*<Route exact path='/'/>*/}
               <Route path='/characters/' element={<CharacterPage/>}/>
               <Route path='/houses/' element={<HousesPage/>}/>
               <Route path='/books/' element={<BooksPage/>}/>
               <Route path='/books/:id' element={<BooksItem/>}/>
             </Routes>

           </div>

         </div>
      );
 }
}
