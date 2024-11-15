'use client'

import { useState, useEffect } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

export default function Dashboard() {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', available: true });
  const [editBook, setEditBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const addBook = async () => {
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    });
    const data = await res.json();
    setBooks([...books, data]);
    setNewBook({ title: '', author: '', available: true });
  };

  const updateBook = async (id: number) => {
    const res = await fetch('/api/books', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...editBook, id }),
    });
    const updatedBook = await res.json();
    setBooks(books.map((book) => (book.id === id ? updatedBook : book)));
    setEditBook(null);
  };

  const deleteBook = async (id: number) => {
    await fetch('/api/books', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-black to-gray-800 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white mb-12">Library Management</h1>

      {/* Add Book Form */}
      <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-8 mb-12 max-w-lg mx-auto border-l-8 border-blue-500 hover:scale-105 transform transition duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold mb-6 text-teal-400">Add New Book</h2>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Book Title"
            className="block w-full p-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author Name"
            className="block w-full p-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />

          {/* Availability Toggle */}
          <div className="flex items-center">
            <label className="mr-4 text-gray-300">Available:</label>
            <input
              type="checkbox"
              checked={newBook.available}
              onChange={(e) => setNewBook({ ...newBook, available: e.target.checked })}
              className="w-6 h-6 text-teal-400 bg-gray-700 border-gray-600 rounded-full focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
            <span className="ml-2 text-gray-400">{newBook.available ? 'Yes' : 'No'}</span>
          </div>

          <button
            className="w-full bg-teal-500 text-white py-3 rounded-lg text-lg hover:bg-teal-600 transition duration-300"
            onClick={addBook}
          >
            Add Book
          </button>
        </div>
      </div>

      {/* Books List */}
      <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
        <table className="min-w-full text-lg">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-4 px-6 text-left text-teal-400">Title</th>
              <th className="py-4 px-6 text-left text-teal-400">Author</th>
              <th className="py-4 px-6 text-center text-teal-400">Available</th>
              <th className="py-4 px-6 text-center text-teal-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-800 transition duration-200 ease-in-out">
                <td className="py-4 px-6">{book.title}</td>
                <td className="py-4 px-6">{book.author}</td>
                <td className="py-4 px-6 text-center">
                  {book.available ? (
                    <span className="bg-green-500 text-white py-2 px-4 rounded-full text-xs">Yes</span>
                  ) : (
                    <span className="bg-red-500 text-white py-2 px-4 rounded-full text-xs">No</span>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  <button
                    className="bg-yellow-400 text-white py-2 px-4 rounded-lg text-sm hover:bg-yellow-500 transition duration-300"
                    onClick={() => setEditBook(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition duration-300"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Book Form */}
      {editBook && (
        <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-8 mt-12 max-w-lg mx-auto border-l-8 border-purple-500 hover:scale-105 transform transition duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">Edit Book</h2>
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Book Title"
              className="block w-full p-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
              value={editBook.title}
              onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Author Name"
              className="block w-full p-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
              value={editBook.author}
              onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
            />

            {/* Availability Toggle */}
            <div className="flex items-center">
              <label className="mr-4 text-gray-300">Available:</label>
              <input
                type="checkbox"
                checked={editBook.available}
                onChange={(e) => setEditBook({ ...editBook, available: e.target.checked })}
                className="w-6 h-6 text-purple-400 bg-gray-700 border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
              <span className="ml-2 text-gray-400">{editBook.available ? 'Yes' : 'No'}</span>
            </div>

            <button
              className="w-full bg-purple-500 text-white py-3 rounded-lg text-lg hover:bg-purple-600 transition duration-300"
              onClick={() => updateBook(editBook.id)}
            >
              Update Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
