const nome = document.querySelector('[data-nome]');
nome.addEventListener("blur", validarNome);

function validarNome(event){
  const nomeDigitado = nome.value.replace(/\s/g,'');
  const aviso = document.querySelector('[data-nomeAviso]');
  if(nomeDigitado.length == 0  || nomeDigitado.length < 3){
        aviso.style.display = 'block'
    }else{
        aviso.style.display = 'none'
    }
    
}

const email = document.querySelector('[data-email]');
email.addEventListener('blur', validarEmail)

function validarEmail(event){
    const emailCampo = email.value.replace(/\s/g,'');
    const formatoEmail = /\S+@\S+\.\S+/;
       
    const emailAviso =  document.querySelector('[data-emailAviso]');
    if(formatoEmail.test(emailCampo) != true || emailCampo.length == ' '){
        
        emailAviso.style.display = 'block'
       
    }else{
        emailAviso.style.display = 'none'
    }
}


const assunto = document.querySelector('[data-assunto]');
assunto.addEventListener('blur', validarAssunto)

function validarAssunto(event){
    const assuntoCampo = assunto.value.replace(/\s/g,'');
    const assuntoAviso = document.querySelector('[data-avisoAssunto]');
    if(assuntoCampo.length == 0 ){
        assuntoAviso.style.display = 'block'
    }else{
        assuntoAviso.style.display = 'none'
    }
}

const mensagem = document.querySelector('[data-mensagem]');
mensagem.addEventListener('blur', validarMensagem);


function validarMensagem(event){
    const campoMensagem = mensagem.value.replace(/\s/g,'');
    const mensagemAviso = document.querySelector('[data-mensagemAviso]');
    if(campoMensagem.length == 0){
        mensagemAviso.style.display = 'block'
    }else{
        mensagemAviso.style.display = 'none'
    }
}



const btnEnviar = document.querySelector('[data-BtnEnviar]');
btnEnviar.addEventListener('click', enviarEmail)
function enviarEmail(){
    alert('Email não enviado. Ainda está em desenvolvimento essa Api')
}
   





/* background-image: url(../img/formulario/check2.svg);
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: right;
    background-size: 30px; */
