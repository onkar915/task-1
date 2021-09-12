import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom"
import Header from "./Header";
import Home from "./Home";





function App() {

//datalayer









  //router is the parent we have to wrap all the childreen in it route
  //ruote is what to load on page url
  return (
    <Router>


 <div className="app">
    
     {/*react router to acces multpile pages in spacsingle page
     without reloading or refresging to other pages*/ }
    <Switch>




<Route path = "/">
  {/**nav header components */}
  <Header />
  <Home/>
  
   
</Route>

    </Switch>
    
    </div>
      
  </Router> 
  );

}

export default App;
