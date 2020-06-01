import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/noinc-logo.png';

class Header extends Component {
  static propTypes = {
    userName: string.isRequired,
  };

  render() {
    const { userName } = this.props;

    return (
      <Navbar color="dark" dark expand="md" className="justify-content-end">
        <Nav className="mr-auto">
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
              <span className="ni-nav-link">
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
            <NavLink tag={Link} to="/home">
              <span className="ni-nav-link">
                Navigation 2
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
                &nbsp;
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

export default connect(mapStateToProps)(Header);
