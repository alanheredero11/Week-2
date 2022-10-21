import { Book } from "./book";

export class Library
{
    private books: Book[];
    private adress: string;
    private manager: string;

    constructor(books: Book[], adress: string, manager: string)
    {
        this.books = books; 
        this.adress = adress; 
        this.manager =  manager;

    }

// ----- GETTERS & SETTERS 

    public getAdress():string
    {
        return this.adress;
    }
    public setAdress(adress:string)
    {
        this.adress = adress;
    }

    public getManager():string
    {
        return this.manager;
    }
    public setManager(manager:string)
    {
        this.manager = manager;
    }

// ------- END GETTERS & SETTERS

    public toString():string
    {
        let resultado = "";

        for (let i = 0; i < this.books.length; i++)
        {
            resultado += ("Book" + [i + 1] + "\n" + this.books[i].toString() + "\n" + "\n")
        }

        return resultado;
    }

    public getNumberOfBooks():number
    {
        return this.books.length
    }

    public findByAutor(author:string):Book[]
    {
        let resultado: Book[] = [];
        for (let i = 0; i < this.books.length; i++)
        {
            if (this.books[i].getAuthor() == author)
            {
                resultado.push(this.books[i])
            }
        }
        return resultado;
    }

    // public putBooksOnLibrary(titulo: string, nPaginas: number, isbn: string, autor: string, editorial: string)
}

// let libreria_antigua = new Library([],"Calle Boleros", "Manuela Carrillo");
