import React from "react";
import ProductGrid from "./ProductGrid";
import ProductPage from "../ProductPage/ProductPage";


function ShopDesktop({setChangeVue , setProductSlected}) {
  const shopDesktopStyle = {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: "56px 80px 108px",
  };

  const bannerImageStyle = {
    width: "100%",
    maxWidth: "1248px",
    borderRadius: "0",
    alignSelf: "center",
    
  };

  const dividerStyle = {
    backgroundColor: "#d8d8d8",
    width: "100%",
    maxWidth: "1248px",
    height: "1px",
    border: "none",
    margin: "251px auto 0",
  };

  const mediaQuery991 = `
    @media (max-width: 991px) {
      .shopDesktop {
        padding: 0 20px 100px;
      }

      .bannerImage {
        max-width: 100%;
      }

      .divider {
        margin-top: 40px;
      }
    }
  `;

  return (
    <main>
      <ProductGrid setChangeVue={setChangeVue} setProductSlected={setProductSlected}/>
    </main>
  );
}

export default ShopDesktop;
