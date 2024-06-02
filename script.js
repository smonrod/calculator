
//Agrega a la pantalla el valor del botón
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// Esta función vacía la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}

// Esta función toma el valor de la pantalla y ejecuta los cálculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}