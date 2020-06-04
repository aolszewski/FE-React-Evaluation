import React, { PureComponent } from 'react';
import {
  shape,
  number,
  string,
  func,
} from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  Badge,
} from 'reactstrap';

class NiCard extends PureComponent {
  static propTypes = {
    cardDetails: shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      dateLearned: string,
      detail: string.isRequired,
    }).isRequired,
    index: number.isRequired,
    drillDown: func.isRequired,
  };

  render() {
    const {
      cardDetails: {
        name,
        type,
        color,
        dateLearned,
      },
      index,
      drillDown,
    } = this.props;

    return (
      <div className="ni-card-container">
        <div className="ni-card-border">
          <Card className="ni-card" onClick={drillDown}>
            <CardBody className="ni-card-body">
              <CardTitle className="ni-card-title">Skill { index }</CardTitle>
              <div className="row ni-card-row">
                <div className="col-md-4 ni-label">
                  NAME:
                </div>
                <div className="col-md-8">
                  { name }
                </div>
              </div>
              <div className="row ni-card-row">
                <div className="col-md-4 ni-label">
                  TYPE:
                </div>
                <div className="col-md-8">
                  <Badge color={color} className="ni-card-badge">{ type }</Badge>
                </div>
              </div>
              { dateLearned ?
                (
                  <div className="row ni-card-row">
                    <div className="col-md-4 ni-label">
                      DATE LEARNED:
                    </div>
                    <div className="col-md-8">
                      {dateLearned}
                    </div>
                  </div>
                ) : null
              }
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default NiCard;
