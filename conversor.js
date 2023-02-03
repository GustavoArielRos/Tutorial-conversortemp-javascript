
/*adicionando um evento de "click" no 'convert' */
document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert(){
    /*armazenando um "input" na variável */
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    /*impedindo que o usuário coloque algo indevido(coisa que não seja número) */
    /*if(condicao){
        bloco de codigo
    }else{

    }*/
    
    /*isNaN(is not a number), retorna true or false */
    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert("Digite um número válido!")
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8 ) + 32;

    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;

    }
    
    /*para receber com uma casa decimal */
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}

/*função que reseta o que ta na tela */
function clearForm(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}