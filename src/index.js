import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("*******************************");
console.log("Welcome to the your Shopee Cart");
console.log("******************************* \n");

const item1 = await createItem("Item 1", 10.0, 2);
const item2 = await createItem("Item 2", 32.9, 3);
const item3 = await createItem("Item 3", 25.0, 10);

await cartServices.addItemCart(myCart, item1);
await cartServices.addItemCart(myWishList, item2);
await cartServices.addItemCart(myCart, item3);

console.log("*******************************");
console.log("Shopee Cart TOTAL IS!");
await cartServices.sumTotalCart(myCart);
console.log("*******************************\n");

console.log("*******************************");
cartServices.displayCart(myCart);
console.log("*******************************");
