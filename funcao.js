//Sintaxe da função 
function nome(/*Argumentos, parâmentros */){//qargumentos, parâmentros: são entradas de dados para função utilizar
    //bloco de código, lógica
}

//executar, chamando pelo nome e passa os parâmentros se houver, se não fica vazio '()'
nome()

//1-somar dois números
function somaDoisNumeros  (n1, n2) {
    // let n1 = 50
    // let n2 = 70

    let resultado = n1 + n2;
    console.log(resultado)
    //o código é interrompido após o return, caso haja algo abaixo, não será executado
    return resultado;
    

    
}
//console.log(somaDoisNumeros())

//Os parâmetros/argumentos

somaDoisNumeros(20, 50)
somaDoisNumeros(100,400)