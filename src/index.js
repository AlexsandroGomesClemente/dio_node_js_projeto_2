import createItem from "./services/item.js";
import * as cartServices from './services/cart.js'

const myCart = [];
const myWishList = [];

console.log("*******************************")
console.log("Welcome to the your Shopee Cart")
console.log("******************************* \n")


const item1 = await createItem("Item 1",10.00,2)
const item2 = await createItem("Item 2",32.90,3)

await cartServices.addItemCart(myCart, item1)
await cartServices.addItemCart(myWishList, item2)

console.log("*******************************")
console.log("Shopee Cart TOTAL IS!")
await cartServices.sumTotalCart(myCart)
console.log("*******************************")


