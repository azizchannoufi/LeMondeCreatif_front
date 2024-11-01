import React from 'react';

const Hero = () => {
  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    position: 'relative',
    minHeight: '646px',
    marginTop: '22px',
    width: '100%',
    maxWidth: '1248px',
    alignItems: 'flex-start',
    fontFamily: '"DM Sans", sans-serif',
    color: '#fff',
    padding: '226px 80px 24px 39px',
  };

  const heroImageStyle = {
    position: 'absolute',
    inset: '0',
    height: '100%',
    width: '91%',
    objectFit: 'cover',
    objectPosition: 'center',
    cursor: "pointer"
    
  };

  const heroContentStyle = {
    position: 'relative',
    zIndex: '1',
  };

  const heroTitleStyle = {
    fontSize: '33px',
    fontWeight: '500',
    lineHeight: '1.3',
    marginBottom: '16px',
  };

  const heroPriceStyle = {
    fontSize: '26px',
    lineHeight: '1',
    marginBottom: '48px',
  };

  const heroButtonStyle = {
    borderRadius: '6px',
    border: '2px solid #fff',
    background: 'transparent',
    fontSize: '20px',
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    padding: '14px 31px',
    cursor: 'pointer',
  };

  const decorativeElementStyle = {
    width: '107px',
    marginTop: '185px',
    alignSelf: 'center',
  };

  // Ajout de styles pour les media queries
  const isMobile = window.matchMedia('(max-width: 991px)').matches;

  if (isMobile) {
    heroStyle.padding = '100px 20px 0';
    heroButtonStyle.marginTop = '40px';
    heroButtonStyle.padding = '14px 20px';
    decorativeElementStyle.marginTop = '40px';
  }

  return (
    <section style={heroStyle}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/087a5c849502cebad4e6c178079905fd650d64c372fb614456f0f048aaf4eb07?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
        alt="Gold big hoops earrings"
        style={heroImageStyle}
      />
      <div style={heroContentStyle}>
        <h2 style={heroTitleStyle}>Gold big hoops</h2>
        <p style={heroPriceStyle}>$ 68,00</p>
        <button style={heroButtonStyle}>VIEW PRODUCT</button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3fe4ee810c4acb470d1a2c7d0652e3f6cfa6c2cdbf2a74bf2f0b18e7557b16?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
        alt="Decorative element"
        style={decorativeElementStyle}
      />
    </section>
  );
};

export default Hero;
