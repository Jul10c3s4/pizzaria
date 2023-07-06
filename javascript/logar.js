function validarLogin(){
    var preenchidos = false;
    var usuario = document.getElementById('usernames');
    var senha = document.getElementById('passwords');
    let form = document.getElementsByTagName("form")
    let toGo = document.createElement("a")
    toGo.setAttribute('href', '../index.html')

    console.log(toGo);
    
    if(usuario.value != '' && senha.value != '' ){
        preenchidos = true;
        if (senha.value.length > 5) {
            if (usuario.value == "pizzaria@gmail.com" & senha.value == "pizza123" ) {
                toGo.click()
            }else{
                alert("Email ou senha incorreta!")
            }
        }else{
            alert("A senha deve possuir no mínimo 6 caracteres")
        }
    }
    if(!preenchidos){
        alert("os campos de usuário e senha ainda não foram preenchidos");
    }
    
}