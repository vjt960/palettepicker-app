import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import { loginUser, createUser, getProjects } from "../../_utilities/apiCalls";
import { parseProjects } from "../../_utilities/helpers";
import "./userPopup.scss";

class userPopup extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleExit = () => {
    this.props.history.push("/");
  };

  handlePageChange = destination => this.props.history.push(`/${destination}`);

  handleLogin = async e => {
    console.log("logging in...");
    const { username, password } = this.state;
    e.preventDefault();
    try {
      const user = await loginUser(username, password);
      const projectsData = await getProjects(user.id).catch(() => []);
      const projects = parseProjects(projectsData);
      this.props.updateCurrentUser(user, projects);
      this.setState({ error: "" });
      this.handleExit();
    } catch (error) {
      this.setState({ error: error.message });
      this.clearInputs();
    }
  };

  handleRegister = async e => {
    console.log("Registering...");
    const { username, password } = this.state;
    e.preventDefault();
    try {
      const newUser = await createUser(username, password);
      this.props.updateCurrentUser(newUser);
      this.setState({ error: "" });
      this.handleExit();
    } catch (error) {
      this.setState({ error: error.message });
      this.clearInputs();
    }
  };

  handleChanges = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  clearInputs = () => {
    this.setState({ username: "", password: "" });
  };

  render() {
    const inputs = (
      <Fragment>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={e => this.handleChanges(e)}
        />
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={e => this.handleChanges(e)}
        />
      </Fragment>
    );
    const loginFormat = (
      <Fragment>
        <h3 className="editor-title">To continue, log in to PalettePicker.</h3>
        <form className="user-form" onSubmit={e => this.handleLogin(e)}>
          {inputs}
          <div className="form-btns">
            <button className="form-btn">Login</button>
            <button
              className="form-btn"
              onClick={() => this.handlePageChange("register")}
            >
              new user?
            </button>
          </div>
        </form>
      </Fragment>
    );

    const registerFormat = (
      <Fragment>
        <h3 className="editor-title">Sign up with a username and password.</h3>
        <form className="user-form" onSubmit={e => this.handleRegister(e)}>
          {inputs}
          <div className="form-btns">
            <button className="form-btn">Register</button>
            <button
              className="form-btn"
              onClick={() => this.handlePageChange("login")}
            >
              Already have an account?
            </button>
          </div>
        </form>
      </Fragment>
    );
    return (
      <Fragment>
        <div className="screen" />
        <section className="UserPopup">
          <button className="popup-exit" onClick={this.handleExit}>
            X
          </button>
          <section className="form-section">
            {this.props.location.pathname === "/login"
              ? loginFormat
              : registerFormat}
            <p className="error-message">{this.state.error}</p>
          </section>
        </section>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: (userDetails, projects) =>
    dispatch(actions.updateCurrentUser(userDetails, projects))
});

export default connect(
  null,
  mapDispatchToProps
)(userPopup);
