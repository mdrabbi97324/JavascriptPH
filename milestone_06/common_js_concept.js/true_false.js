/* 
Truthy:
1. true
2. any number(+ve, -ve) will be truthy exception 0;
3. any string exception empty string 
4. '0', 'false'
5. [] and {}


Falsy:
1. false
2. 0
3. ''(empty string)
4. undefinde
5. null
*/


const x = '';
if(x){
    console.log('This is true');
}

else{
    console.log('This is false')
}


// check falsy use a bang before statement 
const y = 0 ;
if(!y){
    // console.log('this y falsy')
}

const z = 1;

if(!!z){
    console.log('this z is truthy')
}