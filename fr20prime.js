'use strict'

 const is_prime = function (m){
   if (m === 2){
     return true;
   }

   if (m === 1 || m % 2 === 0){
     return false;
   }

   for (let i = 3; i <= Math.sqrt(m); i += 2){  // check only odd numbers
     if (m % i === 0)
     return false;
   }
   return true;
}

/*
const a = 2;
if (is_prime(a) === true){
  console.log(`${a} is prime`)
}
else console.log(`${a} is not prime`)
*/

const pr_num = [];
let j = 1;
while(pr_num.length < 20){

  if (is_prime(j) === true){
    pr_num.push(j);
  }
  j++;
}
for (const i of pr_num){
  console.log(i);
}
