function cadastroUsuario(){
    
}




var usuarios = [
    {"login": "teste@teste", "senha": "1234"},
    {"login": "mamae", "senha": "abacaxi"},
    {"login": "papai", "senha": "melancia"},
];

function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "telaprincipal.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    window.location = "index.html";
    return false;
}