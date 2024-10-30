import React from "react";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import SimilarItems from "./SimilarItems";


function ProductPage(product) {
  const productPageStyle = {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    padding: "56px 0 108px",
  };

  const mainContentStyle = {
    width: "100%",
    maxWidth: "1246px",
    padding: "0 20px",
  };

  const productSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "128px",
  };

  const productSectionMobileStyle = {
    ...productSectionStyle,
    flexDirection: "column",
    marginTop: "40px",
  };

  const isMobile = window.innerWidth <= 991;

  return (
    <div style={productPageStyle}>
      <main style={mainContentStyle}>
        <div style={isMobile ? productSectionMobileStyle : productSectionStyle}>
          <ProductGallery product={product}/>
          <ProductDetails product={product}/>
        </div>
        <SimilarItems />
      </main>
  
    </div>
  );
}

export default ProductPage;
