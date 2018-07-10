import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import { withRouter } from 'react-router';
import NavBar from './components/NavBar/NavBar';

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
      </div>
    );
  }
}

export default withRouter(App);
