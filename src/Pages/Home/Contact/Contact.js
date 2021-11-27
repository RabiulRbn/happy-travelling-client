import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <h2 className="title mb-5 ">Contact Us</h2>
            <div >
                <Container>

                    <Row>
                        <Col sm>
                            <h3>E-mail here</h3>
                            <p> toueo@gmail.com</p>
                            <p>tourobook@gmail.com</p>
                        </Col>
                        <Col sm>
                            <h3>Location here</h3>
                            <p> 5th Ave Premium Area,Dhaka, BD</p>
                            <p>Mirpur,Dhaka</p>
                        </Col>
                        <Col sm>
                            <h3>Call here</h3>
                            <p>+88012345</p>
                            <p>+88987456</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;