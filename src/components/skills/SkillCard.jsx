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
      skill: {

      },
      index,
    } = this.props;

    return (
      <div className="skill-card-container">
        <div className="skill-card-border">
          <Card className="skill-card" onClick={this.drillDownOnSkill}>
            <CardBody className="skill-card-body">
              <CardTitle className="skill-card-title">Skill { index }</CardTitle>
              <div className="row skill-card-row">
                <div className="col-md-4 skill-label">
                  NAME:
                </div>
                <div className="col-md-8">
                  { name }
                </div>
              </div>
              <div className="row skill-card-row">
                <div className="col-md-4 skill-label">
                  
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}