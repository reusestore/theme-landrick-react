// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Alert, Badge } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import img1 from "../../assets/images/app/classic01.png";
import img2 from "../../assets/images/app/calender.png";

//Import Components
import Section from "./Section";
import Subscribe from "./subscribe";

class IndexClassicApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("buyButton").classList.remove("btn-primary");
    document.getElementById("buyButton").classList.add("btn-light");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("buyButton").classList.remove("btn-light");
      document.getElementById("buyButton").classList.add("btn-primary");
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("buyButton").classList.remove("btn-primary");
      document.getElementById("buyButton").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-170 d-table w-100 overflow-hidden"
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg="7" md="7">
                <div className="title-heading mt-4">
                  <Alert
                    color="none"
                    className="alert-transparent alert-pills shadow"
                    role="alert"
                  >
                    <Badge color="primary" pill className="mr-1">
                      New
                    </Badge>
                    <span className="content">
                      New Added Modern and Classic App Showcase
                    </span>
                  </Alert>
                  <h1 className="heading mb-3">
                    We build best apps that users love
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div className="watch-video mt-4 pt-2">
                    <Link to="#" className="btn btn-primary mb-2 mr-2">
                      Install Now
                    </Link>
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="video-play-icon watch title-dark text-dark mb-2 ml-1"
                    >
                      <i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-circle text-white title-dark position-relative play play-iconbar"></i>{" "}
                      WATCH VIDEO
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg="5" md="5" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="classic-app-image position-relative">
                  <div className="bg-app-shape position-relative">
                    <img
                      src={img1}
                      className="img-fluid mover mx-auto d-block "
                      alt=""
                    />
                  </div>
                  <div className="app-images d-none d-md-block">
                    <img src={img2} className="img-fluid" alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="99025203"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>

        {/* render Section */}
        <Section />

        {/* render subscribe */}
        <Subscribe />
      </React.Fragment>
    );
  }
}

export default IndexClassicApp;
