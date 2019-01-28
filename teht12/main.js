let step = 3;
let low=1;
let high=40;

const pickn =(ar)=>{
  const lottoNumbers =7;
  let i =0;
  for (ar[i]; i<lottoNumbers; i++){
    console.log('lotto numbers '+ar[i]);
  }
};

const intRange =(low, high, step)=>{
  const arr = [];
  for(let i = low; i<high; i +=step){
    arr.push(i);
  }
  shuffle(arr);
  checkIfUnique(arr);
};

const shuffle = (a) => {
  let current= a.length, value, randIndex;
  while(0!==current){
    randIndex= Math.floor(Math.random() * current);
    current -= 1;
    value = a[current];
    a[current] = a[randIndex];
    a[randIndex]= value;
  }return a;
};

const checkIfUnique =(n)=>{
    let a = [...new Set(n)];
    console.log('unique '+ a);
    pickn(n);
  };

document.addEventListener('DOMContentLoaded', intRange(low, high, step));

/* 12. palauta taulukko jossa kokonaislukuja. niissä on stepin(x) mittainen intervalli
*Write a function intRange that returns an array of integers from its arguments low to
* high with interval step. Implement lotto number generator (returns 7 unique random numbers from 1 to 40)
* using pickn and intRange.
* */