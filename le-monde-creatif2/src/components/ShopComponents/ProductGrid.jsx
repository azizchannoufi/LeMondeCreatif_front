import React from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },{
    id: 1,
    name: "Lira Earrings",
    price: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb170a3656e3be657c501b25cfcc5d53b9405a06a5ab5777d8a9fc87266fb74a?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    discount: 21,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b23c0b801985c70995b422352ef735e221d2689a0bf13791665d4215a48cf1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc579b425ce448559010b70a31287952159dfe1cf2cbbaada5ab9de6da0e10?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0be0fbd7c98297c974f0c7231dc0f68a5181b45f405eb9ea540ba2b02ff70a5d?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 19,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83acd470c2c689586f6cba6ce49598632e5766a75c36e692231a56a84c210f90?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
    soldOut: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 29,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c598471115fc84d54c57a6d610b2c1eaaab24e3b9b4b7f7dd3121c2797874f6?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff",
  },
];

function ProductGrid({setChangeVue , setProductSlected}) {
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
    gap: "20px",
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
        <ProductFilter />
        <div style={productListStyle}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} setChangeVue={setChangeVue} setProductSlected={setProductSlected} />
          ))}
        </div>
      </div>
      <style>{mediaQuery991}</style>
      <style>{mediaQuery767}</style>
    </section>
  );
}

export default ProductGrid;
