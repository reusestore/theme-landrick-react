import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//Import Images
import about from "../../assets/images/digital/about.png";

class SmallFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuresSmall: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col md={6}>
              <img src={about} className="img-fluid" alt="Landrick" />
            </Col>

            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <SectionTitleLeft
                  title="We provide best SEO service"
                  desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                  features={this.state.featuresSmall}
                  class=""
                />
                <div className="watch-video mt-4 pt-2">
                  <Link to="#" className="btn btn-primary mb-2 mr-2">
                    Read More <i className="mdi mdi-chevron-right"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="video-play-icon watch text-dark ml-1"
                  >
                    <i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-circle title-dark text-white position-relative play play-iconbar"></i>{" "}
                    WATCH VIDEO
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="99025203"
            onClose={() => this.setState({ isOpen: false })}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default SmallFeatures;
