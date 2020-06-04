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
import NiCard from "../NiCard";

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
    }).isRequired,
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
      interest,
      index,
    } = this.props;

    return (
      <NiCard
        cardDetails={interest}
        index={index}
        drillDown={this.drillDownOnInterest}
      />
    );
  }
}

export default withRouter(InterestCard);
