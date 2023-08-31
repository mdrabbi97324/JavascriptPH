// const distanceMile = 2;
// const distanceKm = distanceMile * 1.60934;
// console.log(distanceKm);

function mileToKm(mile) {
    const km = mile * 1.60934;
    return km ;
}

const distanceMile = 2;
const distanceKm = mileToKm(distanceMile);
console.log(distanceKm);