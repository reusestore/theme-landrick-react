// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user02 from "../../../assets/images/user/02.jpg";

class PageCoverSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section className="cover-user bg-white">
          <Container fluid className="px-0">
            <Row className="no-gutters position-relative">
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30 ">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col xs={12}>
                      <Card
                        className="login_page border-0"
                        style={{ zIndex: 1 }}
                      >
                        <CardBody className="p-0">
                          <h4 className="card-title text-center">Signup</h4>
                          <AvForm className="login-form mt-4">
                            <Row>
                              <Col md="6">
                                <FormGroup className="position-relative">
                                  <Label for="firstname">
                                    First name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="user"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="text"
                                    className="form-control pl-5"
                                    name="firstname"
                                    id="firstname"
                                    placeholder="First Name"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter first name",
                                      },
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup className="position-relative">
                                  <Label for="lastname">
                                    Last name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="user-check"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="text"
                                    className="form-control pl-5"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Last Name"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter first name",
                                      },
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="12">
                                <FormGroup className="position-relative">
                                  <Label for="email">
                                    Your Email{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="mail"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="text"
                                    className="form-control pl-5"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter your email",
                                      },
                                      pattern: {
                                        value:
                                          "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                                        errorMessage: "E-Mail is not valid!",
                                      },
                                    }}
                                  />
                                </FormGroup>
                              </Col>

                              <Col md="12">
                                <FormGroup className="position-relative">
                                  <Label for="password">
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="lock"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="password"
                                    className="form-control pl-5"
                                    name="password"
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter Password",
                                      },
                                      minLength: {
                                        value: 6,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                      maxLength: {
                                        value: 16,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                    }}
                                  />
                                </FormGroup>
                              </Col>

                              <Col md="12">
                                <FormGroup className="position-relative">
                                  <Label for="confirmpassword">
                                    Confirm Password{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="lock"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="password"
                                    className="form-control pl-5"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    placeholder="Confirm Password"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter Password",
                                      },
                                      minLength: {
                                        value: 6,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                      maxLength: {
                                        value: 16,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                    }}
                                  />
                                </FormGroup>
                              </Col>

                              <Col md="12">
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
                                      I Accept{" "}
                                      <Link to="#" className="text-primary">
                                        Terms And Condition
                                      </Link>
                                    </Label>
                                  </div>
                                </FormGroup>
                              </Col>
                              <Col md="12" className="mb-0">
                                <Button color="primary" block>
                                  Register
                                </Button>
                              </Col>
                              <Col lg="12" className="mt-4 text-center">
                                <h6>Or Signup With</h6>
                                <ul className="list-unstyled social-icon mb-0 mt-3">
                                  <li className="list-inline-item">
                                    <Link to="#" className="rounded mr-1">
                                      <i>
                                        <FeatherIcon
                                          icon="facebook"
                                          className="fea icon-sm fea-social"
                                        />
                                      </i>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link to="#" className="rounded mr-1">
                                      <i>
                                        <FeatherIcon
                                          icon="github"
                                          className="fea icon-sm fea-social"
                                        />
                                      </i>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link to="#" className="rounded mr-1">
                                      <i>
                                        <FeatherIcon
                                          icon="twitter"
                                          className="fea icon-sm fea-social"
                                        />
                                      </i>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link to="#" className="rounded">
                                      <i>
                                        <FeatherIcon
                                          icon="gitlab"
                                          className="fea icon-sm fea-social"
                                        />
                                      </i>
                                    </Link>
                                  </li>
                                </ul>
                              </Col>
                              <Col className="mx-auto">
                                <p className="mb-0 mt-3">
                                  <small className="text-dark mr-2">
                                    Already have an account ?
                                  </small>{" "}
                                  <Link
                                    to="/auth-cover-login"
                                    className="text-dark font-weight-bold"
                                  >
                                    Sign Up
                                  </Link>
                                </p>
                              </Col>
                            </Row>
                          </AvForm>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                lg={8}
                className="offset-lg-4 padding-less img order-1"
                style={{ backgroundImage: `url(${user02})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageCoverSignup;
