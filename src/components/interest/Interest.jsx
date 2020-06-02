import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { shape, string, array } from 'prop-types';
import { Badge } from 'reactstrap';
import Header from '../header/Header';

class Interest extends PureComponent {
  static propTypes = {
    interests: array.isRequired,
    match: shape({
      params: shape({
        id: string,
      })
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.getInterest = this.getInterest.bind(this);
  }

  getInterest() {
    const {
      interests,
      match: {
        params: {
          id
        },
      },
    } = this.props;

    const idAsInt = parseInt(id, 10);
    return interests.find(interest => interest.id === idAsInt);
  }

  render () {
    const {
      name,
      type,
      detail,
      color,
    } = this.getInterest();

    return (
      <React.Fragment>
        <Header />
        <div className="interest-container">
          <div className="row interest-row">
            <div className="col-md-2" />
            <div className="col-md-10">
              <h1>{name}</h1>
            </div>
          </div>
          <div className="row interest-row">
            <div className="col-md-2" />
            <div className="col-md-10">
              <h4>
                <Badge className="interest-badge" color={color}>{type}</Badge>
              </h4>
            </div>
          </div>
          <div className="row interest-row">
            <div className="col-md-2" />
            <div className="col-md-10">
              { detail }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  interests: state.interests,
});

export default connect(mapStateToProps)(Interest);
