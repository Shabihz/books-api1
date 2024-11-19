import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-sky-900 text-teal-400 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Next Favorite Book</h2>
          <p className="text-lg md:text-xl mb-8 text-white">Explore a world of imagination, knowledge, and stories.</p>
          <Link href="/bookcard">
            <button className="px-6 py-3 bg-teal-400 text-white rounded-lg hover:bg-teal-700 transition">
              Browse Books
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 text-gray-900">

        <section className="py-16 bg-[url('/banner.png')] bg-cover to-sky-900 text-teal-900  ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-8 ">Our Mission</h2>
            <p className="text-lg text-center max-w-3xl mx-auto font-extrabold  ">
              At <strong>Zarmain Library</strong>, our mission is to connect readers with the books they love.
              Whether you&apos;re exploring timeless classics, diving into thrilling adventures, or expanding your knowledge with non-fiction, 
              we’re here to make your journey into the world of literature as smooth and enjoyable as possible.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-black to-sky-900 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-r from-black to-sky-900 shadow-md rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Extensive Book Collection</h3>
                <p className="text-white">
                  Browse through a wide range of genres, including fiction, non-fiction, and more.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-black to-sky-900 shadow-md rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
                <p className="text-white">
                  Discover books tailored to your taste and preferences.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-black to-sky-900 shadow-md rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
                <p className="text-white">
                  Join discussions, share reviews, and connect with fellow book lovers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-center bg-gradient-to-r from-black to-sky-900 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Ready to Explore?</h2>
            <p className="text-lg mb-8">
              Dive into our collection and find your next favorite book today!
            </p>
            <Link href="/bookcard">
              <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
                Browse Books
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
