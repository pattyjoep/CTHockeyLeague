import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import RinkLogos from './components/RinkLogos'

import Footer from './components/Footer'

import { Container, Row, Col, } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <RinkLogos></RinkLogos>
      
      <header className="App-header">
      <Container>
        <Row>
          <Col>
          skdgkeg
          </Col>
        </Row>
      </Container>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Footer></Footer>
    </div>


  );
}

export default App;
