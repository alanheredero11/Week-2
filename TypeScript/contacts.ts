import {Person} from "./person"

export class contacts 
{
    public people: Person[];

    constructor()
    {
        this.people = new Array();
    }

    printCalendar()
    {
        console.log(this.people);
    }
}

// let agenda = new contacts();

// agenda.people.push(new Person("Alberto", 48, "Times Square"))        // asi se añaden objetos de tipo persona al array people
// agenda.people.push(new Person("Ma", 48, "Times Square"))
// agenda.people.push(new Person("Roberto", 37, "Times Square"))

// console.log(agenda)
