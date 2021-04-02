import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import fea1 from "../../assets/images/shop/fea1.jpg";
import fea2 from "../../assets/images/shop/fea2.jpg";
import fea3 from "../../assets/images/shop/fea3.jpg";

class Collection extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-5 pt-2">
          <Row>
            <Col md={4}>
              <div
                className="py-5 rounded shadow"
                style={{ background: `url(${fea1}) top center` }}
              >
                <div className="p-4">
                  <h3>
                    Summer <br /> Collection
                  </h3>
                  <Link to="#" className="btn btn-sm btn-soft-primary mt-2">
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={4} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div
                className="py-5 rounded shadow"
                style={{ background: `url(${fea2}) top center` }}
              >
                <div className="p-4">
                  <h3>
                    Summer <br /> Collection
                  </h3>
                  <Link to="#" className="btn btn-sm btn-soft-primary mt-2">
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={4} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div
                className="py-5 rounded shadow"
                style={{ background: `url(${fea3}) top center` }}
              >
                <div className="p-4">
                  <h3>
                    Summer <br /> Collection
                  </h3>
                  <Link to="#" className="btn btn-sm btn-soft-primary mt-2">
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Collection;
