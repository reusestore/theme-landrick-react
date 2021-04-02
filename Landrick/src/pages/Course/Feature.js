// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          icon: "uil uil-file d-block rounded h3 mb-0",
          title: "Unlimited Access",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
          link: "#",
          hoverIcon: "uil uil-file text-primary full-img",
        },
        {
          icon: "uil uil-graduation-cap d-block rounded h3 mb-0",
          title: "Our Courses",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
          link: "#",
          hoverIcon: "uil uil-graduation-cap text-primary full-img",
        },
        {
          icon: "uil uil-book-reader d-block rounded h3 mb-0",
          title: "Expert Teachers",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
          link: "#",
          hoverIcon: "uil uil-book-reader text-primary full-img",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="features-absolute">
                  <Row>
                    {this.state.features.map((feature, key) => (
                      <Col md={4} key={key}>
                        <Card className="course-feature text-center overflow-hidden rounded shadow border-0">
                          <CardBody className="py-5">
                            <div className="icons text-primary text-center mx-auto">
                              <i className={feature.icon}></i>
                            </div>
                            <h4 className="mt-3">
                              <Link
                                to={feature.link}
                                className="title text-dark"
                              >
                                {" "}
                                {feature.title}
                              </Link>
                            </h4>
                            <p className="text-muted">{feature.desc} </p>
                            <Link
                              to={feature.link}
                              className="text-primary read-more"
                            >
                              Read More{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </Link>
                            <i className={feature.hoverIcon}></i>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
