import Link from "next/link";


export default function Header() {
    return (
      <header className=" bg-gradient-to-r from-black to-gray-800 text-white p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Zarmain Library</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/bookcard" className="hover:text-gray-300">Books</Link>
            <Link href="/dashboard" className="hover:text-gray-300">Admin Dashboard</Link>
          </nav>
        </div>
      </header>
    );
  }
  