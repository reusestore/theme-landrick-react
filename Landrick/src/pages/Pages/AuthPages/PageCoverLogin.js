// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user01 from "../../../assets/images/user/01.jpg";

class PageCoverLogin extends Component {
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
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col xs={12}>
                      <Card
                        className="login-page border-0"
                        style={{ zIndex: "1" }}
                      >
                        <CardBody className="p-0">
                          <h4 className="card-title text-center">Login</h4>
                          <AvForm className="llogin-form mt-4">
                            <Row>
                              <Col lg={12}>
                                <FormGroup className="position-relative">
                                  <Label htmlFor="email">
                                    Your Email{" "}
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

                              <Col lg={12}>
                                <FormGroup className="position-relative">
                                  <Label htmlFor="password">
                                    Password
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
                                    type="text"
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

                              <Col lg="12">
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
                                        htmlFor="customCheck1"
                                      >
                                        Remember me
                                      </Label>
                                    </div>
                                  </FormGroup>
                                  <p className="float-right forgot-pass">
                                    <Link
                                      to="auth-cover-re-password"
                                      className="text-dark font-weight-bold"
                                    >
                                      Forgot password ?
                                    </Link>
                                  </p>
                                </div>
                              </Col>

                              <Col lg={12} className="mb-0">
                                <Button color="primary" block>
                                  Sign in
                                </Button>
                              </Col>

                              <Col lg={12} className="mt-4 text-center">
                                <h6>Or Login With</h6>
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

                              <Col className="text-center">
                                <p className="mb-0 mt-3">
                                  <small className="text-dark mr-2">
                                    Don't have an account ?
                                  </small>{" "}
                                  <Link
                                    to="page-cover-signup"
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
                lg={{ size: 8, offset: 4 }}
                xs={{ order: 1 }}
                className="padding-less img "
                style={{ backgroundImage: `url(${user01})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageCoverLogin;
