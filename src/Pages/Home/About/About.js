import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div id="about" className="about-title-container">
            <h3 className="title">About Us</h3>
            <div className="about-container mx-auto">
                
                <Container>
                    <Row>

                        <Col sm={8}>
                            <p className="detail">Places of natural beauty such as beaches, tropical island resorts, national parks, mountains, deserts and forests, are examples of traditional tourist attractions which people may visit. Cultural tourist attractions can include historical places, monuments, ancient temples, zoos, aquaria, museums and art galleries, botanical gardens, buildings and structures (such as forts, castles, libraries, former prisons, skyscrapers, bridges), theme parks and carnivals, living history museums, public art (sculptures, statues, murals), ethnic enclave communities, historic trains and cultural events. Factory tours, industrial heritage, creative art and crafts workshops are the object of cultural niches like industrial tourism and creative tourism..</p>
                            <br />
                            <Button variant="success">Learn More</Button>
                        </Col>
                        <Col sm={4}><img className="img" src={'https://as1.ftcdn.net/v2/jpg/01/58/27/44/500_F_158274459_ZtOZI8zxw4cZu2l6cM3lpbrkf8iPZuOz.jpg'} alt="" /></Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default About;