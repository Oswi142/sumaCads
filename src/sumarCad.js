function sumarCadenas(cad){
    let suma = 0;
    suma += +cad;
    if(cadena.length > 1)
    {
        let num1 = + cadena[0];
        let num2 = +cadena[2];
        suma = num1 + num2;
    }
    else
    {
        suma += +cadena;
    }
    return suma;
}
export default sumarCadenas;