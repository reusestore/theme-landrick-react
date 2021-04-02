import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageRePasswordThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="index" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="bg-home bg-circle-gradiant d-flex align-items-center">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={5} md={8}>
                <Card className="login_page shadow rounded border-0">
                  <CardBody>
                    <h4 className="card-title text-center">Recover Account</h4>

                    <AvForm className="login-form mt-4">
                      <Row>
                        <Col lg={12}>
                          <p className="text-muted">
                            Please enter your email address. You will receive a
                            link to create a new password via email.
                          </p>
                          <FormGroup className="position-relative">
                            <Label>
                              Email address{" "}
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
                              name="email"
                              errorMessage="Invalid Email"
                              validate={{
                                required: { value: true },
                                email: {
                                  value: true,
                                  errorMessage: "Invalid Email",
                                },
                              }}
                              type="email"
                              className="form-control pl-5"
                              placeholder="Enter Your Email Address"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg={12}>
                          <Button color="primary" block>
                            Send
                          </Button>
                        </Col>
                        <div className="mx-auto">
                          <p className="mb-0 mt-3">
                            <small className="text-dark mr-2">
                              Remember your password ?
                            </small>{" "}
                            <Link
                              to="auth-login-three"
                              className="text-dark font-weight-bold"
                            >
                              Sign in
                            </Link>
                          </p>
                        </div>
                      </Row>
                    </AvForm>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageRePasswordThree;
