'use strict'
const a = 1; const b = -3; const c = -4;
console.log(`Let's solve  (${a})*x^2 + (${b})*x + (${c}) = 0 equation`);

const eqSol = (a,b,c) =>{
  var result;

if(a === 0){
    if ((b === 0) && (c !== 0)){
		    result = 'No solutions';
      }

    if ((b !== 0) && (c !== 0)){
		    result = (-c / b);
	    }

    if ((b === 0) && (c === 0)){
		      result = 'Infinite solutions'
	    }
}

else{
  const D = b*b - 4*a*c;
  console.log(`D = ${D}`);

  if(D === 0){
    result = -b / 2*a;
  }

  else if(D > 0){
    var x1 = (-b + Math.sqrt(D))/2*a;
    var x2 = (-b - Math.sqrt(D))/2*a;

    // result = {x1,x2};
    result = `${x1},${x2}`;
  }
  else result = 'No solution'
  }
return result;
}

  console.log(`The result is ${eqSol(a,b,c)}`);
