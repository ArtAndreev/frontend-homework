'use strict';

const euclid = (...numbers) => numbers.reduce((gcd, cur) => {
    while (gcd !== cur) {
        if (gcd > cur) gcd -= cur;
        else cur -= gcd;
    }
    return gcd;
});
