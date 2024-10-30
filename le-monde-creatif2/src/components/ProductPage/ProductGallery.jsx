import React from "react";

function ProductGallery(product) {
  const thumbnails = [
    {
      src: product.product.product.image,
      alt: "Product thumbnail 1",
    },
    {
      src: product.product.product.image,
      alt: "Product thumbnail 2",
    },
    {
      src: product.product.product.image,
      alt: "Product thumbnail 3",
    },
    {
      src: product.product.product.image,
      alt: "Product thumbnail 4",
    },
  ];

  const productGalleryStyle = {
    display: "flex",
    gap: "20px",
  };

  const thumbnailListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };

  const thumbnailStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "8px",
    objectFit: "cover",
  };

  const mainImageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const mainImageStyle = {
    width: "100%",
    maxWidth: "540px",
    borderRadius: "8px",
    objectFit: "cover",
  };

  const additionalImageStyle = {
    width: "100%",
    maxWidth: "540px",
    objectFit: "cover",
  };

  return (
    <section style={productGalleryStyle}>
      <div style={thumbnailListStyle}>
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail.src}
            alt={thumbnail.alt}
            style={thumbnailStyle}
          />
        ))}
      </div>
      <div style={mainImageContainerStyle}>
        <img
          src={product.product.product.image}
          alt="Main product image"
          style={mainImageStyle}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4be527b977899f44eb97a363a44bb99e7e1feb880518ff254cf65ae71a4574a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
          alt="Additional product view"
          style={additionalImageStyle}
        />
      </div>
    </section>
  );
}

export default ProductGallery;
