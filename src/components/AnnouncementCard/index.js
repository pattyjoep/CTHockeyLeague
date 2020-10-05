import React from 'react'
import "./style.css"

import { Card } from 'react-bootstrap'
import Alert from '../Alert'

function announcementCard() {
    return (
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
    )
}
export default announcementCard;