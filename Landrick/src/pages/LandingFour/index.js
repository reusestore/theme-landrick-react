import React, { Component } from "react";
import KeyFeature from "../Agency/KeyFeature";
import Partners from "../Developer/Partners";
import Pricing from "./Pricing";
import Features from "./Features";
import Section from "./Section";
import TeamMember from "./TeamMember";
import Blog from "../ITSolution/Blog";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default class index extends Component {
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);

    var featurebox = document.getElementsByName("featurebox");
    for (var i = 0; i < featurebox.length; i++) {
      if (i !== 0) {
        featurebox[i].classList.add("mt-5");
        featurebox[i].classList.add("mt-sm-0");
      }
    }
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Section />
        {/* Partners */}
        <Partners />
        {/* Features */}
        <section className="section">
          <Features />
          <KeyFeature />
        </section>
        <TeamMember />
        <section className="section">
          <Pricing />
          <Blog />
        </section>
        <Container fluid className="px-0">
          <div className="py-5 bg-footer">
            <Container>
              <Row className="align-items-center">
                <Col md={8}>
                  <div className="section-title">
                    <div className="media">
                      <i className="uil uil-envelope-star display-4 text-white title-dark"></i>
                      <div className="media-body ml-md-4 ml-3">
                        <h4 className="font-weight-bold text-light title-dark mb-1">
                          Subscribe to our newsletters
                        </h4>
                        <p className="text-white-50 mb-0">
                          Sign up and receive the latest tips via email.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-4 mt-sm-0">
                  <div className="text-md-right ml-5 ml-sm-0">
                    <Link to="#" className="btn btn-primary">
                      Subscribe Now
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
