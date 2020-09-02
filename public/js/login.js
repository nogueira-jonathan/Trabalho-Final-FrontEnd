

(function(){

    const emailUser = "admin@gmail.com";
    const senhaUser = "123";

    var usuario = document.querySelector("#email");
    var senha = document.querySelector("#senha");
    var btnEntra = document.querySelector("#btn-entrar");
    var alerta = document.querySelector('div.alert');

    /* função para validar o usuário e senha */
    btnEntra.addEventListener("click", function(){
        if(!usuario.value || !senha.value ){
            mostrarMesagem(" Você deve informa a senha é o usuário ! ");
            return;
        }
        if(usuario.value.toLowerCase() != emailUser || senha.value != senhaUser){
            mostrarMesagem(" Senha ou usuarios inválidos ! ");
            return;
        }
            window.location.href = '/';
    })

    /* Função para exibir mensagem de alerta no topo do Box Login */
    function mostrarMesagem(mensagem){

        alerta.textContent = mensagem;
        alerta.classList.remove('esconder');

        setTimeout(()=>{
            alerta.classList.add('esconder');
        },10000);
        
    }

})();


