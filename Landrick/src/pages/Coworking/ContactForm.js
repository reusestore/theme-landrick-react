// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Button,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import bg04 from "../../assets/images/coworking/bg04.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false,
      isOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="section"
          style={{ background: `url(${bg04}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg="8" md="7">
                <div className="section-title mr-lg-4">
                  <h4 className="title title-dark text-light mb-4">
                    We are Built for Business – Explore Us Today !
                  </h4>
                  <p className="text-light para-dark para-desc mb-0">
                    Start working with{" "}
                    <span className="text-success font-weight-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <div className="watch-video mt-4 pt-2">
                    <Link to="#" className="btn btn-primary mb-2 mr-2">
                      Install Now
                    </Link>
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="video-play-icon watch title-dark text-light mb-2"
                    >
                      <i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-circle text-white title-dark position-relative play play-iconbar"></i>{" "}
                      WATCH VIDEO
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg="4" md="5" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="rounded shadow border-0">
                  <CardBody>
                    <h5 className="text-center">Become A Member</h5>

                    <Alert
                      color="primary"
                      isOpen={this.state.Contactvisible}
                      toggle={() => {
                        this.setState({
                          Contactvisible: !this.state.Contactvisible,
                        });
                      }}
                    >
                      Data sended successfully.
                    </Alert>
                    <Form onSubmit={this.handleSubmit}>
                      <Row className="mt-4">
                        <Col lg="12">
                          <FormGroup className="mb-3 position-relative">
                            <Label>
                              Your Name <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                            </div>
                            <Input
                              name="name"
                              id="name3"
                              type="text"
                              className="form-control pl-5"
                              placeholder="Name"
                              required
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="12">
                          <FormGroup className="mb-3 position-relative">
                            <Label>
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
                            </div>
                            <Input
                              type="email"
                              id="email3"
                              className="form-control pl-5"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </FormGroup>
                        </Col>

                        <Col md="12">
                          <FormGroup className="position-relative">
                            <Label>
                              Your Phone no. :
                              <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <FeatherIcon
                                icon="phone"
                                className="fea icon-sm icons"
                              />
                            </div>
                            <Input
                              name="number"
                              id="number"
                              type="number"
                              className="form-control pl-5"
                              placeholder="phone no. :"
                              required
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="12" className="mb-0">
                          <Button color="primary" block>
                            Started now
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <ModalVideo
              channel="vimeo"
              isOpen={this.state.isOpen}
              videoId="287684225"
              onClose={() => this.setState({ isOpen: false })}
            />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactForm;
