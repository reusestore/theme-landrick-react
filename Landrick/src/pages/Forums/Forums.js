import React, { Component } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default class Forums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forums: [
        {
          id: 1,
          title: "Introductions: Landrick",
          posted: "Calvin",
        },
        {
          id: 2,
          title: "Web Designing and Developing",
          posted: "George",
        },
        {
          id: 3,
          title: "Hosting and providers",
          posted: "Parthiv",
        },
        {
          id: 4,
          title: "SEO starter guide",
          posted: "David",
        },
        {
          id: 5,
          title: "Troubleshooting and managing issues",
          posted: "Tiger",
        },
        {
          id: 6,
          title: "Backup and restore",
          posted: "Cristina",
        },
        {
          id: 7,
          title: "Errors and how to fix them",
          posted: "Miriam",
        },
        {
          id: 8,
          title: "Template features & Services",
          posted: "Janalia",
        },
        {
          id: 9,
          title:
            "Landrick includes the ability to create a better of sites by using the multisite feature.",
          posted: "Harry",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="subcribe-form pb-2">
                  <Form className="m-0" style={{ maxWidth: "800px" }}>
                    <FormGroup className="mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-pill shadow"
                        placeholder="Search forums..."
                        required
                      />
                      <Button
                        type="submit"
                        className="btn btn-pills btn-primary"
                      >
                        Search Forums
                      </Button>
                    </FormGroup>
                  </Form>
                </div>

                <div className="table-responsive bg-white shadow rounded mt-4">
                  <table className="table mb-0 table-center">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" style={{ minWidth: "300px" }}>
                          Forums Title
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ maxWidth: "150px" }}
                        >
                          Posted
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ width: "100px" }}
                        >
                          Topics
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ width: "100px" }}
                        >
                          Comments
                        </th>
                      </tr>
                    </thead>
                    {this.state.forums.map((forums, key) => (
                      <tbody key={key}>
                        <tr>
                          <td>
                            <div className="media">
                              <i className="uil uil-comment text-muted h5"></i>
                              <div className="content ml-3">
                                <Link
                                  to="forums-topic.html"
                                  className="forum-title text-primary font-weight-bold"
                                >
                                  {forums.title}
                                </Link>
                                <p className="text-muted small mb-0 mt-2">
                                  Start working with Landrick that can provide
                                  everything you need to generate awareness,
                                  drive traffic, connect.
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center small h6">
                            {forums.posted}
                          </td>
                          <td className="text-center small">3</td>
                          <td className="text-center small">5</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </Col>

              <div className="col-lg-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="card border-0 sidebar sticky-bar rounded shadow bg-light">
                  <div className="card-body">
                    {/* SEARCH */}
                    <div className="widget mb-4 pb-2">
                      <div id="search2" className="widget-search mb-0">
                        <form
                          role="search"
                          method="get"
                          id="searchform"
                          className="searchform"
                        >
                          <div>
                            <input
                              type="text"
                              className="border rounded"
                              name="s"
                              id="s"
                              placeholder="Search forum..."
                            />
                            <input
                              type="submit"
                              id="searchsubmit"
                              value="Search"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* SEARCH */}

                    {/* Categories --> */}
                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Login</h5>
                      <form className="login-form mt-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label>
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                                <input
                                  type="email"
                                  className="form-control pl-5"
                                  placeholder="Email"
                                  name="email"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group">
                              <label>
                                Password <span className="text-danger">*</span>
                              </label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="lock"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                                <input
                                  type="password"
                                  className="form-control pl-5"
                                  placeholder="Password"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="d-flex justify-content-between">
                              <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                              <p className="forgot-pass mb-0">
                                <Link
                                  to="auth-re-password-three.html"
                                  className="text-dark font-weight-bold"
                                >
                                  Forgot password ?
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-0">
                            <button className="btn btn-primary btn-block">
                              Sign in
                            </button>
                          </div>
                          <div className="col-12 text-center">
                            <p className="mb-0 mt-4">
                              <small className="text-dark mr-2">
                                Don't have an account ?
                              </small>{" "}
                              <Link
                                to="auth-signup-three.html"
                                className="text-dark font-weight-bold"
                              >
                                Sign Up
                              </Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Categories  */}

                    {/* RECENT POST  */}
                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Recent Replies</h5>
                      <ul className="list-unstyled mb-0 mt-4">
                        <li className="text-muted small h6">
                          <i data-feather="user" className="fea icon-sm"></i>
                          <Link to="#" className="text-dark ml-2">
                            Ameliya
                          </Link>{" "}
                          on{" "}
                          <Link to="#" className="text-primary">
                            to policy
                          </Link>
                        </li>
                        <li className="text-muted small h6">
                          <i data-feather="user" className="fea icon-sm"></i>
                          <Link to="#" className="text-dark ml-2">
                            Crista
                          </Link>{" "}
                          on{" "}
                          <Link to="#" className="text-primary">
                            to Template hosts
                          </Link>
                        </li>
                        <li className="text-muted small h6">
                          <i data-feather="user" className="fea icon-sm"></i>
                          <Link to="#" className="text-dark ml-2">
                            John
                          </Link>{" "}
                          on{" "}
                          <Link to="#" className="text-primary">
                            to error messages
                          </Link>
                        </li>
                        <li className="text-muted small h6">
                          <i data-feather="user" className="fea icon-sm"></i>
                          <Link to="#" className="text-dark ml-2">
                            Jafrin
                          </Link>{" "}
                          on{" "}
                          <Link to="#" className="text-primary">
                            to administration
                          </Link>
                        </li>
                        <li className="text-muted small h6 mb-0">
                          <i data-feather="user" className="fea icon-sm"></i>
                          <Link to="#" className="text-dark ml-2">
                            Harry
                          </Link>{" "}
                          on{" "}
                          <Link to="#" className="text-primary">
                            to template options
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* RECENT POST  */}

                    {/* SOCIAL  */}
                    <div className="widget">
                      <h5 className="widget-title">Follow us</h5>
                      <ul className="list-unstyled social-icon social mb-0 mt-4">
                        <li className="list-inline-item ml-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="facebook"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item ml-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="instagram"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item ml-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="twitter"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item ml-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item ml-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="github"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item ml-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="youtube"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item ml-1">
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
                    </div>
                    {/* SOCIAL */}
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
