import React from "react";
import StarRating from "./StarRating";

function ProductDetails(product) {
  const productDetailsStyle = {
    maxWidth: "470px",
  };

  const productNameStyle = {
    color: "#000",
    font: "400 26px/1 DM Sans, sans-serif",
  };

  const productPriceStyle = {
    color: "#a18a68",
    textTransform: "capitalize",
    marginTop: "23px",
    font: "500 20px/1.3 DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
  };

  const ratingContainerStyle = {
    display: "flex",
    marginTop: "64px",
    gap: "24px",
    alignItems: "center",
  };

  const reviewCountStyle = {
    color: "#707070",
    font: "400 16px/2 DM Sans, sans-serif",
  };

  const productDescriptionStyle = {
    color: "#707070",
    marginTop: "19px",
    font: "400 16px/27px DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
  };

  const addToCartFormStyle = {
    display: "flex",
    marginTop: "48px",
    gap: "23px",
    flexWrap: "wrap",
  };

  const quantityControlStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    padding: "13px 16px",
    borderRadius: "4px",
    background: "#efefef",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#707070",
    font: "400 16px/2 DM Sans, sans-serif",
  };

  const addToCartButtonStyle = {
    flexGrow: "1",
    padding: "16px 70px",
    borderRadius: "4px",
    border: "1px solid #000",
    background: "#fff",
    color: "#000",
    font: "700 16px DM Sans, sans-serif",
    cursor: "pointer",
  };

  const productMetaStyle = {
    display: "flex",
    marginTop: "80px",
    alignItems: "center",
    gap: "38px",
  };

  const metaIconStyle = {
    width: "20px",
  };

  const metaDividerStyle = {
    backgroundColor: "#d8d8d8",
    width: "1px",
    height: "20px",
  };

  const brandLogoStyle = {
    width: "142px",
  };

  const productInfoStyle = {
    marginTop: "37px",
    font: "400 16px/2 DM Sans, sans-serif",
  };

  const infoItemStyle = {
    display: "flex",
    gap: "20px",
  };

  const dtStyle = {
    color: "#000",
  };

  const ddStyle = {
    color: "#707070",
  };

  return (
    <section style={productDetailsStyle}>
      <h2 style={productNameStyle}>{product.product.product.name}</h2>
      <p style={productPriceStyle}>$ {product.product.product.price}</p>
      <div style={ratingContainerStyle}>
        <StarRating rating={5} />
        <span style={reviewCountStyle}>1 customer review</span>
      </div>
      <p style={productDescriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </p>
      <form style={addToCartFormStyle}>
        <div style={quantityControlStyle}>
          <button type="button" aria-label="Decrease quantity" style={buttonStyle}>
            -
          </button>
          <input type="number" value="1" min="1" aria-label="Quantity" />
          <button type="button" aria-label="Increase quantity" style={buttonStyle}>
            +
          </button>
        </div>
        <button type="submit" style={addToCartButtonStyle}>
          ADD TO CART
        </button>
      </form>
      <div style={productMetaStyle}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ad4e69036431255242c52703d569d3f6e2fdbe33d2af17b1009f9000ef8ae2?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
          alt=""
          style={metaIconStyle}
        />
        <div style={metaDividerStyle}></div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac4af405e4a2074b313180508cb8f5896a0b0bcc85262d84aefc3897397a5425?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
          alt="Product brand"
          style={brandLogoStyle}
        />
      </div>
      <dl style={productInfoStyle}>
        <div style={infoItemStyle}>
          <dt style={dtStyle}>SKU:</dt>
          <dd style={ddStyle}>12</dd>
        </div>
        <div style={infoItemStyle}>
          <dt style={dtStyle}>Categories:</dt>
          <dd style={ddStyle}>Fashion, Style</dd>
        </div>
      </dl>
    </section>
  );
}

export default ProductDetails;
