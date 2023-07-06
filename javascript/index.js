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

let navMobile = document.querySelector('.navbar-mobile')

let body = document.querySelector('body')
function showMenu(){

    if (navMobile.classList.contains('open')) {
        navMobile.classList.remove('open')
        body.classList.add('stop')
    }else{
        body.classList.remove('stop')
        navMobile.classList.add('open')
    }
}

document.addEventListener('mousemove', function(e){
    let width = window.innerWidth
    if (width > 450) {
        body.classList.remove('stop')
    }
})


document.addEventListener("click" ,function (e){
    if(e.target.getAttribute('id') == "log"){
        navMobile.classList.add('open')
    }
    if( e.target.getAttribute('id')== "sab" | e.target.getAttribute('id') == "loc" | e.target.getAttribute('id') == 'sob' | e.target.getAttribute('class') == 'title'){
        navMobile.classList.add('open')
        body.classList.remove('stop')
    }
})