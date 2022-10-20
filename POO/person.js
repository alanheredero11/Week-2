//------ 1) -------

class Person 
{

    constructor(nombre, apellido, peso, altura, yearOfBirth)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad;
        this.altura = altura;
        this.peso = peso;
        this.color_pelo;
        this.genero;
        this.nacionalidad;
        this.yearOfBirth = yearOfBirth;
        this.hobbies;     
        
    }

//------ 2) -------

    calculoimc(){                                       //metodo para calcular el imc

        return this.peso / (this.altura * this.altura);
    }

//------ 3) -------

    calcEdad(año)                                       //metodo para calcular la edad que tiene en el año que se le indica
    {   
        return año - this.yearOfBirth
    }

//------ 4) -------

    printAll()
    {
        for (let propiedad in this){
            console.log(propiedad + " - " + this[propiedad])
        }
        console.log("\n")
    }

//------ 5) -------

    printHobbies()
    {
        console.log(this.hobbies + "\n");
    }
}


// let Yo = new Person("Alan", "Heredero", 80, 1.75, 1978)

// // console.log(Yo.calculoimc())

// // console.log(Yo.calcEdad(2022))

// Yo.printAll()                                           //solo hace print de todas los atributos que tiene valor en estee object

// Yo.hobbies = ["Correr", "Saltar", "Bailar", "Respirar"];

// Yo.printHobbies();

module.exports.Person = Person;