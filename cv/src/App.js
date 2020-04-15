import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
function App() {
  return (
  	<Router>
    	<Switch>
          <Route path="/about">
          	<div className="is-preload">
		      <Header />      
		      <About />
		    </div>            
          </Route>
          <Route path="/skils">
          	<div className="is-preload">
		      <Header />      
		      <Skills />
		    </div>
          </Route>
          <Route path="/">
            <div className="is-preload">
		      <Header />      
		      <Main />
		    </div>
          </Route>
        </Switch>
    </Router>    
    
  );
}

export default App;
