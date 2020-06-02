import React, { PureComponent } from 'react';

import { Card, CardBody, CardTitle, Badge } from 'reactstrap';

import {
  shape,
  number,
  string,
  bool,
} from 'prop-types';

export default class Interest extends PureComponent {
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
  };

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
          <Card className="interest-card">
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
                  <Badge color={color}>{ type }</Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
