
/*korvaa listan tiedot omillasi*/
/*lisää listaan puhnro -lisää otsikko th-elementillä*/
/*poista nikki- ja sen otsikko*/
const enimi= document.getElementsByTagName('td')[0].innerHTML= '<td>sofia</td>';
const snimi= document.getElementsByTagName('td')[1].innerHTML='<td>ylip</td>';
const nikki= document.getElementsByTagName('td')[2].innerHTML='<td>sofyp</td>';
const osoite= document.getElementsByTagName('td')[3].innerHTML='<td>kotikatu 1</td>';

/*lisää listaan puhelinnumero*/
const puhelin= document.createElement('td'); //luodaan uusi tyhjä elementti annetun amllin td-mukaan
const nro= document.createTextNode('0450500500'); //teksti, joka asetetaan sisälle
puhelin.appendChild(nro); // tällä yhdistetään palikat ja valmistellaan lopullista funktiota-  suluissa näkyvä sisältö. Ilman sitä olisi tyhjä
const element = document.getElementsByTagName('tr')[1]; //tällä osoitetaan paikka johon sisältö liitetään
element.appendChild(puhelin); //tämä on varsinainen funktio, lisää uuden lapsen vanhemmalle yllämainitun listan loppuun

/*lisää listaan otsikkoelementti*/
const paikka= document.createElement('th');
const otsikkopuhelin= document.createTextNode("Puhelin");
paikka.appendChild(otsikkopuhelin);
const palikka = document.getElementsByTagName('tr')[0];
palikka.appendChild(otsikkopuhelin);

const nickname= document.getElementsByTagName('td')[2];
nickname.remove();
const nickheader= document.getElementsByTagName('th')[2];
nickheader.remove();

//document.getElementsByTagName('tr')[1].innerHTML = '<td>Vanha maantie 6, 02650 EPSOO</td>';

