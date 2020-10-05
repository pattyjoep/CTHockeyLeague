import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import RinkLogos from './components/RinkLogos'
import NewsCard from './components/NewsCard'
import AnnouncementCard from './components/AnnouncementCard'
import Carousel from './components/Carousel'

import Footer from './components/Footer'

import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <RinkLogos></RinkLogos>
      <Container>
        <Row>
          <Col sm="4">
            <NewsCard></NewsCard> 
          </Col>
          <Col sm="4">
            <Carousel></Carousel>
          </Col>
          <Col sm="4">
            <AnnouncementCard></AnnouncementCard>
          </Col>
        </Row>
      </Container>
      {/* <img class="img-responsive img-rounded" src="http://cthockeyleague.com/CHL_2014/media/uploads/flyers/chlhockeynetworkFlyer.jpg" border="0" width="1141"></img> */}
      <Footer></Footer>
    </div>


  );
}

export default App;
