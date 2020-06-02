import React, { PureComponent } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Interest from './Interest';

import { CHUNK_SIZE } from '../../constants';

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
    interests = interests.map((interest, index) => {
      const modifiedInterest = interest;
      modifiedInterest.index = index + 1;
      return modifiedInterest;
    });
    let chunkedArray = [];

    let index = 0;
    while (index < interests.length) {
      chunkedArray.push(interests.slice(index, CHUNK_SIZE + index));
      index += CHUNK_SIZE;
    }

    return chunkedArray;
  }

  render () {
    const chunkedArray = this.chunkArray();

    return (
      <div className="container">
        { chunkedArray.map((row) => (
          <div className="row interest-row" key={uuid()}>
            { row.map((el) => (
              <div className="col-md-4" key={uuid()}>
                <Interest interest={el} index={el.index} />
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
