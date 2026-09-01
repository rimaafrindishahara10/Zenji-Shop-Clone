import { image } from "framer-motion/client";

//Dummy datas
const products = [
  {
    id: 1,
    name: "Blue Flame Tee",
    price: 39.99,
    salePrice: 33.99,
    onSale: true,
    image: "/img01.jpg",
  },
  {
    id: 2,
    name: "Bushido Tee",
    price: 39.99,
    salePrice: null,
    onSale: false,
    image: "/img06.jpg",
  },
  {
    id: 3,
    name: "Demon Blood Tee",
    price: 39.99,
    salePrice: 33.99,
    onSale: true,
    image: "/img03.jpg",
  },
  {
    id: 4,
    name: "Domain Expansion Tee",
    price: 39.99,
    salePrice: null,
    onSale: false,
    image: "/img04.jpg",
  },
];
export default products;
