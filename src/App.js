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
        
          <Col sm>
            <NewsCard></NewsCard> 
          </Col>
          <Col sm>
            <Carousel></Carousel>
          </Col>
          <Col sm>
            <AnnouncementCard></AnnouncementCard>
          </Col>
        </Row>
      </Container>
      {/* <img class="img-responsive img-rounded" src="http://cthockeyleague.com/CHL_2014/media/uploads/flyers/chlhockeynetworkFlyer.jpg" border="0" width="1141"></img> */}
      <a href="http://cthockeyleague.com/CHL_2014/ads/redirect/254">
                <img class="thumbnail" src="http://cthockeyleague.com/CHL_2014/media/uploads/ads/VAG Banner.jpg"></img>
            </a>
      <Footer>
     
      </Footer>
    </div>


  );
}

export default App;
