'use strict'

var m = 0   ;
const sum_of_digits = function(n){
  var sum = 0;
  while (n !== 0){
    var k = n % 10;
    sum += k;
    n = (n - k) / 10;
  }
  return sum;
}
console.log(sum_of_digits(m));
