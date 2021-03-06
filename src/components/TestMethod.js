import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuth } from "react-firebaseui";

class TestMethod extends Component {
  constructor(props) {
    super(props);
    this.firebaseUiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: result => {
          this.props.authService.signIn(result.user);
        }
      }
    };
  }

  componentDidMount() {
    db.collection("cars")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  render() {
    return (
      <FirebaseAuth
        uiConfig={this.firebaseUiConfig}
        firebaseAuth={this.props.authService.firebaseAuth}
      />
    );
  }
}

export default TestMethod;
