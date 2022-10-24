export class Book
{
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(titulo: string, nPaginas: number, isbn: string, autor: string, editorial: string)
    {
        this.title = titulo;
        this.nPages = nPaginas;
        this.isbn = isbn;
        this.author = autor;
        this.editorial = editorial;
    }

// ----  GETTERS & SETTERS

    public getTitle():string
    {
        return this.title;
    }
    public setTitle(titulo:string)
    {
        this.title = titulo;
    }

    public getNPages():number
    {
        return this.nPages;
    }
    public setNPages(nPaginas: number)
    {
        this.nPages = nPaginas;
    }

    public getisbn():string
    {
        return this.isbn;
    }
    public setisbn(isbn:string)
    {
        this.isbn = isbn;
    }

    public getAuthor():string
    {
        return this.author;
    }
    public setAuthor(autor:string)
    {
        this.author = autor;
    }

    public getEditorial():string
    {
        return this.editorial;
    }
    public setEditorial(editorial:string)
    {
        this.editorial = editorial;
    }

// ----- END OF GETTERS AND SETTERS

    public toString()
    {
        return ("Title - " + this.title + "\n" +
                "Number of Pages - " + this.nPages + "\n" +
                "ISBN - " + this.isbn + "\n" +
                "Author - " + this.author + "\n" +
                "Editorial -" + this.editorial)
    }


}
