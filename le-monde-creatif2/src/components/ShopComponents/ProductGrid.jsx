import React, { useState, useEffect  } from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import axios from 'axios'
import PORT from "../../PORT";
 

function ProductGrid({ setChangeVue, setProductSlected }) {
  
  //////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////
  const [searchQuery, setSearchQuery] = useState(""); // État de la requête de recherche
  const [allArt,setAllArt]=useState([])





  //////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////
  // Filtrer les produits en fonction de la requête de recherche
  const filteredProducts = allArt.filter((product) =>
    product.titre.toLowerCase().includes(searchQuery.toLowerCase())
  );

const getAllProduct = async()=>{
  try{
    const response= await axios.get(PORT+"articles/")
    if(response.status==200){
      setAllArt(response.data)
    }
  }catch(e){
    console.log('error'+e);
    
  }
}
//////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////
  useEffect(() => {
    getAllProduct()
  },[])

//////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////  //////////////////////////////////////////////////


  const productGridStyle = {
    width: "100%",
    maxWidth: "1248px",
    margin: "96px auto 0",
  };

  const titleStyle = {
    color: "#000",
    fontSize: "33px",
    fontWeight: 500,
    lineHeight: "1.3",
    fontFamily: '"DM Sans", sans-serif',
    marginBottom: "38px",
  };

  const gridContainerStyle = {
    display: "flex",
    gap: "50px",
  };

  const productListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const mediaQuery991 = `@media (max-width: 991px) {
    .productGrid {
      margin-top: 40px;
    }

    .gridContainer {
      flex-direction: column;
    }

    .productList {
      grid-template-columns: repeat(2, 1fr);
    }
  }`;

  const mediaQuery767 = `@media (max-width: 767px) {
    .productList {
      grid-template-columns: 1fr;
    }
  }`;

  return (
    <section style={productGridStyle}>
      <h2 style={titleStyle}>Shop The Latest</h2>
      <div style={gridContainerStyle}>
        {/* Passer la recherche et le setter au composant ProductFilter */}
        <ProductFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div style={productListStyle} className="productList">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              setChangeVue={setChangeVue}
              setProductSlected={setProductSlected}
            />
          ))}
        </div>
      </div>
      <style>{mediaQuery991}</style>
      <style>{mediaQuery767}</style>
    </section>
  );
}

export default ProductGrid;
