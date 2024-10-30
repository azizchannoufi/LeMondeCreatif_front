import React from "react";

function SignInForm({setChangeVue}) {
  // Styles inline pour le composant SignInForm
  const signInSectionStyle = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
  };

  const tabGroupStyle = {
    display: "flex",
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#efefef", // Correspond à Light-Colors-Light-gray
    marginTop: "64px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "20px",
    lineHeight: "1.3",
  };

  const tabStyle = {
    flex: 1,
    padding: "12px",
    textAlign: "center",
    backgroundColor: "none",
    border: "none",
    cursor: "pointer",
  };

  const activeTabStyle = {
    borderRadius: "8px",
    backgroundColor: "#fff", // Correspond à Light-Colors-White
    boxShadow: "1px 1px 4px 0px rgba(0, 0, 0, 0.1)",
  };

  const formStyle = {
    width: "100%",
    marginTop: "40px",
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    color: "#707070", // Correspond à Light-Colors-Dark-gray
    fontSize: "16px",
    lineHeight: "2",
    fontFamily: "DM Sans, sans-serif",
    marginBottom: "5px",
  };

  const inputStyle = {
    width: "100%",
    border: "none",
    borderBottom: "1px solid #d8d8d8",
    padding: "5px 0",
    fontSize: "16px",
    lineHeight: "2",
    fontFamily: "DM Sans, sans-serif",
  };

  const rememberMeStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "15px",
  };

  const checkboxStyle = {
    width: "16px",
    height: "17px",
  };

  const checkboxLabelStyle = {
    fontSize: "16px",
    lineHeight: "2",
    fontFamily: "DM Sans, sans-serif",
  };

  const submitButtonStyle = {
    width: "100%",
    borderRadius: "4px",
    backgroundColor: "#000", // Correspond à Light-Colors-Black
    color: "#fff", // Correspond à Light-Colors-White
    padding: "16px",
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "DM Sans, sans-serif",
    border: "none",
    cursor: "pointer",
    marginTop: "30px",
  };

  const forgotPasswordStyle = {
    marginTop: "13px",
    fontSize: "16px",
    lineHeight: "2",
    fontFamily: "DM Sans, sans-serif",
    textDecoration: "none",
    color: "inherit",
  };

  // Media query pour les petits écrans
  const isMobile = window.matchMedia("(max-width: 991px)").matches;

  if (isMobile) {
    tabGroupStyle.marginTop = "40px";
    submitButtonStyle.padding = "16px 20px";
  }

  return (
    <section style={signInSectionStyle}>
      <div style={tabGroupStyle}>
        <button style={{ ...tabStyle, ...activeTabStyle }}>Sign in</button>
        <button style={tabStyle}>Register</button>
      </div>
      <form style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input type="email" id="email" style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input type="password" id="password" style={inputStyle} required />
        </div>
        <div style={rememberMeStyle}>
          <input type="checkbox" id="remember" style={checkboxStyle} />
          <label htmlFor="remember" style={checkboxLabelStyle}>
            Remember me
          </label>
        </div>
        <button type="submit" style={submitButtonStyle} onClick={()=>{setChangeVue("myAccountDetails")
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
          SIGN IN
        </button>
      </form>
      <a href="#forgot-password" style={forgotPasswordStyle}>
        Have you forgotten your password?
      </a>
    </section>
  );
}

export default SignInForm;
