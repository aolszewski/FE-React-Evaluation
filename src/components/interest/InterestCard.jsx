import React, { PureComponent } from 'react';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {
  shape,
  number,
  string,
  bool,
  func,
} from 'prop-types';

class InterestCard extends PureComponent {
  static propTypes = {
    interest: shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      current: bool.isRequired,
      detail: string.isRequired,
      color: string.isRequired,
    }).isRequired,
    index: number.isRequired,
    history: shape({
      push: func.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    this.drillDownOnInterest = this.drillDownOnInterest.bind(this);
  }

  drillDownOnInterest() {
    const {
      history,
      interest: {
        id,
      }
    } = this.props;
    history.push(`/interest/${id}`);
  }

  render() {
    const {
      interest: {
        name,
        type,
        color,
      },
      index,
    } = this.props;

    return (
      <div className="interest-card-container">
        <div className="interest-card-border">
          <Card className="interest-card" onClick={this.drillDownOnInterest}>
            <CardBody className="interest-card-body">
              <CardTitle className="interest-card-title">Interest { index }</CardTitle>
              <div className="row interest-card-row">
                <div className="col-md-4 interest-label">
                  NAME:
                </div>
                <div className="col-md-8">
                  { name }
                </div>
              </div>
              <div className="row interest-card-row">
                <div className="col-md-4 interest-label">
                  TYPE:
                </div>
                <div className="col-md-8">
                  <Badge color={color} className="interest-card-badge">{ type }</Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(InterestCard);
