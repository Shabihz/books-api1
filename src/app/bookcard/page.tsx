import Image from "next/image";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "/book.jpg" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", image: "/mm.jpg" },
  { id: 3, title: "1984", author: "George Orwell", image: "/jj.jpg" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", image: "/images.jpg" },
  { id: 5, title: "Moby Dick", author: "Herman Melville", image: "/ii.jpg" },
  { id: 6, title: "War and Peace", author: "Leo Tolstoy", image: "/download.jpg" },
];

export default function FeaturedBooks() {
  return (
    <section className="py-16   bg-gradient-to-r from-black to-sky-900 ">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12 text-white">Featured Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="p-5   bg-gradient-to-r from-black to-sky-900 shadow-md rounded-lg hover:shadow-lg transition"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={600}
                height={100}
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">{book.title}</h4>
              <p className=" mt-2  text-white">by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
