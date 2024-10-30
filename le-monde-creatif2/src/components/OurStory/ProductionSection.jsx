import React from "react";

const ProductionSection = () => {
  return (
    <section style={{ marginTop: "69px" }}>
      <h2
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          font: "400 26px/1 DM Sans, sans-serif",
          marginLeft: "292px",
          "@media (max-width: 991px)": {
            marginLeft: "10px",
          },
        }}
      >
        Produced with care
      </h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5080b80d0c45b5eab65684394a4b5b8f638957776107911d752bc5ab8bae43d4?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
        alt="Production process showcase"
        style={{
          aspectRatio: "2.23",
          objectFit: "contain",
          width: "670px",
          borderRadius: "8px",
          marginTop: "23px",
          maxWidth: "100%",
        }}
      />
      <p
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          font: "400 16px/27px DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
          marginTop: "48px",
          maxWidth: "670px",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            marginTop: "40px",
          },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </p>
    </section>
  );
};

export default ProductionSection;
