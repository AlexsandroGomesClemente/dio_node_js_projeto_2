/*
Quais ações um item faz ?

Ações:
-> Criar item com um subtotal certo
*/

// -> Criar item com um subtotal certo
async function createItem(name,price,quantity){
    return {
        name,
        price,
        quantity,
        subtotal:() => price * quantity
    }
}

export default createItem