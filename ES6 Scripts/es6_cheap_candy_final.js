"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
];

let cheapCandy = products.filter(currentProduct => currentProduct.price < 4);

//---------------------------------------------------

let totalCountOfCheapCandy = cheapCandy.length;

for (let i = 0 ; i < totalCountOfCheapCandy ; i++){
    let currentProduct = cheapCandy[i];

    console.log(`The product ${currentProduct.product} costs ${currentProduct.price}`)
}