/*
Quais ações meu carrinho pode fazer?
 Para cada ação uma função, cria a assinatura do metodo
Ações:
-> Adicionar item do carrinho,
-> Deletar item do carrinho,
-> Remover um item da soma total de items
-> Totalizador do carrinho
*/

// ✅ -> Adicionar item do carrinho,
async function addItemCart(userCart, item) {
  userCart.push(item);
}

// ✅ -> Deletar item do carrinho,
async function deleteItemCart(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem )
    if(index !== -1 ) {
        userCart.splice(index,1)
    }
}

// -> Remover um item da soma total de items
async function removeItemOfSumCart(userCart, index) {}

// ✅ -> Totalizador do carrinho
async function sumTotalCart(userCart) {
  const res = userCart.reduce((total, item) => total + item.subtotal(), 0).toFixed(2);
  console.log(res);
}

export { addItemCart, sumTotalCart, deleteItemCart, removeItemOfSumCart };
