'use strict';

const euclid = (...numbers) => numbers.reduce((gcd, cur) => {
    if (typeof gcd !== 'number' || typeof cur !== 'number') {
        throw new TypeError('Wrong type is given, expected number');
    } 
    while (gcd !== cur) {
        if (gcd > cur) {
            gcd -= cur;
        } else {
            cur -= gcd;
        }
    }
    return gcd;
}, numbers[0]);
