var ipAddress = [20, 55, 97, 29, 25, 35, 47, 105, 136];

for (var i=0; i<ipAddress.length; i++) {
    ipIndex = ipAddress[i]
    if (ipIndex > 35) { continue; }
    // console.log(ipIndex);
}

for (var i=0; i<ipAddress.length; i++) {
    ipIndex = ipAddress[i];
    if(ipIndex == 105 ) { continue; }
    // console.log(ipIndex);
}

var i = 0;

while (i < ipAddress.length) {
    ipIndex = ipAddress[i];
    i = i + 1
    if( ipIndex === 35) { break; }
    // console.log(ipIndex);
}

var i = 0;

while (i < ipAddress.length) {
    ipIndex = ipAddress[i];
    i = i + 1
    if( ipIndex === (35, 97, 105)) { continue; }
    console.log(ipIndex);
}
