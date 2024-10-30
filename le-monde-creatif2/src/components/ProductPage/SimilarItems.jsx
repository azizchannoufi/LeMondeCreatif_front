import React from "react";

function SimilarItems() {
  const items = [
    {
      name: "Ollie Earrings",
      price: "$ 30,00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa2431b48e76b4c142211c9a59b19e862fc0c4693a408ef6ed68ccd5574bdb11?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    },
    {
      name: "Hal Earrings",
      price: "$ 25,00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/075e707772432c99a2362648c2aca63dcd733e927afe32e208e053441241455f?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    },
    {
      name: "Kaede Hair Pin Set Of 3",
      price: "$ 30,00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e42c3bcd612397ac9c671f9a98e7e35974e7c071483994cd7ee8ea4e70f24862?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    },
  ];

  const similarItemsStyle = {
    marginTop: "189px",
  };

  const sectionTitleStyle = {
    color: "#000",
    font: "400 26px/1 DM Sans, sans-serif",
    marginBottom: "47px",
  };

  const itemGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const itemImageStyle = {
    width: "100%",
    borderRadius: "8px",
    aspectRatio: "1",
    objectFit: "cover",
  };

  const itemNameStyle = {
    color: "#000",
    font: "400 20px/1.3 DM Sans, sans-serif",
    marginTop: "24px",
  };

  const itemPriceStyle = {
    color: "#a18a68",
    font: "500 20px/1.3 DM Sans, sans-serif",
    textTransform: "capitalize",
    marginTop: "16px",
  };

  const itemGridMobileStyle = {
    ...itemGridStyle,
    gridTemplateColumns: "1fr",
  };

  const isMobile = window.innerWidth <= 991;

  return (
    <section style={similarItemsStyle}>
      <h2 style={sectionTitleStyle}>Similar Items</h2>
      <div style={isMobile ? itemGridMobileStyle : itemGridStyle}>
        {items.map((item, index) => (
          <article key={index} style={itemStyle}>
            <img src={item.image} alt={item.name} style={itemImageStyle} />
            <h3 style={itemNameStyle}>{item.name}</h3>
            <p style={itemPriceStyle}>{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SimilarItems;
