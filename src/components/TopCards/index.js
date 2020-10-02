import React from 'react'
import "./style.css"

import { Container, Row, Col, CardGroup, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import Alert from '../Alert'

function card() {
    return (
        <CardGroup className="top-cards">
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>News</Card.Title>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col sm>
                                    <Button className="news-btn">COVID-19 Guidelines</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <Button className="news-btn">CHL Captain's Note</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <Button className="news-btn">CHL Penalty Box</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title><i class="fa fa-bullhorn"></i> Announcements</Card.Title>
                    <Card.Text>
                        <Alert importance="alert alert-primary"></Alert>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title><i class="fa fa-list"></i> Tier Information</Card.Title>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col sm>
                                    <Button className="tier-btn">Tier 1 - All Star</Button>
                                    <Button className="tier-btn">Tier 2</Button>
                                    <Button className="tier-btn">Tier 3</Button>
                                </Col>
                            </Row>      
                            <Row>
                                <Col sm>
                                    <Button className="tier-btn">Tier 4 - North</Button>
                                    <Button className="tier-btn">Tier 4 - South</Button>
                                    <Button className="tier-btn">Tier 5</Button>   
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <Button className="tier-btn">Tier 6 - North</Button>
                                    <Button className="tier-btn">Tier 6 - South</Button>
                                    <Button className="tier-btn">Tier 7</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}
export default card;