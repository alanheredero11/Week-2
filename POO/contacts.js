let persona = require("./person.js")

class contact
{
    constructor()
    {
        
        this.contacto = [new persona.Person()]
          
           
    }

    printPersons()
    {
    console.log(this.contacto);
    }
}

let Primer_Contacto = new contact();

    // Primer_Contacto.contacto[0].nombre = "alan";             //Asi definimos cada valor de los atributos

Primer_Contacto.printPersons();

module.exports.contact = contact; 










    // Primer_Contacto.contacto1.nombre = "Alberto";
    // Primer_Contacto.contacto1.apellido = "Roberto";
    // Primer_Contacto.contacto1.altura = 1.70;
    // Primer_Contacto.contacto1.peso = 80;
    // Primer_Contacto.contacto1.yearOfBirth = 1998;

    // Primer_Contacto.contacto2.nombre = "Maria";
    // Primer_Contacto.contacto2.apellido = "Moreno";
    // Primer_Contacto.contacto2.altura = 1.60;
    // Primer_Contacto.contacto2.peso = 50;
    // Primer_Contacto.contacto2.yearOfBirth = 1999;