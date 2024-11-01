import React, { useState } from "react";

function ProductFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [priceRange, setPriceRange] = useState([40, 180]);

  // Placeholder functions for backend API calls
  const handleSearch = () => {
    // Remplacez ceci par un appel à l'API backend
    console.log("Recherche de produits:", searchQuery);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    console.log("Option de tri sélectionnée:", sortOption);
    // Appel à l'API backend pour trier les produits selon sortOption
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    console.log("Gamme de prix sélectionnée:", newRange);
    // Filtre les produits en fonction de la gamme de prix
  };

  return (
    <aside style={styles.filterContainer}>
      {/* Barre de recherche */}
      <form
        style={styles.searchForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04829733843a7e564facb5f55862b68bd68f5cf0d596c8702951db80185d8211"
            alt="Search"
            style={styles.searchIcon}
          />
        </button>
      </form>

      {/* Boutons de filtre */}
      <div style={styles.filterGroup}>
        <button
          style={styles.filterButton}
          onClick={() => handleSortChange("Shop By")}
        >
          Shop By
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94ec9341bd16f6adc455126d5a4c0f9b93274f8dd2680479859e3afea8c2f6a"
            alt="Expand"
            style={styles.expandIcon}
          />
        </button>
        <button
          style={styles.filterButton}
          onClick={() => handleSortChange("Sort By")}
        >
          Sort By
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94ec9341bd16f6adc455126d5a4c0f9b93274f8dd2680479859e3afea8c2f6a"
            alt="Expand"
            style={styles.expandIcon}
          />
        </button>
      </div>

      {/* Sélecteur de gamme de prix */}
      <div style={styles.priceRange}>
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange[0]}
          onChange={(e) => handlePriceRangeChange([e.target.value, priceRange[1]])}
          style={styles.rangeSlider}
        />
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange[1]}
          onChange={(e) => handlePriceRangeChange([priceRange[0], e.target.value])}
          style={styles.rangeSlider}
        />
        <p style={styles.priceLabel}>Price: ${priceRange[0]} - ${priceRange[1]}</p>
      </div>

      {/* Boutons d'actions */}
      <button style={styles.actionButton}>On sale</button>
      <button style={styles.actionButton}>
        Filter
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9396a6742dce943bd5ef7c4b474322b8dc1bbfb56b4b8b0e7d091f0acfc1af50"
          alt="Apply filter"
          style={styles.filterIcon}
        />
      </button>
    </aside>
  );
}

// Styles CSS en tant qu'objet JavaScript
const styles = {
  filterContainer: {
    width: "25%",
    minWidth: "200px",
    
  },
  searchForm: {
    display: "flex",
    marginBottom: "10px",
  },
  searchInput: {
    flexGrow: 1,
    padding: "10px",
    border: "1px solid #d8d8d8",
    borderRadius: "4px 0 0 4px",
    fontSize: "14px",
    lineHeight: "2",
    fontFamily: '"DM Sans", sans-serif',
  },
  searchButton: {
    background: "none",
    border: "1px solid #d8d8d8",
    borderLeft: "none",
    borderRadius: "0 4px 4px 0",
    padding: "0 10px",
    cursor: "pointer",
  },
  searchIcon: {
    width: "19px",
    height: "19px",
  },
  filterGroup: {
    marginBottom: "20px",
  },
  filterButton: {
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
  },
  expandIcon: {
    width: "14px",
    height: "8px",
  },
  priceRange: {
    marginBottom: "20px",
  },
  rangeSlider: {
    width: "100%",
    margin: "10px 0",
  },
  priceLabel: {
    fontSize: "14px",
    lineHeight: "2",
    fontFamily: '"DM Sans", sans-serif',
    color: "#707070",
  },
  actionButton: {
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
  },
  filterIcon: {
    width: "20px",
    height: "20px",
    marginLeft: "10px",
  },
};

export default ProductFilter;
