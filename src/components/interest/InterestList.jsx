import React, { PureComponent } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import Interest from "./Interest";

class InterestList extends PureComponent {
  static propTypes = {
    interests: array.isRequired,
  };

  render () {
    const { interests } = this.props;

    return (
      <div className="container">
        {
          interests.map((interest, index) => (
            <Interest interest={interest} index={index} />
          ))
        }
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  interests: state.interests,
});

export default connect(mapStateToProps)(InterestList);
