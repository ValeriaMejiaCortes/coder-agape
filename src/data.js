import React from "react";

const category = [
  {
    id: 1,
    name: "Tablas",
  },
  {
    id: 2,
    name: "Sangrias",
  },
  {
    id: 3,
    name: "Kids",
  },
  {
    id: 4,
    name: "Picnics",
  },
];

const data = [
  {
    id: 1,
    name: "Tabla mediana",
    price: 200,
    picture_url: "../assets/imgs/mediana.jpeg",
    description: `Deliciosa combinación de frutas con cinco diferentes tipos de quesos
    , acompañado de una gran variedad carnes frias, te permitiran disfrutar el día de una 
    manera elegante`,
    category_id: 1,
    stock: 16,
    amount: 0,
  },
  {
    id: 2,
    name: "Tabla con adicional",
    price: 400,
    picture_url: "../assets/imgs/medianaSM.jpeg",
    description: `variedad de quesos, carnes frias y una deliciosa combinación de frutas, endulzaran tu dia
    acompañado de una sangria tamaño personal`,
    category_id: 1,
    stock: 10,
    amount: 0,
  },
  {
    id: 3,
    name: "Sangría",
    price: 150,
    picture_url: "../assets/imgs/sangria.jpeg",
    description:
      "Esta deliciosa combinación te transportara a lo mejor de España",
    category_id: 2,
    stock: 8,
    amount: 0,
  },
  {
    id: 4,
    name: "Kids",
    price: 200,
    picture_url: "../assets/imgs/kids.jpeg",
    description:
      "Dulces, caramelos y muchooo chocolate haran que tus hijos vivan una real aventura",
    category_id: 3,
    stock: 11,
    amount: 0,
  },
  {
    id: 5,
    name: "Picnics",
    price: 700,
    picture_url: "../assets/imgs/picnic.jpeg",
    description: `Vive y disfruta de una experiencia innolvidable de la cual queras repetir una
    y otra vez con esa persona especial`,
    category_id: 4,
    stock: 2,
    amount: 0,
  },
];

export default data;
