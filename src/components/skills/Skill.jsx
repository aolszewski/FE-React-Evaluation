import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { shape, string, array } from 'prop-types';

import { Badge } from 'reactstrap';

import Header from '../header/Header';

class Skill extends PureComponent {
  static propTypes = {
    skills: array.isRequired,
    match: shape({
      params: shape({
        id: string,
      })
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.getSkill = this.getSkill.bind(this);
  }

  getSkill() {
    const {
      skills,
      match: {
        params: {
          id,
        },
      },
    } = this.props;

    const idAsInt = parseInt(id, 10);
    return skills.find(skill => skill.id === idAsInt);
  }

  render() {
    const {
      name,
      type,
      detail,
      color,
      dateLearned
    } = this.getSkill();

    return (
      <React.Fragment>
        <Header />
        <div className="skill-container">
          <div className="row skill-row">
            <div className="col-md-2" />
            <div className="cold-md-10 skill-value">
              <h2>{ name }</h2>
            </div>
          </div>
          <div className="row skill-row">
            <div className="col-md-2" />
            <div className="col-md-10 skill-value">
              <h4>
                <Badge className="skill-badge" color={color}>{ type }</Badge>
              </h4>
            </div>
          </div>
          <div className="row skill-row">
            <div className="col-md-2" />
            <div className="col-md-10 skill-value">
              { dateLearned }
            </div>
          </div>
          <div className="row skill-row">
            <div className="col-md-2" />
            <div className="col-md-10 skill-value">
              { detail }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(Skill);
