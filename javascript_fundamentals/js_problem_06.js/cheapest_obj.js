const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    { name: 'Walton', camera: 120, storage: '32gb', price: 22000, color: 'silver'},
    { name: 'Iphone', camera: 12, storage: '132gb', price: 136000, color: 'black'},
    { name: 'Xaomi', camera: 120, storage: '64gb', price: 26000, color: 'gold'},
    { name: 'Oppo', camera: 48, storage: '32gb', price: 38000, color: 'silver'},
    { name: 'Nokia', camera: 50, storage: '32gb', price: 10000, color: 'silver'},

]

/* function cheapestPhone(phones) {
        let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection); */
function cheapestPhone(phones) {
        let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price && phone.camera > cheapest.camera) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);


/* function highestCamera(phones) {
        let highest = phones[0]
    for (let i=0; i < phones.length; i++) {
        const phone = phones[i];
        if ( phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}

const mySelection2 = highestCamera(phones);
console.log(mySelection2); */
