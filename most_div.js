'use strict'
const a = 10; const b = 100;
const sqrt_is_int = function(m){
  let s = Math.sqrt(m);
  if(s - Math.floor(s) === 0){
    return true;
  }
  else{
    return false;
  }
}

const num_of_div = function(n){
  let count = 0;
  for(let i = 1; i < Math.sqrt(n); ++i){
    if (n % i === 0){
      ++count;
    }
  }
  count *= 2;
  if (sqrt_is_int(n) === true){
    ++count;
  }
  return count;
}

var num = a;
for (let i = a + 1; i <= b; ++i){
  if (num_of_div(i) > num_of_div(num)){
    num = i;
  }
}
console.log(num);
