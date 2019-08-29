import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./NavBar.scss";

export const NavBar = props => {
  const handleClick = (e, destination) => {
    e.preventDefault();
    props.history.push(`/${destination || ""}`);
  };

  const loginFormat =
    Object.keys(props.userDetails).length === 0 ? (
      <Fragment>
        <button data-test="login" onClick={e => handleClick(e, "login")}>
          Login
        </button>
        <button data-test="register" onClick={e => handleClick(e, "register")}>
          Register
        </button>
      </Fragment>
    ) : (
      <button data-test="logout" onClick={e => handleLogout(e)}>
        Logout
      </button>
    );

  const handleLogout = e => {
    e.preventDefault();
    props.logoutUser();
    handleClick(e);
  };

  return (
    <header className="NavBar">
      <h2>PalettePicker</h2>
      <form className="navbar-form">{loginFormat}</form>
    </header>
  );
};

const mapStateToProps = store => ({
  userDetails: store.userDetails
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(actions.logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
