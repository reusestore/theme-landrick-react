import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import americanEx from "../../assets/images/payments/american-ex.png";
import discover from "../../assets/images/payments/discover.png";
import masterCard from "../../assets/images/payments/master-card.png";
import paypal from "../../assets/images/payments/paypal.png";
import visa from "../../assets/images/payments/visa.png";
// import { FiChevronLeft } from "react-icons/fi";

//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "About us", link: "/page-aboutus" },
        { title: "Services", link: "/page-services" },
        { title: "Team", link: "/page-team" },
        { title: "Pricing", link: "/page-pricing" },
        { title: "Project", link: "/page-work" },
        { title: "Careers", link: "/page-jobs" },
        { title: "Blog", link: "/page-blog" },
        { title: "Login", link: "/page-cover-login" },
      ],
      grid2: [
        { title: "Terms of Services", link: "/page-terms" },
        { title: "Privacy Policy", link: "/page-privacy" },
        { title: "Documentation", link: "/documentation" },
        { title: "Changelog", link: "/changelog" },
        { title: "Components", link: "/components" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer footer-border"}>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="#" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  />
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item ml-1">
                    <Link to="" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="facebook"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                  <li className="list-inline-item ml-1">
                    <Link to="" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="instagram"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                  <li className="list-inline-item ml-1">
                    <Link to="" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="twitter"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                  <li className="list-inline-item ml-1">
                    <Link to="" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="linkedin"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Company
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right mr-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Usefull Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right mr-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Newsletter
                </h5>
                <p className="mt-4">
                  Sign up and receive the latest tips via email.
                </p>
                <Form>
                  <Row>
                    <Col lg="12">
                      <div
                        className={
                          this.props.isLight
                            ? "foot-subscribe foot-white form-group position-relative"
                            : "foot-subscribe form-group position-relative"
                        }
                      >
                        <Label
                          className={this.props.isLight ? "text-muted" : ""}
                        >
                          Write your email{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <i>
                          <div className="position-relative">
                            <FeatherIcon
                              icon="mail"
                              className="fea icon-sm icons"
                            />
                          </div>
                        </i>
                        <Input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className={
                            this.props.isLight
                              ? "form-control bg-light border pl-5 rounded"
                              : "form-control pl-5 rounded"
                          }
                          placeholder="Your email : "
                          required
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <Input
                        type="submit"
                        id="submitsubscribefooter"
                        name="send"
                        className="btn btn-soft-primary btn-block"
                        readOnly
                        value="Subscribe"
                      />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © 2020-21 Landrick. Develop by{" "}
                    <a
                      href="https://themesbrand.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success"
                    >
                      Themesbrand
                    </a>
                    .
                  </p>
                </div>
              </Col>

              <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-right mb-0">
                  <li className="list-inline-item mr-1">
                    <Link to="">
                      <img
                        src={americanEx}
                        className="avatar avatar-ex-sm"
                        title="American Express"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="">
                      <img
                        src={discover}
                        className="avatar avatar-ex-sm"
                        title="Discover"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="">
                      <img
                        src={masterCard}
                        className="avatar avatar-ex-sm"
                        title="Master Card"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="">
                      <img
                        src={paypal}
                        className="avatar avatar-ex-sm"
                        title="Paypal"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="">
                      <img
                        src={visa}
                        className="avatar avatar-ex-sm"
                        title="Visa"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
