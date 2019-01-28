const nappi = document.querySelector('#submit');

const start =()=>{
  let a=[7,5,8,4,1,5,7,6,4,6,6];
  console.log('taulukon arvot: '+ a);
  findMode(a);
};

let findMode = (a)=> {
  let mapping = {};
  let greatest = 0;
  let mode;
  a.forEach((number)=> {
    mapping[number] = (mapping[number] || 0) + 1;

    if (greatest < mapping[number]) {
      greatest = mapping[number];
      mode = number;
    }
  });
  console.log('Useiten löytyvä alkio: : '+ +mode);
};

nappi.addEventListener('click', start);


/*


* 9. etsi useiten löytyvä alkio
*
* 10. kirjoita funktio, joka palauttaa funktion
* 11. halutaan takaisin taulukko, jossa uniikkeja elementtejå
* 12. palauta taulukko jossa kokonaislukuja. niissä on stepin(x) mittainen intervali
* kirjoita lottogeneraattori näiden avulla
*
* 13.
* 14. rekusrsiivinen funktio joka laskee kertomaa !
* 16. lajittele taukukon ihmiset bmi arvon mukaan (sort! parametrina funktio)
*
* */
/* let final=[];
 let count = 1;
 let lap = 0;
 let number;
 for (let i=0; i<array.length; i++) {
   for (let e=i; e<array.length; e++){
     if (array[i] === array[e])
       lap++;
     if (count<lap){
       count=lap;
       number = array[i];
     }
   }
   i++;
   lap=0;
   console.log(`Numero ${number} esiintyy ${count} kertaa `) ;
 }
 //console.log(`Numero ${number} esiintyy ${count} kertaa `) ;*/
/*const sort =(a, e)=>{
  while((e<0) && a[e-1]>a[e]){
    [a[e], a[e-1]]=[a[e-1], a[e]];
    e--;
  }
};*/
/* for (let i=0; i<a.length; i++){
   number = Math.floor(Math.random()*40)+1;
   a=[number];
   a.push(number);
  console.log(number);
 }*/
/*const quickSort = (a)=> {
  if (a.length === 0) {
    return a;
  } else {
    const pivot = a[0];
    const right = a.slice(1,).filter((e) => (e > pivot));
    const left = a.slice(1,).filter((e) => (e <= pivot));
    console.log(`left: ${left}; pivot: ${pivot}; right: ${right}`);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
};*/
/*const countArray =(array)=>{
  console.log('täällä');
  console.log(array);

};*/
/*const Shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const pick = Math.floor(Math.random() * (i + 1));
    [ a[i], a[pick] ] = [ a[pick], a[i] ];
  }
};*/
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