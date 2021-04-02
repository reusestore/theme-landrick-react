// React basic and bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <footer className="footer footer-bar">
                    <Container className="text-center">
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <p className="mb-0">© {new Date().getFullYear()}-{new Date().getFullYear() + 1} Landrick. Design by Themesbrand</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        );
    }
}
export default Footer;
