import React from "react";

function ProductFilter() {
  const filterStyle = {
    width: "25%",
    minWidth: "200px",
  };

  const searchFormStyle = {
    display: "flex",
    marginBottom: "10px",
  };

  const searchInputStyle = {
    flexGrow: 1,
    padding: "10px",
    border: "1px solid #d8d8d8",
    borderRadius: "4px 0 0 4px",
    fontSize: "14px",
    lineHeight: "2",
    fontFamily: '"DM Sans", sans-serif',
  };

  const searchButtonStyle = {
    background: "none",
    border: "1px solid #d8d8d8",
    borderLeft: "none",
    borderRadius: "0 4px 4px 0",
    padding: "0 10px",
    cursor: "pointer",
  };

  const searchIconStyle = {
    width: "19px",
    height: "19px",
  };

  const filterGroupStyle = {
    marginBottom: "20px",
  };

  const filterButtonStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "16px 12px",
    marginBottom: "16px",
    border: "1px solid #d8d8d8",
    borderRadius: "4px",
    background: "none",
    fontSize: "14px",
    lineHeight: "2",
    fontFamily: '"DM Sans", sans-serif',
    color: "#000",
    cursor: "pointer",
  };

  const expandIconStyle = {
    width: "14px",
    height: "8px",
  };

  const priceRangeStyle = {
    marginBottom: "20px",
  };

  const rangeSliderStyle = {
    position: "relative",
    height: "2px",
    background: "#d8d8d8",
    margin: "20px 0",
  };

  const rangeTrackStyle = {
    position: "absolute",
    height: "100%",
    background: "#000",
  };

  const rangeHandleStyle = {
    position: "absolute",
    width: "10px",
    height: "10px",
    background: "#000",
    borderRadius: "50%",
    top: "-4px",
  };

  const priceLabelStyle = {
    fontSize: "14px",
    lineHeight: "2",
    fontFamily: '"DM Sans", sans-serif',
    color: "#707070",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "4px",
    background: "#a18a68",
    color: "#fff",
    fontSize: "16px",
    lineHeight: "2",
    fontFamily: '"DM Sans", sans-serif',
    cursor: "pointer",
  };

  const filterIconStyle = {
    width: "20px",
    height: "20px",
    marginLeft: "10px",
  };

  return (
    <aside style={filterStyle}>
      <form style={searchFormStyle}>
        <label htmlFor="searchInput" className="visually-hidden">
          
        </label>
        <input
          type="search"
          id="searchInput"
          placeholder="Search..."
          style={searchInputStyle}
        />
        <button type="submit" style={searchButtonStyle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04829733843a7e564facb5f55862b68bd68f5cf0d596c8702951db80185d8211?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
            alt="Search"
            style={searchIconStyle}
          />
        </button>
      </form>
      <div style={filterGroupStyle}>
        <button style={filterButtonStyle}>
          Shop By
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94ec9341bd16f6adc455126d5a4c0f9b93274f8dd2680479859e3afea8c2f6a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
            alt="Expand"
            style={expandIconStyle}
          />
        </button>
        <button style={filterButtonStyle}>
          Sort By
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94ec9341bd16f6adc455126d5a4c0f9b93274f8dd2680479859e3afea8c2f6a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
            alt="Expand"
            style={expandIconStyle}
          />
        </button>
      </div>
      <div style={priceRangeStyle}>
        <div style={rangeSliderStyle}>
          <div style={rangeTrackStyle} />
          <div style={rangeHandleStyle} />
          <div style={rangeHandleStyle} />
        </div>
        <p style={priceLabelStyle}>Price: $40 - $180</p>
      </div>
      <button style={buttonStyle}>On sale</button>
      <button style={buttonStyle}>
        Filter
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9396a6742dce943bd5ef7c4b474322b8dc1bbfb56b4b8b0e7d091f0acfc1af50?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
          alt="Apply filter"
          style={filterIconStyle}
        />
      </button>
    </aside>
  );
}

export default ProductFilter;
