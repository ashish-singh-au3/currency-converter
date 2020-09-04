import React, { Component } from "react";
import { Link } from "react-router-dom";
import Content from "../Main/Content";
import GoogleAuth from "../Main/GoogleAuth";
import Footer from "../Footer/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <center>
          <h1
            style={{
              color: "gray",
              paddingLeft: "100px",
              marginTop: "20px",
            }}
          >
            Login with Google
          </h1>

          <Content />
        </center>
        <Footer />
      </div>
    );
  }
}
