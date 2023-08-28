/* for (var i = 0; i < 10; i++) {
    console.log(i);
}
 */
var num = [20, 55, 97, 29, 25, 35, 47, 105, 136];

for(var i = 0; i < num.length; i++) {
    var nu = num[i];
    if (nu > 50) {
        break;
    }
    // console.log(nu);
}

for (var i=0; i<num.length; i++) {
    var nu = num[i];
    if (nu > 50) {
        continue;
    }
    // console.log(nu);
}

for(var i=0; i<num.length; i++) {
    var nu = num[i];
    if (nu == 47) {
        break;
    }
 //   console.log(nu);
}
let text = "";
for (var i=0; i < 10; i++) {
    if (i===3) { break; }
    console.log('This number is ' + i);

}