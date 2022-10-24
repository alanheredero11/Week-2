export class Vector
{
    public elements: number[]

    constructor(n: number, k: number)
    {
        this.elements = new Array();

        for(let i = 0; i < n; i++)
        {
            this.elements.push(Math.round(Math.random()*k))
        }

    }

    public print()
    {
        console.log(this.elements)
    }

    public type(v1:Vector)
    {
        console.log(typeof v1.elements[1])
    }

    public add(v1:Vector):Vector
    {
        let resultado = new Vector(0,0);                                     //Así declaramos un objeto de tipo vector para trabajor sobre el
        
        for(let i = 0; i < this.elements.length; i++)
        {
            resultado.elements.push(this.elements[i] + v1.elements[i])
        }

        return (resultado)
    }

    public subs(v1:Vector):Vector
    {
        let resultado = new Vector(0,0);                                     //Así declaramos un objeto de tipo vector para trabajor sobre el
        
        for(let i = 0; i < this.elements.length; i++)
        {
            resultado.elements.push(this.elements[i] - v1.elements[i])
        }

        return (resultado)
    }

    public mult(v1:Vector):Vector
    {
        let resultado = new Vector(0,0);                                     //Así declaramos un objeto de tipo vector para trabajor sobre el
        
        for(let i = 0; i < this.elements.length; i++)
        {
            resultado.elements.push(this.elements[i] * v1.elements[i])
        }

        return (resultado)
    }

    public multNumber(n:number):Vector
    {
        let resultado = new Vector(0,0);                                     //Así declaramos un objeto de tipo vector para trabajor sobre el
        
        for(let i = 0; i < this.elements.length; i++)
        {
            resultado.elements.push(this.elements[i] * n)
        }

        return (resultado)
    }

} 

//------ Zona de Pruebas -------

// let cris = new Vector(10,5);
// let v1 = new Vector(10,2);

// console.log(cris);
// console.log(v1);


// // // console.log(cris.add(v1));
// // // console.log(cris.subs(v1));
// // // console.log(cris.mult(v1));
// // console.log(cris.multNumber(2));


