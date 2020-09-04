import React, { useState } from "react";
//import Main from "./Main";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

function GoogleAuth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    this.props.history.push("/");
  };
  return (
    <div className="offset-md-2">
      <GoogleLogin
        clientId="524525632491-r03q4di36n8c9bicpida3tiu5fbquuu2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <br />
      <br />
      <h4>Welcome {name}</h4>
    </div>
  );
}

export default GoogleAuth;
/* import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export default class GoogleAuth extends Component {
  googleCallBack = (response) => {
    console.log("response:", response);

    let user = {
      accessToken: response.accessToken,
      name: response.profileObj.name,
    };

    localStorage.setItem("user", JSON.stringify(user));

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Login with google</h1>

        <GoogleLogin
          clientId="524525632491-r03q4di36n8c9bicpida3tiu5fbquuu2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.googleCallBack}
          onFailure={this.googleCallBack}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
 */
