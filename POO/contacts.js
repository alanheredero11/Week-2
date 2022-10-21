let persona = require("./person.js")

class contact
{
    constructor()
    {
        this.contacto = new Array();
           
    }

    printPersons()
    {
    console.log(this.contacto);
    }
}

// let Primer_Contacto = new contact();

// Primer_Contacto.contacto.push(new persona.Person(""))

// Primer_Contacto.printPersons();

module.exports.contact = contact; 








