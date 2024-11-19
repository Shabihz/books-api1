
import { NextResponse } from "next/server";

let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
  { id: 2, title: "To Kill a Mockingbird", author:"Harper Lee", available: true },
  { id: 3, title: "1984", author: "George Orwell", available: true },
  { id: 4, title: "Harry Potter", author: "J.K Rowling", available: false },
    {id: 5, title: "Pride and Prejudice", author: "Jane Austen", available: true },
    {id: 6, title: "War and Peace", author: "Leo Tolstoy", available: false },
  

];

 export async function GET() {
   try {
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
     return NextResponse.json(
       { message: "Error fetching books" },
       { status: 500 }


    );
  }
}



export async function POST(request: any) {
  try {
    const newBook = await request.json();
    // Generate a new ID for the book
    const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    const book = { id, ...newBook };
    books.push(book);
    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating book" },
      { status: 500 }
    );
  }
}
export async function PUT(request: any) {
  try {
    const updatedBookData = await request.json(); // Read JSON data once
    const { id } = updatedBookData;
    const index = books.findIndex((book) => book.id === id);
    
    if (index === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    const updatedBook = { ...books[index], ...updatedBookData };
    books[index] = updatedBook;

    return NextResponse.json(updatedBook, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating book" }, { status: 500 });
  }
}



export async function DELETE(request: { json: () => PromiseLike<{ id: any; }> | { id: any; }; }) {
  try {
    const { id } = await request.json(); // Expecting the book ID to delete
    const index = books.findIndex((book) => book.id === id);
    
  if (index === -1) {
      return NextResponse.json(
       { message: "Book not found" },
        { status: 404 }
      );
}

    books.splice(index, 1); // Delete the book from the array

    return NextResponse.json(
      { message: "Book deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting book" },
      { status: 500 }
    );
  }
}