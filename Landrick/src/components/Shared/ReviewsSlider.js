import React, { Component } from "react";
import { Media, Row, Col } from "reactstrap";
import StarRatings from "react-star-ratings";

class ReviewsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 4,
      step1: true,
      step2: false,
    };
    this.updateWindowSize.bind(this);
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col lg="12" className={this.props.colClass}>
            <div
              id="customer-testi"
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <Row>
                    {this.state.step1 === true
                      ? this.props.reviews.map((review, key) =>
                          key >= 0 && key <= 2 ? (
                            <Col
                              key={key}
                              md={this.state.cols}
                              className="mb-1"
                            >
                              <Media
                                className="customer-testi m-2"
                                name="clientsreview"
                              >
                                <img
                                  src={review.img}
                                  style={{ height: 65, width: 65 }}
                                  className="avatar avatar-small mr-3 rounded shadow"
                                  alt=""
                                />
                                <Media
                                  className="content p-3 shadow rounded bg-white position-relative"
                                  body
                                >
                                  <StarRatings
                                    items={3}
                                    rating={review.rating}
                                    starRatedColor="#F17425"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="15px"
                                    starSpacing="3px"
                                  />
                                  <p className="text-muted mt-2">
                                    " {review.desc} "
                                  </p>
                                  <h6 className="text-primary">
                                    - {review.name}{" "}
                                    <small className="text-muted">
                                      {review.post}
                                    </small>
                                  </h6>
                                </Media>
                              </Media>
                            </Col>
                          ) : null
                        )
                      : this.props.reviews.map((review, key) =>
                          key >= 3 && key <= 5 ? (
                            <Col
                              key={key}
                              md={this.state.cols}
                              className="mb-1"
                            >
                              <Media
                                className="customer-testi m-2"
                                name="clientsreview"
                              >
                                <img
                                  src={review.img}
                                  style={{ height: 65, width: 65 }}
                                  className="avatar avatar-small mr-3 rounded shadow"
                                  alt=""
                                />
                                <Media
                                  className="content p-3 shadow rounded bg-white position-relative"
                                  body
                                >
                                  <StarRatings
                                    items={3}
                                    rating={review.rating}
                                    starRatedColor="#F17425"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="15px"
                                    starSpacing="3px"
                                  />
                                  <p className="text-muted mt-2">
                                    " {review.desc} "
                                  </p>
                                  <h6 className="text-primary">
                                    - {review.name}{" "}
                                    <small className="text-muted">
                                      {review.post}
                                    </small>
                                  </h6>
                                </Media>
                              </Media>
                            </Col>
                          ) : null
                        )}
                  </Row>
                </div>
              </div>
              <div className="custom-owl-dots custom-dots">
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ step1: true, step2: false });
                  }}
                  className={
                    this.state.step1 ? "indicator-active" : "indicator-inactive"
                  }
                ></button>
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ step1: false, step2: true });
                  }}
                  className={
                    this.state.step2 ? "indicator-active" : "indicator-inactive"
                  }
                ></button>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ReviewsSlider;
