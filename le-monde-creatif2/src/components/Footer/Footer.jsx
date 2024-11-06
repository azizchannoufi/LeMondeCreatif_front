import React from 'react';

const Footer = () => {
  // Styles inline pour le composant Footer
  const footerStyle = {
    width: '100%',
    maxWidth: '1248px',
    marginTop: '252px',
    fontFamily: '"DM Sans", sans-serif',
  };

  const separatorStyle = {
    height: '1px',
    backgroundColor: '#d8d8d8',
    margin: '20px 0',
  };

  const newsletterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '37px 0',
  };

  const newsletterLabelStyle = {
    color: '#707070',
    fontSize: '16px',
    lineHeight: '2',
  };

  const inputWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const emailInputStyle = {
    border: 'none',
    borderBottom: '1px solid #000',
    padding: '5px 0',
    marginRight: '10px',
  };

  const submitButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const submitIconStyle = {
    width: '25px',
  };

  const footerNavStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',
    marginBottom: '20px',
  };

  const footerLinkStyle = {
    color: '#707070',
    fontSize: '16px',
    lineHeight: '2',
    textDecoration: 'none',
  };

  const footerBottomStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '50px',
  };

  const footerLogoStyle = {
    width: '156px',
  };

  const copyrightStyle = {
    color: '#707070',
    fontSize: '16px',
    lineHeight: '2',
  };

  // Styles pour les media queries
  const isMobile = window.matchMedia('(max-width: 991px)').matches;

  if (isMobile) {
    footerStyle.marginTop = '40px';
    footerStyle.padding = '0 20px';
    newsletterStyle.flexDirection = 'column';
    newsletterStyle.alignItems = 'flex-start';
    inputWrapperStyle.marginTop = '10px';
    footerNavStyle.flexDirection = 'column';
    footerBottomStyle.flexDirection = 'column';
    footerBottomStyle.alignItems = 'flex-start';
    copyrightStyle.marginTop = '20px';
  }

  return (
    <footer style={footerStyle}>
      <div style={separatorStyle}></div>
      <form style={newsletterStyle}>
        <label htmlFor="email" style={newsletterLabelStyle}>
          Give an email, get the newsletter.
        </label>
        <div style={inputWrapperStyle}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={emailInputStyle}
            aria-label="Enter your email"
          />
          <button
            type="submit"
            style={submitButtonStyle}
            aria-label="Submit"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a81552353ddc6cf542340113428cce528e4e8dbfd18c5b359edfe4bba9e08f?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
              alt=""
              style={submitIconStyle}
            />
          </button>
        </div>
      </form>
      <nav style={footerNavStyle}>
        <a href="#terms" style={footerLinkStyle}>
          TERMS OF SERVICES
        </a>
        <a href="#shipping" style={footerLinkStyle}>
          SHIPPING AND RETURNS
        </a>
        <a href="#contact" style={footerLinkStyle}>
          CONTACT
        </a>
      </nav>
      <div style={separatorStyle}></div>
      <div style={footerBottomStyle}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af02bd9a2ee1530da7c8449ac2778fe498b1beba541832fdb1cd40c233aa31b2?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
          alt="Shelly Logo"
          style={footerLogoStyle}
        />
        <p style={copyrightStyle}>
          © 2024 By Aziz Channoufi. Terms of use and privacy policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
