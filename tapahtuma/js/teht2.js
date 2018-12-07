const kuva = document.querySelector('img');
const teksti =document.querySelector('p');
teksti.style.display= 'none';

kuva.addEventListener('mouseenter', function(ev) {
  teksti.style.display = 'block';
})
kuva.addEventListener('mouseleave', function(event) {
  //event.teksti.style.display= 'none';
  teksti.style.display = 'none';
})