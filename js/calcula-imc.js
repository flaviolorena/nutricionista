var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);


//validacao de dados
if (!pesoEhValido){
    console.log("Peso Invalido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Invalido";
    paciente.style.backgroundColor = "lightcoral";
}

if (!alturaEhValida){
    console.log("Altura Invalido");
    alturaEhValida = false;
    tdImc.textContent = "Altura Invalida";
    paciente.classList.add("paciente-invalido");

}

//calculo imc
if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;    
}
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }
    else{
        return false;
    }
}


function calculaImc (peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}