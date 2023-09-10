function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please give a number"
    }

    return Math.pow(number, 3);
}


function matchFinder(string1, string2) {
    if (string1.includes(string2)) {
        return true;
    }
    return false;
    }


function sortMaker(arr) {
    let arrResult = [];
        if ( arr[0] === arr[1] ){
           return 'equal';
        }
        else if(arr[0] < 0 || arr[1] < 0) {
            return 'Invalid Input'
        }

        else if (arr[0] < arr[1]){
            const temp = arr[1]
            arr[1] = arr[0];
            arr[0] = temp;
            arrResult.push(arr[0], arr[1]);
            return arrResult;
        }

        return arr;

    }


function findAddress(obj) {
    let values = [];
    // const objValues = Object.values(obj)
    for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
            values.push(obj[key]  || '__')
        }
    }
    return values.join(',');
}



function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum = element + sum;
    }

    if(sum >= totalDue) {
        return true;
    }

else if ( Array.isArray(changeArray) && !changeArray.length ){
    return 'This is empty';
}
    return false;
}



  



