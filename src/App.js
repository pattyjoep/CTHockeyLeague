import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import RinkLogos from './components/RinkLogos'
import TopCards from './components/TopCards'

import Footer from './components/Footer'

import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <RinkLogos></RinkLogos>
      <Container>
        <Row>
          <Col sm="12">
            <TopCards></TopCards> 
          </Col>
        </Row>
      </Container>
      
      <Footer></Footer>
    </div>


  );
}

export default App;
