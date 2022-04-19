const nome = document.querySelector('[data-nome]');
nome.addEventListener("blur", validarNome);

function validarNome(){
  const nomeDigitado = nome.value;
  if(nomeDigitado.length < 3 || nomeDigitado == " "){
        console.log('erro');
    }
    
}




const email = document.querySelector('[data-email]');
const assunto = document.querySelector('[data-assunto]');
const mensagem =document.querySelector('[data-mensagem]');
const btnEnviar = document.querySelector('[data-BtnEnviar]');




/* background-image: url(../img/formulario/check2.svg);
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: right;
    background-size: 30px; */