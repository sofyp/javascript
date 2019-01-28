'use strict';
const paino = document.querySelector('#weight');
const pituus = document.querySelector('#height');
const laheta = document.querySelector('#submit');
const tulosta = document.querySelector('#bmi');
let bmi=0;

const laske = () => {
  let kayttajaPaino= Number(paino.value);
  let kayttajaPituus = Number(pituus.value);
  if(kayttajaPaino<kayttajaPituus){
    bmi = kayttajaPaino/((kayttajaPituus/100)*(kayttajaPituus/100));
  tulos();
  }else{
  tulosta.textContent('invalid numbers');
  }
};

const tulos = () =>{
  tulosta.textContent += bmi;
  };

laheta.addEventListener('click', laske);