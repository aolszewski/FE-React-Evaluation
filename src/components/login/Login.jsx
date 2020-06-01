import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { loginSuccess } from '../../actions/user';
import { passwordRegex } from '../../constants';
import logo from '../../images/noinc-logo.png';

class LoginPage extends Component {
  static propTypes = {
    history: shape({
      push: func.isRequired,
    }),
    dispatchLoginSuccess: func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { loginFailed: false };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { history, dispatchLoginSuccess } = this.props;

    e.preventDefault();


    console.log('password: ', this.password.value);
    console.log('passwordTest: ', this.password.value.match(passwordRegex));

    // we don't want to give the end user any indication of why their login
    // failed so both cases are treated the same, just display the login
    // failed alert
    if (!this.username.value || !this.password.value.match(passwordRegex)) {
      this.setState({ loginFailed: true })
    } else {
      dispatchLoginSuccess(this.username.value);
      history.push('/home');
    }
  }

  render() {
    const { loginFailed } = this.state;

    return (
      <div className="container login-page">
        <div className="login-page-child-center-div">
          <div className="row">
            <div className="col-md-6 login-image-container">
              <div className="login-image-div">
                <img
                  src={logo}
                  alt="Login Image"
                  className="login-image"
                />
              </div>
            </div>
            <div className="col-md-6 login-form">
              <div className="login-container">
                <p>
                  <span className="login-header">Login to Our Magic Portal</span>
                </p>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Input
                      innerRef={ username => this.username = username }
                      type="text"
                      name="userName"
                      placeholder="Username"
                      className="login-input"
                    />
                    <Input
                      innerRef={ password => this.password = password }
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="login-input"
                    />
                    <Button className="login-button">Login</Button>
                    <Alert
                      color="danger"
                      className={classnames('password-alert', { hidden: !loginFailed} )}
                    >
                      The username or password is incorrect.
                    </Alert>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const matchDispatchToProps = dispatch => ({
  dispatchLoginSuccess(userName) {
    dispatch(loginSuccess(userName));
  }
});

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(LoginPage));
