import React from 'react'
import {useRouter} from 'next/navigation'
function BookInformation({bookInfo}) {
  const router=useRouter()
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        { bookInfo ? (
          <div>
            <h1 className="text-4xl font-bold text-rose-600 mb-8 text-center">{bookInfo.title}</h1>
            <p className="text-lg text-purple-950 mb-4"><strong>ISBN:</strong> {bookInfo.isbn}</p>
            <p className="text-lg text-purple-950 mb-4"><strong>Page Count:</strong> {bookInfo.pageCount}</p>
            <p className="text-lg text-purple-950 mb-4"><strong>Authors:</strong> {bookInfo.authors && bookInfo.authors.join(', ')}</p>
          </div>
        ) : (
          <p className="text-lg text-red-600 text-center">Book not found</p>
        )}
              <button className=" my-2 mx-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-300"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>

    </div>
  )
}

export default BookInformation
