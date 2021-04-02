import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody, Col, Form, FormGroup, Input, Label } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class CommonSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <Col lg={4} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
          <Card className="border-0 sidebar sticky-bar rounded shadow bg-light">
            <CardBody>
              <div className="widget mb-4 pb-2">
                <div id="search2" className="widget-search mb-0">
                  <Form
                    role="search"
                    method="get"
                    id="searchform"
                    className="searchform"
                  >
                    <div>
                      <Input
                        type="text"
                        className="border rounded"
                        name="s"
                        id="s"
                        placeholder="Search forum..."
                      />
                      <Input type="submit" id="searchsubmit" value="Search" />
                    </div>
                  </Form>
                </div>
              </div>
              <div className="widget mb-4 pb-2">
                <h5 className="widget-title">Login</h5>
                <form className="login-form mt-4">
                  <div className="row">
                    <Col lg={12}>
                      <FormGroup>
                        <Label>
                          Your Email <span className="text-danger">*</span>
                        </Label>
                        <div className="position-relative">
                          <FeatherIcon
                            icon="user"
                            className="fea icon-sm icons"
                          />
                          <input
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
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="position-relative">
                          <FeatherIcon
                            icon="lock"
                            className="fea icon-sm icons"
                          />
                          <input
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
                            <input
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
                            to="auth-re-password-three"
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
                    <Col sx={12} className="text-center">
                      <p className="mb-0 mt-4">
                        <small className="text-dark mr-2">
                          Don't have an account ?
                        </small>{" "}
                        <a
                          href="auth-signup-three"
                          className="text-dark font-weight-bold"
                        >
                          Sign Up
                        </a>
                      </p>
                    </Col>
                  </div>
                </form>
              </div>

              <div className="widget mb-4 pb-2">
                <h5 className="widget-title">Recent Replies</h5>
                <ul className="list-unstyled mb-0 mt-4">
                  <li className="text-muted small h6">
                    <FeatherIcon icon="user" className="fea icon-sm" />
                    <Link to="#" className="text-dark ml-2">
                      Ameliya
                    </Link>{" "}
                    on{" "}
                    <Link to="#" className="text-primary">
                      Privacy policy
                    </Link>
                  </li>
                  <li className="text-muted small h6">
                    <FeatherIcon icon="user" className="fea icon-sm" />
                    <Link to="#" className="text-dark ml-2">
                      Crista
                    </Link>{" "}
                    on{" "}
                    <Link to="#" className="text-primary">
                      HTML Template hosts
                    </Link>
                  </li>
                  <li className="text-muted small h6">
                    <FeatherIcon icon="user" className="fea icon-sm" />
                    <Link to="#" className="text-dark ml-2">
                      John
                    </Link>{" "}
                    on{" "}
                    <Link to="#" className="text-primary">
                      Specific error messages
                    </Link>
                  </li>
                  <li className="text-muted small h6">
                    <FeatherIcon icon="user" className="fea icon-sm" />
                    <Link to="#" className="text-dark ml-2">
                      Jafrin
                    </Link>{" "}
                    on{" "}
                    <Link to="#" className="text-primary">
                      Network administration
                    </Link>
                  </li>
                  <li className="text-muted small h6 mb-0">
                    <FeatherIcon icon="user" className="fea icon-sm" />
                    <Link to="#" className="text-dark ml-2">
                      Harry
                    </Link>{" "}
                    on{" "}
                    <Link to="#" className="text-primary">
                      Customized template options
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="widget">
                <h5 className="widget-title">Follow us</h5>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item mr-1">
                    <Link to="#" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#" className="rounded">
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#" className="rounded">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#" className="rounded">
                      <FeatherIcon
                        icon="github"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#" className="rounded">
                      <FeatherIcon
                        icon="youtube"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#" className="rounded">
                      <FeatherIcon
                        icon="gitlab"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}
