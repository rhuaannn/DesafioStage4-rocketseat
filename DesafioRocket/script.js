let numberOne = Number(prompt("Digite o primeiro valor ?"));
let numberTwo = Number(prompt("Digite o segundo valor ?"));
 

const somar =() =>{
    return numberOne + numberTwo;
  
}
alert(`A soma dos números são: ${somar()} os números forneceddos são
   Numero 1 -> ${numberOne } || Numero 2 -> ${numberTwo} 
`)

const multiplicar =() =>{
    return numberOne * numberTwo
}
alert(`A multiplicação dos números são: ${multiplicar()} os números forneceddos são
   Numero 1 -> ${numberOne } || Numero 2 -> ${numberTwo} 
`)

const subtrair =() =>{
    return numberOne - numberTwo
}

alert(`A subtração dos números são: ${subtrair()} os números forneceddos são
   Numero 1 -> ${numberOne } || Numero 2 -> ${numberTwo} 
`)

const dividir =() =>{
    return numberOne / numberTwo
}

alert(`A divisão dos números são: ${dividir()} os números forneceddos são
   Numero 1 -> ${numberOne } || Numero 2 -> ${numberTwo} 
`)

const rest =() =>{
    return numberOne % numberTwo
}

alert(`O resto dos números são: ${rest()} os números fornecidos são
   Numero 1 -> ${numberOne } || Numero 2 -> ${numberTwo} 
`)

const verificationNumber = () =>{
    if(numberOne !== numberTwo) {
        alert("Os numeros digitados são diferentes")
    }else{
        alert("os numeros sao iguais!")
    }
}
verificationNumber()
const verificationPar =() =>{
    if (numberOne + numberTwo % 2 === 0) {
        alert("A soma dos números é pares!")
    }else{
        alert("O resultado da soma é IMPAR")
    }
        
    }
    verificationPar()
