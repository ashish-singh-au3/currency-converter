import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",

        paddingLeft: "100px",
      }}
    >
      <p>
        {" "}
        <b> Copyright &copy; By Ashish</b>
      </p>
    </div>
  );
}

export default Footer;
