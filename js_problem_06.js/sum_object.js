const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2},
    { name: 'shirt', price: 2200, quantity: 3},
    { name: 'pant', price: 800, quantity: 4},
    { name: 'panjabi', price: 1500, quantity: 2}
]

function totalCost(products){
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today :', expense);