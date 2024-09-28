const shoppingCart = [
    {name : 'shoe', price: 2000, quantity: 3},
    {name : 'pant',  price: 3000, quantity: 2},
    {name : 'shirt', price: 1500, quantity: 5}

]
function totalCost(products){
    let sum = 0
    for(let i = 0; i < products.length; i++){
        let product = products[i]
        let totalProduct = product.price * product.quantity
        sum += totalProduct
    }
    return sum
}
let expense = totalCost(shoppingCart)
console.log(expense)