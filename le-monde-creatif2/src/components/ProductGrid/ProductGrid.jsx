import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Lira Earrings",
    price: "$ 20,00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/61c37cdcd99cb7f0ea21229850c3c4991707e9f5889ce43d0b04b02f0c7f26c7?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: "$ 25,00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9ef47d61cbda7db03a19c1d9a08bc4a4857394e4ce83a6ee90742f2a66ecce7a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: "$ 30,00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e42c3bcd612397ac9c671f9a98e7e35974e7c071483994cd7ee8ea4e70f24862?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: "$ 30,00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e6040be51e8d22f0ddff7eb1d301e9f6190352baddf9b6629f863cd493b246b9?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: "$ 19,00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/075e707772432c99a2362648c2aca63dcd733e927afe32e208e053441241455f?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: "$ 29,00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4fb2df34d37b0aeb82e0c61bd9d5e9700d90e4d59603b3a95ac4ed91321274b0?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
];

const ProductGrid = ({setChangeVue}) => {
  const productSectionStyle = {
    width: '100%',
    maxWidth: '1248px',
    marginTop: '64px',
  };

  const sectionHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '39px',
    fontFamily: '"DM Sans", sans-serif',
  };

  const sectionTitleStyle = {
    color: '#000',
    fontSize: '33px',
    fontWeight: '500',
    lineHeight: '1.3',
  };

  const viewAllStyle = {
    color: '#a18a68',
    fontSize: '20px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const isMobile = window.matchMedia('(max-width: 991px)').matches;

  if (isMobile) {
    productSectionStyle.maxWidth = '100%';
    productSectionStyle.marginTop = '40px';
    productGridStyle.gridTemplateColumns = '1fr';
  }

  return (
    <section style={productSectionStyle}>
      <div style={sectionHeaderStyle}>
        <h2 style={sectionTitleStyle}>Shop The Latest</h2>
        <a href="#view-all" onClick={()=>{setChangeVue("shop")}} style={viewAllStyle}>
          View All
        </a>
      </div>
      <div style={productGridStyle}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
