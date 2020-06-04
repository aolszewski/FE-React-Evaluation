import React, { PureComponent } from 'react';
import {
  shape,
  number,
  string,
  func,
} from 'prop-types';
import { withRouter } from 'react-router-dom';
import NiCard from '../NiCard';

class SkillCard extends PureComponent {
  static propTypes = {
    skill: shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      dateLearned: string.isRequired,
      detail: string.isRequired,
    }).isRequired,
    index: number.isRequired,
    history: shape({
      push: func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.drillDownOnSkill = this.drillDownOnSkill.bind(this);
  }

  drillDownOnSkill() {
    const {
      history,
      skill: {
        id,
      },
    } = this.props;
    history.push(`/skill/${id}`);
  }

  render() {
    const {
      skill,
      index,
    } = this.props;

    return (
      <NiCard
        cardDetails={skill}
        index={index}
        drillDown={this.drillDownOnSkill}
      />
    );
  }
}

export default withRouter(SkillCard);
