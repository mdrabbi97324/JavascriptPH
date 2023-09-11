var shoppingCart = {
    book: 3,
    shoes: 2,
    pen: 25,
    shocks: '2 pairs',
    bottle: 1
    
}

console.log(shoppingCart);
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties, propertyValues);

/* for(var i=0; i<properties.length; i++) {
    console.log(properties[i], propertyValues[i]);
}

function movie(){
    return "Din-The day";
    return "Poran";
    return "Hawa";
   }
   console.log(movie()); */