import React, { PureComponent } from 'react';

import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

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
      },
      index,
    } = this.props;

    return (
      <div className="interest-card-container">
        <Card>
          <CardBody>
            <CardTitle className="interest-card-title">Interest { index }</CardTitle>
            <CardText>
              <div className="row">
                <div className="col-md-4 interest-label">
                  NAME:
                </div>
                <div className="col-md-8">
                  { name }
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 interest-label">
                  TYPE:
                </div>
                <div className="col-md-8">
                  { type }
                </div>
              </div>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
