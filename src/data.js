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
    price: 800,
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
    price: 1000,
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
    price: 300,
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
    price: 900,
    picture_url: "../assets/imgs/kids.jpeg",
    description:
      "Dulces, caramelos y muchooo chocolate haran que tus hijos vivan una real aventura",
    category_id: 3,
    stock: 11,
    amount: 0,
  },
  {
    id: 5,
    name: "Picnic",
    price: 1500,
    picture_url: "../assets/imgs/picnic.jpeg",
    description: `Vive y disfruta de una experiencia inolvidable de la cual queras repetir una
    y otra vez con esa persona especial`,
    category_id: 4,
    stock: 2,
    amount: 0,
  },
  {
    id: 6,
    name: "Tabla familiar",
    price: 1200,
    picture_url: "../assets/imgs/familiar_table.jpeg",
    description: `Tabla equipada con lo mejor colección de sabores que te haran vivir momentos inolvidables,
    acompañada de una deliciosa sangria familia y tu topic de pimenton favorito`,
    category_id: 1,
    stock: 6,
    amount: 0,
  },
  {
    id: 7,
    name: "Completa",
    price: 1800,
    picture_url: "../assets/imgs/complete.jpeg",
    description: `Completa, la tabla de tus sueños, equipada con los mejor de nuestros productos salados,
    acidos y lo mejor dulces`,
    category_id: 1,
    stock: 5,
    amount: 0,
  },
  {
    id: 8,
    name: "Desayuno sorpresa",
    price: 700,
    picture_url: "../assets/imgs/breakfast.jpeg",
    description: `Sorprende a esa persona especial para ti con este delicioso 
    desayuno, especial para picnics`,
    category_id: 4,
    stock: 10,
    amount: 0,
  },
  {
    id: 9,
    name: "Picnic nocturno",
    price: 2000,
    picture_url: "../assets/imgs/night_picnic.jpeg",
    description: `Disfruta de una hermosa noche, sin preocupaciones, solo
    llamamos y tendras una noche inolvidable, disfrutando de la compañia
    y nuestros deliciosos productos`,
    category_id: 4,
    stock: 2,
    amount: 0,
  },
  {
    id: 10,
    name: "Tabla romantica",
    price: 700,
    picture_url: "../assets/imgs/withWine.jpeg",
    description: `Disfruta de una deliciosa tabla de quesos, combinada con un delicioso vino
    y un toque dulce`,
    category_id: 1,
    stock: 5,
    amount: 0,
  },
  {
    id: 11,
    name: "Picnic Kids",
    price: 1000,
    picture_url: "../assets/imgs/picnic_kids.jpeg",
    description: `Regala un momento memorable para tus hijos, con una combinación agradable 
    de sabores y un espacio comodamente organizado`,
    category_id: 4,
    stock: 1,
    amount: 0,
  },
];

export default data;
