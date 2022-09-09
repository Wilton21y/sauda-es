/* FUMÇÃO */
function fechaJanela() {
  document.querySelector('.corpo').style.display = 'none';
  document.querySelector('.b').style.display = 'block'
}

function abriJanela() {
  document.querySelector('.corpo').style.display = 'block';
  document.querySelector('.b').style.display = 'none'
}
/*
<=  menor igual.
>=  maior igual.
*/
function comprimento_casual() {
  let hora = new Date().getHours();
  if (hora <= 0 || hora <=5 ){
    document.querySelector('#txt').innerHTML = ' Boa madrugada!🌆🥱';
  }else if (hora < 6 || hora < 12) {
    document.querySelector('#txt').innerHTML = 'Bom dia! 🌤😀';
    if(hora > 10){
      document.querySelector('#txt').innerHTML = 'Bom dia! 🌤😐';
    }
  }else if (hora <= 12 || hora <= 17) {
    document.querySelector('#txt').innerHTML = 'Bom tarde! 🌄😪';
    document.querySelector('#txt').style.textShadow = '5px 5px 10px #07BAFF';

    document.querySelector('body').classList.add('tarde');
  }else {
    document.querySelector('#txt').innerHTML = 'Boa noite! 🎑😴';
    document.getElementById('txt').style.color='#fff';

    document.querySelector('body').classList.add('noite');
    
  }
}
comprimento_casual();

window.addEventListener('load', () => {
/* BOTÕES */
const BtFecha = document.getElementById('closs');
const Btn_Ok = document.querySelector('.btn');
const Btn_abri = document.querySelector('.b');
  /* EVENTO */
  BtFecha.addEventListener('click', fechaJanela);
  Btn_Ok.addEventListener('click', fechaJanela);
  Btn_abri.addEventListener('click', abriJanela);
  setInterval(comprimento_casual, 1000);

});
