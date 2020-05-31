import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  static propTypes = {
    userName: string.isRequired,
  };

  render() {
    const { userName } = this.props;

    return (
      <Nav>
        <NavItem pullRight>
          <NavLink tag={Link} to="/home" activeClassName="nav-is-active">Home</NavLink>
        </NavItem>
        <NavItem pullRight>
          <NavLink tag={Link} to="/home">Navigation 2</NavLink>
        </NavItem>
        <NavItem pullRight>
          <NavLink tag={Link} to="/home">Navigation 3</NavLink>
        </NavItem>
        <NavItem pullRight>
          { userName }
        </NavItem>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user.userName,
});

export default connect(mapStateToProps)(Header);
