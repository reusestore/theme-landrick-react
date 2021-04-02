import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Fade in effect
import FadeIn from "react-fade-in";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";
import bgImg from "../../../assets/images/2.jpg";
import work1 from "../../../assets/images/work/1.jpg";
import work2 from "../../../assets/images/work/2.jpg";
import work3 from "../../../assets/images/work/3.jpg";
import work4 from "../../../assets/images/work/4.jpg";
import work5 from "../../../assets/images/work/5.jpg";
import work6 from "../../../assets/images/work/6.jpg";
import work7 from "../../../assets/images/work/7.jpg";
import work8 from "../../../assets/images/work/8.jpg";
import work9 from "../../../assets/images/work/9.jpg";

class AllCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Pages", link: "#" },
        { id: 3, name: "Work", link: "#" },
        { id: 4, name: "Classic" },
      ],
      works: [
        {
          image: work1,
          title: "200% Extended Facebook Reach",
          isBusiness: true,
          category: "Business",
        },
        {
          image: work2,
          title: "SEO Success For Insulation",
          isMarketing: true,
          category: "Marketing",
        },
        {
          image: work3,
          title: "Mobile-Friendly Campaigns",
          isFinance: true,
          category: "Finanace",
        },
        {
          image: work4,
          title: "HVAC SEO Campaign",
          isHR: true,
          category: "Human Research",
        },
        {
          image: work5,
          title: "Social Media & Small Business",
          isBusiness: true,
          category: "Business",
        },
        {
          image: work6,
          title: "PPC Success For HVAC Company",
          isMarketing: true,
          category: "Marketing",
        },
        {
          image: work7,
          title: "Ecommerce PPC Case Studys",
          isFinance: true,
          category: "Finanace",
        },
        {
          image: work8,
          title: "Iphone mockup",
          isHR: true,
          category: "Human Research",
        },
        {
          image: work9,
          title: "Iphone mockup",
          isHR: true,
          category: "Human Research",
        },
      ],
      displayCategory: "All",
    };
    this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
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
  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <section
          className="bg-half d-table w-100"
          style={{ background: `url(${bgImg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title text-white title-dark"> All Cases </h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="index">Landrick</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">Pages</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Cases
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section">
          <Container>
            <Row>
              <ul
                className="col container-filter list-unstyled categories-filter text-center mb-0"
                id="filter"
              >
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("All")}
                    className={
                      this.state.displayCategory === "All"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    All
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("Business")}
                    className={
                      this.state.displayCategory === "Branding"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    Business
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("Marketing")}
                    className={
                      this.state.displayCategory === "Designing"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    Marketing
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("Finanace")}
                    className={
                      this.state.displayCategory === "Photography"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    Finanace
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("Human Research")}
                    className={
                      this.state.displayCategory === "Development"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    Human Research
                  </Link>
                </li>
              </ul>
            </Row>

            <Row className="projects-wrapper">
              {this.state.works
                .filter(
                  ({ category }) =>
                    this.state.displayCategory === category ||
                    this.state.displayCategory === "All"
                )
                .map((cases, key) => (
                  <Col
                    key={key}
                    lg={4}
                    md={6}
                    xs={12}
                    className="mt-4 pt-2 business"
                  >
                    <FadeIn delay={100}>
                      <Card className="blog border-0 work-container work-classic shadow rounded-md overflow-hidden">
                        <img
                          src={cases.image}
                          className="img-fluid rounded work-image"
                          alt="Landrick"
                        />
                        <CardBody>
                          <div className="content">
                            {cases.isBusiness && (
                              <Link to="#" className="badge badge-primary">
                                Business
                              </Link>
                            )}
                            {cases.isMarketing && (
                              <Link to="#" className="badge badge-warning">
                                Marketing
                              </Link>
                            )}
                            {cases.isFinance && (
                                <Link to="#" className="badge badge-success">Finance</Link>
                            )}
                            {cases.isHR && (
                                <Link to="#" className="badge badge-info">HR</Link>
                            )}
                            <h5 className="mt-3">
                              <Link
                                to="page-case-detail"
                                className="text-dark title"
                              >
                                {cases.title}
                              </Link>
                            </h5>
                            <p className="text-muted">
                              This is required when, for example, the final text
                              is not yet available.
                            </p>
                            <Link to="#" className="text-primary h6">
                              Read More{" "}
                              <FeatherIcon
                                icon="arrow-right"
                                className="fea icon-sm"
                              />
                            </Link>
                          </div>
                        </CardBody>
                      </Card>
                    </FadeIn>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AllCases;
