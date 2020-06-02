import React, { PureComponent } from 'react'
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Header from '../header/Header';
import SkillCard from './SkillCard';
import { CHUNK_SIZE } from '../../constants';
import { chunkArray } from '../../helpers';

class SkillList extends PureComponent {
  static propTypes = {
    skills: array.isRequired,
  };

  constructor(props) {
    super(props);

    this.chunkArray = this.chunkArray.bind(this);
  }

  chunkArray() {
    let { skills } = this.props;
    return chunkArray(skills, CHUNK_SIZE);
  }

  render() {
    const chunkedArray = this.chunkArray();

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          { chunkedArray.map((row) => (
              <div className="row" key={uuid()}>
                { row.map((el) => (
                  <div className="cold-md-4 skill-list-card" key={uuid()}>
                    <SkillCard skill={el} index={el.index} />
                  </div>
                ))}
              </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(SkillList);
