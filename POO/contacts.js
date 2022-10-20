let persona = require("./person.js")

class contact
{
    constructor()
    {
        [
        this.contacto1 = new persona.Person(),
        this.contacto2 = new persona.Person(),    
        ]     
    }

    printAllHere()
    {
    console.log(this.contacto1);
    console.log(this.contacto2)
    }
}

let Contacto1 = new contact();

    Contacto1.contacto1.nombre = "Alberto";
    Contacto1.contacto1.apellido = "Roberto";
    Contacto1.contacto1.altura = 1.70;
    Contacto1.contacto1.peso = 80;
    Contacto1.contacto1.yearOfBirth = 1998;

    Contacto1.contacto2.nombre = "Maria";
    Contacto1.contacto2.apellido = "Moreno";
    Contacto1.contacto2.altura = 1.60;
    Contacto1.contacto2.peso = 50;
    Contacto1.contacto2.yearOfBirth = 1999;


Contacto1.printAllHere();