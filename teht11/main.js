const pickn =()=>{
  const n = [];
  const arrayLength =10;
  for (let i = 0; i<arrayLength; i++){
  const random= Math.floor(Math.random()*30)+1;
  n.push(random);
  console.log(random);
  }
  checkIfUnique(n);
};

/*const insertionSort = (a) => {
  let i = 0;
  while (i < a.length) {
    let j = i;
    while ((j >= 0) && a[j-1] >= a[j]) {
      [ a[j], a[j-1] ] = [ a[j-1], a[j] ];
      j--; }
    i++;
  console.log('a + j: ' +a[j] + ' a + i: ' + a[i])
  }
    return a;
};*/

const checkIfUnique =(n)=>{
  let a = [...new Set(n)];
  console.log('unique '+ a);
};
document.addEventListener('DOMContentLoaded', pickn);
/*
Write a function pickn that returns an array of n unique random elements
from its argument array a. If n elements can’t be picked, return as many as possible.

tee argument array a
n= vain uniikkeja elementtejä
eli a voi olla muitakin kuin uniikkeja
*/