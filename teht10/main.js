/* 10. kirjoita funktio, joka palauttaa funktion*/
const nappi = document.querySelector('#submit');
const from =1;
const to =9;

const rnd =(from, to)=>{
  const all = [];
  for (let i = 0; i < 100; i++) {
    const random= Math.floor(Math.random()*to)+from;
    all.push(random);
    console.log(random);
  }console.log(all);
  averages(all);
};

const averages = (arr) => {
  const length = arr.length;
  let final =0;
  let average = 0;
  for (let i = 0; i < length; i++) {
      average += arr[i];
    final = average / length;
  }
  console.log(final);
};

nappi.addEventListener('click', rnd(from, to));
