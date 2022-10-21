export class Person
{
    public name: string;
    public age: number;
    private adress: string;

    constructor(nombre: string, edad: number, direccion: string)
    {
        this.name = nombre;
        this.age = edad;
        this.adress = direccion; 
    }

    public getName():string
    {
        return this.name;
    }
    public setName(name:string)
    {
        this.name = name;
    }
    public getAge():number
    {
        return this.age;
    }
    public setAge(age:number)
    {
        this.age = age;
    }
    public getAdress():string
    {
        return this.adress;
    }
    public setAdress(adress:string)
    {
        this.adress = adress;
    }

    public printName()
    {
        console.log(this.name)
    }

    public yearOfBirth(currentYear:number):number
    {
        return (currentYear - this.age);
    }

}

