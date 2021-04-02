import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// import { Parallax } from "react-parallax";

//CountDown
import Countdown from "react-countdown-now";

import bgImage from '../../assets/images/event/event.jpg';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <React.Fragment>
        <div className="count-down">
          <span className="count-number">351</span>
          <span className="count-head position-relative d-block">Days</span>
        </div>
        <div className="count-down">
          <span className="count-number">{hours}</span>
          <span className="count-head position-relative d-block">Hours</span>
        </div>{" "}
        <div className="count-down">
          <span className="count-number">{minutes}</span>
          <span className="count-head position-relative d-block">Minutes</span>
        </div>{" "}
        <div className="count-down">
          <span className="count-number">{seconds}</span>
          <span className="count-head position-relative d-block">Seconds</span>
        </div>
      </React.Fragment>
    );
  }
};

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Parallax
          bgImage={require("../../assets/images/event/event.jpg")}
          bgImageAlt="Image"
          strength={200}
        > */}
          <section className="bg-half-260 w-100 d-table" 
          style={{background : `url(${bgImage}) center center`}}
          >
            <div className="bg-overlay bg-overlay-gradient"></div>
            <Container>
              <Row className="justify-content-center">
                <Col lg="10" className="text-center">
                  <div className="title-heading">
                    <h4 className="text-success mb-3">11th October, 2020</h4>
                    <h1 className="display-4 title-dark text-white font-weight-bold mb-3">
                      Digital Conference 2020-21
                    </h1>
                    <p className="para-desc title-dark mx-auto text-light">
                      Launch your campaign and benefit from our expertise on
                      designing and managing conversion centered bootstrap4 html
                      page.
                    </p>

                    <Row>
                      <Col md="12" className="text-center">
                        <div id="eventdown">
                          <Countdown
                            date={Date.now() + 1199658655000}
                            renderer={renderer}
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="mt-4 pt-2">
                      <Link to="#" className="btn btn-success mt-2 mr-2">
                        <i className="mdi mdi-ticket"></i> Buy Tickets
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <div className="position-relative">
            <div className="shape overflow-hidden text-footer">
              <div className="text-center bg-white p-4">
                <h5 className="text-dark mb-0">
                  Next Event : 15th March, 2021
                </h5>
              </div>
            </div>
          </div>
        {/* </Parallax> */}
      </React.Fragment>
    );
  }
}

export default Section;
