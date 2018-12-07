/*kuva 1 näkyviin*/

const tyyli = document.querySelector('[rel="stylesheet"]');
tyyli.disabled = true;

/*kuva 2 näkyviin*/
const kuvat = document.getElementsByTagName('img');
document.querySelector('kuvat').setAttribute('class', 'show');