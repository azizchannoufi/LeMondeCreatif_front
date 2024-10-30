import React, { useState } from "react";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Footer from "../Footer/Footer";
import ShopDesktop from "../ShopComponents/ShopDesktop";
import ProductPage from "../ProductPage/ProductPage";
import MyAccount from "../MyAccount/MyAccount";
import OurStory from "../OurStory/OurStory";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutPage from "../ShoppingCart/checkout/CheckoutPage";
import AccountAddresses from "../MyAccount/AccountAddresses/AccountAddresses";
import AccountOrders from "../MyAccount/AccountOrders/AccountOrders";


const App = () => {
  const [changeVue,setChangeVue] = useState("home")
  const [productSelected, setProductSlected] = useState([])
  const headerStyle = {
    display: "flex",
  width: "100%",
  maxWidth: "1246px",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1px 0",
  fontFamily: '"DM Sans", sans-serif',
  position: "fixed", // Ajout de la position fixe
  top: 0, // Fixe le header tout en haut de la page
  backgroundColor: "#fff", // Assure que le header a un fond blanc
  zIndex: 1000, // S'assure que le header reste au-dessus des autres éléments
  width: "100%" // Pour s'assurer que le header prend toute la largeur
  };

  const logoStyle = {
    fontSize: "35px",
    lineHeight: "1",
    fontFamily: '"Allerta Stencil", sans-serif',
    color: "#000",
  };

  const logoAccentStyle = {
    color: "rgba(0, 0, 0, 1)",
  };

  const navigationStyle = {
    display: "flex",
    alignItems: "center",
    gap: "39px",
    fontSize: "16px",
    lineHeight: "2",
  };

  const navListStyle = {
    display: "flex",
    listStyleType: "none",
    padding: "0",
    margin: "0",
  };

  const navLinkStyle = {
    color: "#000",
    textDecoration: "none",
    marginRight: "20px",
  };

  const separatorStyle = {
    width: "1px",
    height: "17px",
    backgroundColor: "#707070",
    margin: "auto 0",
  };

  const iconGroupStyle = {
    display: "flex",
    gap: "20px",
  };

  const iconStyle = {
    width: "21px",
    height: "21px",
    objectFit: "contain",
  };

  const isMobile = window.matchMedia("(max-width: 991px)").matches;

  if (isMobile) {
    headerStyle.padding = "0 20px";
    headerStyle.maxWidth = "100%";
  }
  const appStyle = {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    padding: "82px 80px",
  };

  const mainStyle = {
    width: "100%",
    maxWidth: "1248px",
  };

  const isMobile2 = window.matchMedia("(max-width: 991px)").matches;

  if (isMobile2) {
    appStyle.padding = "0 20px";
  }
  const changeTheVue = () =>{
    if(changeVue=="home") {
      return(
        <div>
      <main style={mainStyle}>
        <Hero />
        <ProductGrid />
      </main>
      
    </div>
      )
    }
    else if(changeVue=="shop"){
      return(
        <div>
          
        <ShopDesktop setChangeVue={setChangeVue} setProductSlected={setProductSlected}/>
      </div>
      )
    }
    else if(changeVue=="product"){
      return(
        <div>
          <ProductPage product={productSelected}/>
        </div>
      )
    }
    else if(changeVue == "myAccount"){
      return(
        <MyAccount setChangeVue={setChangeVue}/>
      )
    }
    else if(changeVue == "ourStory"){
      return(
        <OurStory />
      )
    }
    else if(changeVue == "shoppingCart"){
      return(
        <ShoppingCart setChangeVue={setChangeVue}/>
      )
    }
    else if(changeVue == "checkOut"){
      return(
        <CheckoutPage />
      )
    }
    else if(changeVue == "myAccountDetails"){
      return(
        <AccountAddresses setChangeVue={setChangeVue}/>
      )
    }
    else if(changeVue == "myOrders"){
      
      return(
        
        <AccountOrders />
      )
    }
  }

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
      <h1 style={logoStyle} onClick={()=>{setChangeVue('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}>
        S<span style={logoAccentStyle}>HOPPE</span>
      </h1>
      <nav style={navigationStyle}>
        <ul style={navListStyle}>
          <li onClick={()=>{setChangeVue("shop")
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <a href="#shop" style={navLinkStyle}>
              Shop
            </a>
          </li>
          <li onClick={()=>{setChangeVue("ourStory")
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <a href="#our-story" style={navLinkStyle}>
              Our Story
            </a>
          </li>
        </ul>
        <div style={separatorStyle}></div>
        <div style={iconGroupStyle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f6acc70e2e183a82423c11c9c11fba8164fa2f71eba6a2db1c9a55d8a34925?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
            alt="Search"
            style={iconStyle}
          />
          <img onClick={()=>{setChangeVue("shoppingCart")
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeace3c90f2f65700218ae8004c1c7bd3014d3c4968ddfc5efef44283690d69b?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
            alt="Shopping cart"
            style={iconStyle}
          />
          <img onClick={()=>{setChangeVue("myAccount")
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc5a7e80566a14c7d890294655185b27238bf6edaf54d14c3bc1430d82ca2e93?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
            alt="User account"
            style={iconStyle}
          />
        </div>
        
      </nav>
      
    </header>
    <div
        style={{
          backgroundColor: "#d8d8d8",
          width: "100%",
          height: "1px",
          margin: "22px 0",
          border: "none",
        }}
      />
      {changeTheVue()}
      <Footer />
    </div>
  );
};

export default App;
