import React, { useState } from 'react';

const ProductCard = ({ name, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Styles inline pour le composant ProductCard
  const productCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: '"DM Sans", sans-serif',
    position: 'relative',
  };

  const productImageStyle = {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'opacity 0.3s ease',
    opacity: isHovered ? 0.5 : 1, // Grise l'image si isHovered est true
  };

  const productNameStyle = {
    color: '#000',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '1.3',
    marginTop: '24px',
  };

  const productPriceStyle = {
    color: '#a18a68',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '1.3',
    textTransform: 'capitalize',
    marginTop: '16px',
  };

  const iconGroupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: isHovered ? 'flex' : 'none', // Affiche les icônes si isHovered est true
    flexDirection: 'row',
    gap: '10px',
  };

  const iconStyle = {
    width: '24px', // Ajuste la taille des icônes
    height: '24px',
    cursor: 'pointer',
  };

  return (
    <article
      style={productCardStyle}
      onMouseEnter={() => setIsHovered(true)} // Active le survol
      onMouseLeave={() => setIsHovered(false)} // Désactive le survol
    >
      <img src={image} alt={name} style={productImageStyle} />
      <div style={iconGroupStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" style={iconStyle}>
	<path fill="currentColor" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.04 32.04 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.04 32.04 0 0 1-32 32"></path>
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" style={iconStyle}>
	<path fill="currentColor" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></path>
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" style={iconStyle}>
	        <path fill="currentColor" d="M178 44c-21.44 0-39.92 10.19-50 27.07C117.92 54.19 99.44 44 78 44a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58m-50 175.42c-14-8-100-59.35-100-117.42a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 63.31 156.89 52 178 52a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42"></path>
        </svg>
        
      </div>
      <h3 style={productNameStyle}>{name}</h3>
      <p style={productPriceStyle}>{price}</p>
    </article>
  );
};

export default ProductCard;
