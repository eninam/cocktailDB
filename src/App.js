import React from "react";
// import pages
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
//import components 
import Navbar from './components/Navbar'
import SingleCocktail from "./pages/SingleCocktail"
import {
  BrowserRouter as Router ,
  Switch, 
  Route,
  Link
} from 'react-router-dom'
export default function App() {
  return (<Router>
    <Navbar/>
    <Switch> 
      {/* SWTICH renders the first child that maches the URL */}
    <Route exact path="/"><Home/></Route>
    < Route exact path = "/about" > < About /> </Route>
    <Route path="/cocktail/:id"><SingleCocktail/></Route>
    < Route path = "*" > < Error /> </Route>
    </Switch>
  </Router>);
}

