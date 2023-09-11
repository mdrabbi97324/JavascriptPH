/*
1. show output from: 1-50
2. if the number is divisible by 3 then instead of the 
number, show 'foo'
3. if the number is divisible by 5 then instead of the
number, show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the
number, show 'foobar'
*/

/* for(i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }

    else if(i % 3 === 0) {
        console.log('foo');
    }
    else if(i % 5 === 0) {
        console.log('bar')
    }

    else {
        console.log(i);
    }
}
 */

// Use add and multiplication to calculate wood requirements
/*
fixed: per item wood
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;
    const total = chairWood + tableWood + bedWood;
    return total;
}

const totalWood = woodCalculator(1, 1, 1);
console.log(totalWood);
