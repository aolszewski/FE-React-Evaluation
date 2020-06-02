import React, { PureComponent } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import InterestCard from './InterestCard';

import { CHUNK_SIZE } from '../../constants';
import { chunkArray } from '../../helpers';

class InterestList extends PureComponent {
  static propTypes = {
    interests: array.isRequired,
  };

  constructor(props) {
    super(props);

    this.chunkArray = this.chunkArray.bind(this);
  }

  chunkArray() {
    let { interests } = this.props;
    return chunkArray(interests, CHUNK_SIZE);
  }

  render () {
    const chunkedArray = this.chunkArray();

    return (
      <div className="container">
        { chunkedArray.map((row) => (
          <div className="row interest-list-row" key={uuid()}>
            { row.map((el) => (
              <div className="col-md-4 interest-column" key={uuid()}>
                <InterestCard interest={el} index={el.index} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  interests: state.interests,
});

export default connect(mapStateToProps)(InterestList);
