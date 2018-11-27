import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/App.css';

class App extends Component {  
  render() {    
    return (      
        <div className="App" style={{ paddingTop: '10px' }}>
          <Header/>
          <div className="jumbotron">
          <Main/>       
          </div>
        </div>
    );
  }
};

export default App;