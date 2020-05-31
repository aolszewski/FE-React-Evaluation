import React, { Component } from 'react';
import { Form, Input, Button, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { shape, func } from 'prop-types';

class LoginPage extends Component {
  static propTypes = {
    history: shape({
      push: func.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { history } = this.props;

    e.preventDefault();
    console.log('on submit');
    console.log('userName: ', this.username.value);
    console.log('password: ', this.password.value);

    history.push('/home');
  }

  render() {
    return (
      <div className="container login-page">
        <div className="login-page-child-center-div">
          <div className="row">
            <div className="col-md-6 login-image-container">
              <div className="login-image-div">
                <img
                  src="https://d1icd6shlvmxi6.cloudfront.net/gsc/1UCI4I/a5/c4/69/a5c46955c1b64ac8898236ceb4c3ccb2/images/login/u7.png?token=33238497eb65759807fa096cca504da6e7dacfb38fd1c967b563dfa20ef01f27"  alt="Login Image"
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

export default withRouter(LoginPage);