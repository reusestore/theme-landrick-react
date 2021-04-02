import React, { Component } from "react";
import { Col, Media } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class KeyFeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.keyfeatures.map((feature, key) => (
          <Col lg="4" md="6" key={key} className="mt-4 pt-2" name="keyfeature">
            <Media className="key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle mr-3">
                <i>
                  <FeatherIcon
                    icon={feature.icon}
                    className="fea icon-ex-md text-primary"
                  />
                </i>
              </div>
              <Media body>
                <h4 className="title mb-0">{feature.title}</h4>
              </Media>
            </Media>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default KeyFeatureBox;
