var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){

        if (xhr.status ==200){
            var resposta = xhr.responseText;
            //transforma o texto da api em um objeto javascript
            var pacientes = JSON.parse(resposta);
        
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");

        }

    });

    xhr.send()
});