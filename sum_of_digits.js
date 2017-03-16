'use strict'

let m = 254   ;
const sum_of_digits = function(n){
  let sum = 0;
  while (n !== 0){
    let k = n % 10;
    sum += k;
    n = (n - k) / 10;
  }
  return sum;
}
console.log(sum_of_digits(m));
