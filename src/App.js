import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './containers/Contact'
import Post from './containers/Posts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

    <div className="App">
      <Header />
      <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/post" component={Post} />
    </div>
    </Router>
  );
}

export default App;
