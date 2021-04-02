import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";


export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      features: [
        {
          id: 1,
          icon: "uil uil-comment-verify d-block rounded h3 mb-0",
          title: "Instant Chat",
        },
        {
          id: 2,
          icon: "uil uil-image d-block rounded h3 mb-0",
          title: "Media Messages",
        },
        {
          id: 3,
          icon: "uil uil-video d-block rounded h3 mb-0",
          title: "Video Messages",
        },
        {
          id: 4,
          icon: "uil uil-database-alt d-block rounded h3 mb-0",
          title: "Dedicated Server",
        },
        {
          id: 5,
          icon: "uil uil-users-alt d-block rounded h3 mb-0",
          title: "Team Collaboration",
        },
        {
          id: 6,
          icon: "uil uil-apps d-block rounded h3 mb-0",
          title: "Responsive App",
        },
      ],
      reviews: [
        {
          id: 1,
          img: img1,
          name: "Thomas Israel",
          post: "C.E.O",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: "Barbara McIntosh",
          post: "M.D",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          rating: 4,
        },
        {
          id: 3,
          img: img3,
          name: "Carl Oliver",
          post: "P.A",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          rating: 3,
        },
        {
          id: 4,
          img: img4,
          name: "Christa Smith",
          post: "Manager",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: "Dean Tolle",
          post: "Developer",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: "Jill Webb",
          post: "Designer",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          rating: 4,
        },
      ],
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <section className="section border-bottom">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Our Features</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Start working with{" "}
                    <span className="text-primary font-weight-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {this.state.features.map((features, key) => (
                <Col lg={4} md={6} className="mt-5" key={key}>
                  <div className="media features feature-clean">
                    <div className="icons text-primary text-center mx-auto">
                      <i className={features.icon}></i>
                    </div>
                    <div className="content ml-4">
                      <h5 className="mb-1">
                        <Link to="#" className="text-dark">
                          {features.title}
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">
                        The most well-known dummy text is the, which is said to
                        have originated in the 16th century.
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center">
              <div className="col-12 mt-5">
                <div className="watch-video text-center">
                  <Link to="#" className="btn btn-primary m-1">
                    Get Started <i className="mdi mdi-chevron-right"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                  >
                    <i>
                      <FeatherIcon
                        icon="video"
                        className="fea icon-ex-md text-white title-dark"
                      />
                    </i>
                  </Link>
                  <span className="font-weight-bold text-uppercase small align-middle ml-1">
                    Watch Now
                  </span>
                </div>
              </div>
            </Row>
          </Container>
          <Container className=" mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Whats Our Clients Said About Landrick Project"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            {/* clients slider */}
            <ReviewsSlider reviews={this.state.reviews} colClass="mt-4" />
          </Container>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="287684225"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </React.Fragment>
    );
  }
}
