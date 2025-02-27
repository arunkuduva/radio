import React from "react";
//import { connect } from "react-redux";
//import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1044496529088-th3o62m7sravej22i8fo35c645nlrtdd.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log("logged in by ");
          this.auth.email = this.auth.currentUser.Ab.w3.U3;
          console.log(this.auth.email);
          this.onAuthChange(this.auth.isSignedIn.get());
          //  this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    this.setState({ isSignedIn: isSignedIn });
    // if (isSignedIn) {
    //   this.props.signIn(this.auth.currentUser.get().getId());
    // } else {
    //   this.props.signOut();
    // }
  };

  onSignInClick = () => {
    this.auth.signIn();
    //this.onAuthChange();
  };

  onSignOutClick = () => {
    this.auth.signOut();
    //this.onAuthChange();
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Signout
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          SignIn with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()} </div>;
  }
}

export default GoogleAuth;
