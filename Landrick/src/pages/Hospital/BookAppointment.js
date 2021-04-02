import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";
import medical from "../../assets/images/medical/cta.jpg";

export default class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.togglemodal.bind(this);
  }
  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <Container fluid className="px-0">
          <div className="py-5 bg-footer">
            <Container>
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="section-title">
                    <div className="media">
                      <i className="uil uil-stethoscope-alt display-4 text-white title-dark"></i>
                      <div className="media-body ml-md-4 ml-3">
                        <h4 className="font-weight-bold text-light title-dark mb-1">
                          Get a free medical
                        </h4>
                        <p className="text-white-50 mb-0">
                          Build modern looking websites fast and easy using
                          Landflow.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={5} className="mt-4 mt-sm-0">
                  <div className="text-md-right ml-5 ml-sm-0">
                    <Link
                      to="#"
                      className="btn btn-primary mr-2 mr-lg-2 mr-md-0 my-2"
                      onClick={this.togglemodal}
                    >
                      <i className="uil uil-file-alt"></i> Book An Appointment
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Modal
          isOpen={this.state.modal}
          tabIndex="-1"
          size="lg"
          centered
          //   contentClassName="rounded shadow-lg border-0 overflow-hidden"
          toggle={this.togglemodal}
        >
          <ModalBody className="p-0">
            <Container fluid className="px-0">
              <Row className="align-items-center no-gutters">
                <Col lg={6} md={5} className="d-none d-md-block">
                  <img src={medical} className="img-fluid" alt="" />
                </Col>

                <Col lg={6} md={7}>
                  <Form className="login-form p-4">
                    <Row>
                      <Col lg={12}>
                        <FormGroup>
                          <Label>
                            Your Email <span className="text-danger">*</span>
                          </Label>
                          <div className="position-relative">
                            <i>
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                            </i>
                            <Input
                              type="email"
                              className="form-control pl-5"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
                        </FormGroup>
                      </Col>

                      <Col lg={12}>
                        <FormGroup>
                          <Label>
                            Password <span className="text-danger">*</span>
                          </Label>
                          <div className="position-relative">
                            <i>
                              <FeatherIcon
                                icon="lock"
                                className="fea icon-sm icons"
                              />
                            </i>
                            <Input
                              type="password"
                              className="form-control pl-5"
                              placeholder="Password"
                              required=""
                            />
                          </div>
                        </FormGroup>
                      </Col>

                      <Col lg={12}>
                        <div className="d-flex justify-content-between">
                          <FormGroup>
                            <div className="custom-control custom-checkbox">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <Label
                                className="custom-control-label"
                                for="customCheck1"
                              >
                                Remember me
                              </Label>
                            </div>
                          </FormGroup>
                          <p className="forgot-pass mb-0">
                            <Link
                              to="auth-re-password.html"
                              className="text-dark font-weight-bold"
                            >
                              Forgot password ?
                            </Link>
                          </p>
                        </div>
                      </Col>

                      <Col lg={12} className="mb-0">
                        <button className="btn btn-primary btn-block">
                          Sign in
                        </button>
                      </Col>

                      <Col lg={12} className="text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark mr-2">
                            Don't have an account ?
                          </small>{" "}
                          <Link
                            to="auth-signup.html"
                            className="text-dark font-weight-bold"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
