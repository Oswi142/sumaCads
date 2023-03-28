function sumarCadenas(cad){
    let suma = 0;
    if(cadena.length > 1){
        let num1 = + cadena[0];
        let num2 = +cadena[2];
        suma = num1 + num2;
    }
    else
    {
        suma += +cadena;
        for(let i =0;i<cadena.length;i++)
        {
            if(cadena[i]==",")
            {
                suma+=0;
            }
            else
            {
                suma +=+cadena[i];
            }
        }
    }
    return suma;
}
export default sumarCadenas;