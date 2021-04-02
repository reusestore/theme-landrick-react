import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Progress,
  Row,
  Col,
  Alert,
  Form,
  Input,
  FormGroup,
  Button,
  Label,
  CardBody,
  Card,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

import profile from "../../../assets/images/client/05.jpg";
import imgbg from "../../../assets/images/account/bg.png";
//Import Logo
import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";

class PageProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Account", link: "/page-profile" },
        { id: 4, name: "Setting" },
      ],
      widgets: [
        {
          id: 1,
          icon: "uil uil-dashboard",
          className: "accounts rounded d-block shadow text-center py-3",
          title: "Profile",
          link: "/page-profile",
        },
        {
          id: 2,
          icon: "uil uil-users-alt",
          className: "accounts rounded d-block shadow text-center py-3",
          title: "Members",
          link: "/page-members",
        },
        {
          id: 3,
          icon: "uil uil-file",
          className: "accounts rounded d-block shadow text-center py-3",
          title: "Works",
          link: "/page-works",
        },
        {
          id: 4,
          icon: "uil uil-envelope-star",
          className: "accounts rounded d-block shadow text-center py-3",
          title: "Messages",
          link: "/page-messages",
        },
        {
          id: 5,
          icon: "uil uil-transaction",
          className: "accounts rounded d-block shadow text-center py-3",
          title: "Payments",
          link: "/page-payments",
        },
        {
          id: 6,
          icon: "uil uil-setting",
          className: "accounts rounded active d-block shadow text-center py-3",
          title: "Settings",
          link: "/page-profile-edit",
        },
        {
          id: 7,
          icon: "uil uil-sign-out-alt",
          className: "accounts rounded d-block shadow text-center py-3",
          title: "Logout",
          link: "/auth-login-three",
        },
      ],
      successMsg: false,
      successMsg2: false,
      successMsg3: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  handleSubmit2(event) {
    event.preventDefault();
    this.setState({ successMsg2: true });
  }

  handleSubmit3(event) {
    event.preventDefault();
    this.setState({ successMsg3: true });
  }

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
    document.getElementById("brandLogo").src = logolight;
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
      document.getElementById("brandLogo").src = logodark;
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
      document.getElementById("brandLogo").src = logolight;
    }
  };

  onChangeCheckbox = (selected, contact) => {
    let modifiedselectedContacts = [...this.state.selectedContacts];
    if (selected) {
      modifiedselectedContacts.push(contact);
    }
    this.setState({
      selectedContacts: modifiedselectedContacts,
    });
  };

  handleNewImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handlePositionChange = (position) => {
    this.setState({ position });
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <section
          className="bg-profile d-table w-100 bg-primary"
          style={{ background: `url(${imgbg}) center center` }}
        >
          <Container>
            <Row>
              <Col lg="12">
                <Card
                  className="public-profile border-0 rounded shadow"
                  style={{ zIndex: "1" }}
                >
                  <CardBody>
                    <Row className="align-items-center">
                      <Col lg="2" md="3" className="text-md-left text-center">
                        <img
                          src={profile}
                          className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                          alt=""
                        />
                      </Col>

                      <Col lg="10" md="9">
                        <Row className="align-items-end">
                          <Col
                            md="7"
                            className="text-md-left text-center mt-4 mt-sm-0"
                          >
                            <h3 className="title mb-0">Krista Joseph</h3>
                            <small className="text-muted h6 mr-2">
                              Web Developer
                            </small>
                            <ul className="list-inline mb-0 mt-3">
                              <li className="list-inline-item mr-2">
                                <Link
                                  to="#"
                                  className="text-muted"
                                  title="Linkedin"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="instagram"
                                      className="fea icon-sm mr-2"
                                    />
                                  </i>
                                  krista_joseph
                                </Link>
                              </li>
                              <li className="list-inline-item ml-1">
                                <Link
                                  to="#"
                                  className="text-muted"
                                  title="Skype"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="linkedin"
                                      className="fea icon-sm mr-2"
                                    />
                                  </i>
                                  krista_joseph
                                </Link>
                              </li>
                            </ul>
                          </Col>
                          <Col md="5" className="text-md-right text-center">
                            <ul className="list-unstyled social-icon social mb-0 mt-4">
                              <li className="list-inline-item mr-1">
                                <Link to="#" className="rounded">
                                  <i>
                                    <FeatherIcon
                                      icon="user-plus"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                              <li className="list-inline-item mr-1">
                                <Link to="#" className="rounded">
                                  <i>
                                    <FeatherIcon
                                      icon="message-circle"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                              <li className="list-inline-item mr-1">
                                <Link to="#" className="rounded">
                                  <i>
                                    <FeatherIcon
                                      icon="bell"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                              <li className="list-inline-item mr-1">
                                <Link
                                  to="/page-profile-edit"
                                  className="rounded"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="settings"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section mt-60">
          <Container className="mt-lg-3">
            <Row className="justify-content-center">
              <Col lg="4" md="6" xs="12" className="d-lg-block d-none">
                <div className="sidebar sticky-bar p-4 rounded shadow">
                  <div className="widget">
                    <h5 className="widget-title">Followers :</h5>
                    <div className="row mt-4">
                      <div className="col-6 text-center">
                        <FeatherIcon
                          icon="user-plus"
                          className="fea icon-ex-md text-primary mb-1"
                        />
                        <h5 className="mb-0">2588</h5>
                        <p className="text-muted mb-0">Followers</p>
                      </div>

                      <div className="col-6 text-center">
                      <FeatherIcon icon="users"
                          className="fea icon-ex-md text-primary mb-1" />
                        <h5 className="mb-0">454</h5>
                        <p className="text-muted mb-0">Following</p>
                      </div>
                    </div>
                  </div>
                  <div className="widget mt-4 pt-2">
                    <h5 className="widget-title">Projects :</h5>
                    <div className="progress-box mt-4">
                      <h6 className="title text-muted">Progress</h6>
                      <Progress
                        value={50}
                        color="primary"
                        barClassName="position-relative"
                      >
                        <div className="progress-value d-block text-muted h6">
                          24 / 48
                        </div>
                      </Progress>
                    </div>
                  </div>

                  <div className="widget">
                    <Row>
                      {this.state.widgets.map((widget, key) => (
                        <Col xs={6} className="mt-4 pt-2" key={key}>
                          <Link to={widget.link} className={widget.className}>
                            <span className="pro-icons h3 text-muted">
                              <i className={widget.icon}></i>
                            </span>
                            <h6 className="title text-dark h6 my-0">
                              {widget.title}
                            </h6>
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  <div className="widget mt-4 pt-2">
                    <h5 className="widget-title">Follow me :</h5>
                    <ul className="list-unstyled social-icon mb-0 mt-4">
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="github"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="youtube"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
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
                </div>
              </Col>
              <Col lg="8" xs="12">
                <Card className="border-0 rounded shadow">
                  <CardBody>
                    <h5 className="text-md-left text-center">
                      Personal Detail :
                    </h5>

                    <div className="mt-3 text-md-left text-center d-sm-flex">
                      <img
                        src={profile}
                        className="avatar float-md-left avatar-medium rounded-circle shadow mr-md-4"
                        alt=""
                      />
                      <div className="mt-md-4 mt-3 mt-sm-0">
                        <Link to="#" className="btn btn-primary mt-2 mr-1">
                          {" "}
                          Change Picture{" "}
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-primary mt-2 ml-2"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                    <Alert
                      color="primary"
                      isOpen={this.state.successMsg}
                      toggle={() => {
                        this.setState({ successMsg: !this.state.successMsg });
                      }}
                    >
                      Data sended successfully.
                    </Alert>
                    <Form onSubmit={this.handleSubmit}>
                      <Row className="mt-4">
                        <Col md="6">
                          <FormGroup>
                            <Label>First Name</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="name"
                              id="first"
                              type="text"
                              className="form-control pl-5"
                              placeholder="First Name :"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="position-relative">
                            <Label>Last Name</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user-check"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="name"
                              id="last"
                              type="text"
                              className="form-control pl-5"
                              placeholder="Last Name :"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="position-relative">
                            <Label>Your Email</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control pl-5"
                              placeholder="Your email :"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="position-relative">
                            <Label>Occupation</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="bookmark"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="name"
                              id="occupation"
                              type="text"
                              className="form-control pl-5"
                              placeholder="Occupation :"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup className="position-relative">
                            <Label>Description</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control pl-5"
                              placeholder="Description :"
                            ></textarea>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="btn btn-primary"
                            value="Save Changes"
                          />
                        </Col>
                      </Row>
                    </Form>

                    <Row>
                      <Col md="6" className="mt-4 pt-2">
                        <h5>Contact Info :</h5>
                        <Alert
                          color="info"
                          isOpen={this.state.successMsg2}
                          toggle={() => {
                            this.setState({
                              successMsg2: !this.state.successMsg2,
                            });
                          }}
                        >
                          Data sended successfully.
                        </Alert>

                        <Form onSubmit={this.handleSubmit2}>
                          <Row className="mt-4">
                            <Col lg="12">
                              <FormGroup className="position-relative">
                                <Label>Phone No. :</Label>
                                <div className="position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="phone"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  name="number"
                                  id="number"
                                  type="number"
                                  className="form-control pl-5"
                                  placeholder="Phone :"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="12">
                              <FormGroup className="position-relative">
                                <Label>Website :</Label>
                                <div className="position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="globe"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  name="url"
                                  id="url"
                                  type="url"
                                  className="form-control pl-5"
                                  placeholder="Url :"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="12" className="mt-2 mb-0">
                              <Button color="primary">Add</Button>
                            </Col>
                          </Row>
                        </Form>
                      </Col>

                      <Col md="6" className="mt-4 pt-2">
                        <h5>Change password :</h5>
                        <Alert
                          color="primary"
                          isOpen={this.state.successMsg3}
                          toggle={() => {
                            this.setState({
                              successMsg3: !this.state.successMsg3,
                            });
                          }}
                        >
                          Data sended successfully.
                        </Alert>
                        <Form onSubmit={this.handleSubmit3}>
                          <Row className="mt-4">
                            <Col lg="12">
                              <FormGroup className="position-relative">
                                <Label>Old password :</Label>
                                <div className="position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="lock"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  type="password"
                                  className="form-control pl-5"
                                  placeholder="Old password"
                                  required
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="12">
                              <FormGroup className="position-relative">
                                <Label>New password :</Label>
                                <div className="position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="lock"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  type="password"
                                  className="form-control pl-5"
                                  placeholder="New password"
                                  required
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="12">
                              <FormGroup className="position-relative">
                                <Label>Re-type New password :</Label>
                                <div className="position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="lock"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  type="password"
                                  className="form-control pl-5"
                                  placeholder="Re-type New password"
                                  required
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="12" className="t-2 mb-0">
                              <Button color="primary">Save password</Button>
                            </Col>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <div className="rounded shadow mt-4">
                  <div className="p-4 border-bottom">
                    <h5 className="mb-0">Account Notifications :</h5>
                  </div>

                  <div className="p-4">
                    <div className="d-flex justify-content-between pb-4">
                      <h6 className="mb-0">When someone mentions me</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch1"
                        ></label>
                      </div>
                    </div>
                    <div className="media d-flex justify-content-between py-4 border-top">
                      <h6 className="mb-0">When someone follows me</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch2"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch2"
                        ></label>
                      </div>
                    </div>
                    <div className="media d-flex justify-content-between py-4 border-top">
                      <h6 className="mb-0">When shares my activity</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch3"
                        ></label>
                      </div>
                    </div>
                    <div className="media d-flex justify-content-between py-4 border-top">
                      <h6 className="mb-0">When someone messages me</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch4"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch4"
                        ></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded shadow mt-4">
                  <div className="p-4 border-bottom">
                    <h5 className="mb-0">Marketing Notifications :</h5>
                  </div>

                  <div className="p-4">
                    <div className="media d-flex justify-content-between pb-4">
                      <h6 className="mb-0">There is a sale or promotion</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch5"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch5"
                        ></label>
                      </div>
                    </div>
                    <div className="media d-flex justify-content-between py-4 border-top">
                      <h6 className="mb-0">Company news</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch6"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch6"
                        ></label>
                      </div>
                    </div>
                    <div className="media d-flex justify-content-between py-4 border-top">
                      <h6 className="mb-0">Weekly jobs</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch7"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch7"
                        ></label>
                      </div>
                    </div>
                    <div className="media d-flex justify-content-between py-4 border-top">
                      <h6 className="mb-0">Unsubscribe News</h6>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch8"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch8"
                        ></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded shadow mt-4">
                  <div className="p-4 border-bottom">
                    <h5 className="mb-0 text-danger">Delete Account :</h5>
                  </div>

                  <div className="p-4">
                    <h6 className="mb-0">
                      Do you want to delete the account? Please press below
                      "Delete" button
                    </h6>
                    <div className="mt-4">
                      <button className="btn btn-danger">Delete Account</button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageProfileEdit;
