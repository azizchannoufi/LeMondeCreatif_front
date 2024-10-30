import React from "react";

const TrendSection = () => {
  return (
    <section style={{ marginTop: "54px" }}>
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
        Top trends
      </h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfe756fb5e210eec6732cf3dba7db524f5fede5822de9267b3f71d1d7d38d047?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
        alt="Top trend product showcase"
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
        consequat sed eu felis.
      </p>
      <ul
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          font: "400 16px/27px DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
          listStyleType: "none",
          paddingLeft: "20px",
          marginTop: "16px",
        }}
      >
        <li
          style={{
            "::before": {
              content: '"●"',
              color: "var(--Light-Colors-Black---Light, #000)",
              display: "inline-block",
              width: "1em",
              marginLeft: "-1em",
            },
          }}
        >
          consectetur adipiscing elit. Aliquam placerat
        </li>
        <li
          style={{
            "::before": {
              content: '"●"',
              color: "var(--Light-Colors-Black---Light, #000)",
              display: "inline-block",
              width: "1em",
              marginLeft: "-1em",
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur
        </li>
      </ul>
    </section>
  );
};

export default TrendSection;
