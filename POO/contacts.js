let persona = require("./person")

class contact
{

    constructor()
    {
        this.contactList = new Array();
           
    }

    printPersons()
    {
    for (let i = 0; i < this.contactList.length; i++){
    console.log(this.contactList[i].persona.apellido)
    }
    }
}

// let Primer_Contacto = new contact();

// Primer_Contacto.contacto.push(new persona.Person(""))

// Primer_Contacto.printPersons();

// module.exports.contact = contact; 

let Persona1 = new contact;

Persona1.contactList.push({

    nombre: "Alan",
    apellido: "Heredero",
    altura: 1.75,
    peso: 80,
    yearOfBityh: 2000

})
Persona1.contactList.push({

    nombre: "Diego",
    apellido: "Forlan",
    altura: 1.75,
    peso: 80,
    yearOfBityh: 2000

})
Persona1.contactList.push({

    nombre: "Alberto",
    apellido: "Ramires",
    altura: 1.75,
    peso: 80,
    yearOfBityh: 2000

})

console.log(Persona1)

Persona1.printPersons()





