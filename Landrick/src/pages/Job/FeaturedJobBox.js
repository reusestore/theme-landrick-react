import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Media } from "reactstrap";

class FeaturedJobBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.jobs.map((job, key) => (
          <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
            <Link to={"/page-job-detail/" + job.id} className="text-dark">
              <Media className="key-feature align-items-center p-3 rounded shadow">
                <img src={job.image} className="avatar avatar-ex-sm" alt="" />
                <Media body className="ml-3">
                  <h4 className="title mb-0 text-dark">{job.title}</h4>
                  <p className="text-muted mb-0">
                    {job.city}, {job.country}
                  </p>
                </Media>
              </Media>
            </Link>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default FeaturedJobBox;
