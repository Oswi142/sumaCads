function sumarcads(cad)
{
    let suma = 0;
    for(let i =0;i<cad.length;i++)
    {
        if(cad[i]==",")
        {
            if(cad[i]=="," || cad[i]=="-")
            {
            suma+=0;
            }
        }
        else
        {
            suma += +cad[i];
        }
    }    
    return suma;
}
export default sumarcads;