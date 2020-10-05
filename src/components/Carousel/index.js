import React from 'react'
import "./style.css"

import { Card, Carousel } from 'react-bootstrap'

function carousel(props) {
    return (
    <Card className="carousel-card">
       <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tier 1 - All Star Champions</h3>
                    <p>Team Name Here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Tier 2 Champions</h3>
                    <p>Team Name Here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Tier 3 Champions</h3>
                    <p>Team Name Here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Card>
    )
}
export default carousel;