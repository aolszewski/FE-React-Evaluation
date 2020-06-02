import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { shape, string } from 'prop-types';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import logo from '../../images/noinc-logo.png';

class Header extends Component {
  static propTypes = {
    userName: string.isRequired,
    location: shape({
      pathname: string,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.isActiveLink = this.isActiveLink.bind(this);
  }

  isActiveLink(page) {
    const { location: { pathname } } = this.props;

    let isActive = false;

    if (page === 'home') {
      isActive = pathname.startsWith('/home') || pathname.startsWith('/interest');
    } else if (page === 'skill') {
      isActive = pathname.startsWith('/skill');
    }

    return isActive;
  }

  render() {
    const { userName } = this.props;

    return (
      <Navbar color="dark" dark expand="md" className="justify-content-end">
        <Nav className="mr-auto nav-image-left">
          <NavItem className="pull-left nav-logo-container">
            <img src={logo} alt="logo" className="nav-logo"/>
          </NavItem>
        </Nav>
        <Nav navbar>
          <NavItem>
            <NavLink>
              <span className="nav-separator">
                |
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/home">
              <span className={classnames('ni-nav-link', { 'nav-active': this.isActiveLink('home') })}>
                Home
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <span className="nav-separator">
                |
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/skills">
              <span className={classnames('ni-nav-link', { 'nav-active': this.isActiveLink('skill') })}>
                Skills
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <span className="nav-separator">
                |
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/home">
              <span className="ni-nav-link">
                Navigation 3
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <span className="nav-separator">
                |
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/home">
              <span className="ni-nav-link user-link">
                <FontAwesomeIcon icon={faUser} />
                &nbsp;&nbsp;&nbsp;
                { userName }
              </span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user.userName,
});

export default connect(mapStateToProps)(withRouter(Header));
