import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Header from '../header/Header';
import InterestList from "../interest/InterestList";

class HomePage extends Component {
  static propTypes = {
    userName: string.isRequired,
  };

  render () {
    const { userName } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12 welcome-username-header">
              <h1>Welcome {userName}</h1>
            </div>
          </div>

          <div className="row home-paragraph">
            <div className="col-md-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
              Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
              sed rhoncus pronin sapien nunc accuan eget.
            </div>
          </div>

          <InterestList />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user.userName,
});

export default connect(mapStateToProps)(HomePage);
