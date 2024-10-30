import React from "react";
import SignInForm from "./SignInForm";

function MyAccount({setChangeVue}) {
  // Styles inline pour le composant MyAccount
  const myAccountDesktopStyle = {
    background: "#fff", // Correspond à Light-Colors-White
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: "78px 0",
  };

  const containerStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    color: "#000", // Correspond à Light-Colors-Black
    fontWeight: "400",
    padding: "0 80px",
  };

  const titleStyle = {
    marginTop: "128px",
    fontSize: "33px",
    fontWeight: "500",
    lineHeight: "1.3",
    fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif',
  };

  // Media query pour les petits écrans
  const isMobile = window.matchMedia("(max-width: 991px)").matches;

  if (isMobile) {
    containerStyle.maxWidth = "100%";
    containerStyle.padding = "0 20px";
    titleStyle.marginTop = "40px";
  }

  return (
    <div >
      <div style={containerStyle}>

        <h1 style={titleStyle}>My account</h1>
        <SignInForm setChangeVue={setChangeVue}/>
      </div>
    </div>
  );
}

export default MyAccount;
