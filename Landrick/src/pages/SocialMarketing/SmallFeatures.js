import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import * as Unicons from "@iconscout/react-unicons";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//Import Images
import social from "../../assets/images/illustrator/social.svg";

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
            <Col lg={5} md={{ size: 6, order: 2 }} xs={{ size: 12, order: 1 }}>
              <img src={social} className="img-fluid" alt="Landrick" />
            </Col>

            <Col
              lg={7}
              md={{ size: 6, order: 1 }}
              xs={{ size: 12, order: 2 }}
              className="mt-4 pt-2 mt-sm-0 pt-sm-0"
            >
              <div className="section-title mr-lg-4">
                <p className="text-primary h2 mb-3">
                  <i>
                    <Unicons.UilLayerGroup size="33" />
                  </i>
                </p>
                <SectionTitleLeft
                  desc="Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."
                  features={this.state.featuresSmall}
                  class=""
                >
                  <h4 className="title mb-3">
                    Rapidly Grow Your <br />{" "}
                    <span className="text-primary">Social Feeds</span>
                  </h4>
                </SectionTitleLeft>
                <div className="watch-video mt-4 pt-2">
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="video-play-icon watch text-dark"
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
