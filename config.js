const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("#btnCalcular");

const resultado = document.querySelector("#resultado");

btn.addEventListener('click',calcular);



function calcular(){
    const sumaInputs = Number(input1.value) + Number(input2.value);
    resultado.innerText = "El resultado es: " + sumaInputs;
}