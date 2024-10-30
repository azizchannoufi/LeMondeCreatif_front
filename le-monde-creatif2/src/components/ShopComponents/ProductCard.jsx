import React from "react";

function ProductCard({ name, price, image, discount, soldOut, setChangeVue , setProductSlected}) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const imageWrapperStyle = {
    position: "relative",
    aspectRatio: "1",
    overflow: "hidden",
    borderRadius: "8px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const badgeStyle = {
    position: "absolute",
    top: "16px",
    left: "16px",
    padding: "2px 8px",
    borderRadius: "4px",
    backgroundColor: "#a18a68",
    color: "#fff",
    fontSize: "12px",
    lineHeight: "2",
    fontFamily: '"DM Sans", sans-serif',
  };

  const nameStyle = {
    marginTop: "24px",
    color: "#000",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "1.3",
    fontFamily: '"DM Sans", sans-serif',
  };

  const priceStyle = {
    marginTop: "16px",
    color: "#a18a68",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "1.3",
    fontFamily: '"DM Sans", sans-serif',
  };
  

  return (
    <article style={cardStyle}>
      
      <div style={imageWrapperStyle} >
        <img src={image} alt={name} style={imageStyle} onClick={()=>{setProductSlected({ 'name':name, "price":price, "image":image, "discount":discount, "soldOut":soldOut})
          setChangeVue("product")
          window.scrollTo({ top: 0, behavior: 'smooth' })}}/>
        {discount && (
          <span style={{ ...badgeStyle, backgroundColor: "#d9534f" }}>
            -{discount}%
          </span>
        )}
        {soldOut && (
          <span style={{ ...badgeStyle, backgroundColor: "#333" }}>
            Sold out
          </span>
        )}
      </div>
      <h3 style={nameStyle}>{name}</h3>
      <p style={priceStyle}>${price.toFixed(2)}</p>
    </article>
  );
}

export default ProductCard;
