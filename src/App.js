import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import { withRouter } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <NavBar/>
        <div className='body'>
          {routes}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
