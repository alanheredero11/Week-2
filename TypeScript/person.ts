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

    public printAll() {
        console.log(
            "\n Nombre: " + this.name + 
            "\n Edad: " + this.age +
            "\n Dirección: " + this.adress)
    }

    public yearOfBirth(currentYear:number):number
    {
        return (currentYear - this.age);
    }

}

