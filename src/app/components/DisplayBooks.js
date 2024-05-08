import { useRouter } from 'next/navigation'
import React from 'react'

function DisplayBooks({ books }) {
  const router = useRouter()
  return (
    <div className="flex justify-end items-start min-h-screen py-8 px-4">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-right">BookVerse Collection</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {books.map(book => (
            <div key={book.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2 hover:text-sky-600 cursor-pointer"
                onClick={() => router.push(`/books/${book.id}`)}
              >
                {book.title}
              </h2>
              <p className="text-purple-950 mb-4">
                Authors:  {book.authors && book.authors.join(", ")}
              </p>
            </div>
          ))}
        </div>
        <button className=" my-2 mx-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-300"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default DisplayBooks
