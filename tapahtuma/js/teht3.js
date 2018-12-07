const yhteen = document.getElementById('sum');
const vahenna = document.getElementById('sub');
const  kerro = document.getElementById('multi');
const jaa = document.getElementById('div');
const kentta1 = document.getElementById('num1');
const kentta2 = document.getElementById('num2');
const vastaus = document.getElementById('vastaus');

yhteen.addEventListener('click', function(yhteen_event) {
  vastaus.innerHTML= parseFloat(kentta1.value) + parseFloat(kentta2.value);
})
vahenna.addEventListener('click', function(vahenna_event) {
  vastaus.innerHTML= parseFloat(kentta1.value) - parseFloat(kentta2.value);
})
kerro.addEventListener('click', function(kerro_event) {
  vastaus.innerHTML = parseFloat(kentta1.value) * parseFloat(kentta2.value);
})
jaa.addEventListener('click', function(jaa_event) {
  vastaus.innerHTML= parseFloat(kentta1.value) / parseFloat(kentta2.value);
})