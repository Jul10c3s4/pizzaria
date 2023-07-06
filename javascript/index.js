function entreContato(){
    let nome = document.getElementById("name")
    let email = document.getElementById("email")
    let telefone = document.getElementById("telefone")
    let cep = document.getElementById("cep")
    let mensagem = document.getElementById("mensagem")

    if( nome.value != "" & email.value != "" &  telefone.value != "" &  cep.value != "" &  mensagem.value != ""){
        alert("Sua mensangem foi enviada para a central de atendimento entraremos em contato em breve!")
        nome.value = ""
        email.value = ""
        telefone.value = ''
        cep.value = ''
        mensagem.value = ''

        
    }else{
        alert("Preencha todos os campos para enviar sua mensagem!")
    }
}

function showMenu(){
    let navMobile = document.querySelector('.navbar-mobile')
    let body = document.querySelector('body')
    body.click

    if (navMobile.classList.contains('open')) {
        navMobile.classList.remove('open')
    }else{
        navMobile.classList.add('open')
    }
}