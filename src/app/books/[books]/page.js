"use client"
import BookInformation from '@/app/components/BookInformation';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function BookInfo() {
  const params = useParams();
  console.log("params", params);

  const [bookInfo, setBookInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router=useRouter()
  const id = params.books;
  const fetchBookInfo = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://softwium.com/api/books/${id}`)
      console.log(response.data);
      setBookInfo(response.data)
    } catch (error) {
      console.log(error.message);
      setError('Failed to fetch book information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (id) {
      fetchBookInfo();
    }
  }, [id,fetchBookInfo])
  return (
    <div>
      {isLoading ? (
        <p className="text-lg text-white text-center">Loading book information...</p>
      ) : error ? (
        <div className="text-lg bg-slate-50  p-3 items-center text-red-600 text-center m-2">{error}
          <button className=" my-2 mx-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-300"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      ) : <BookInformation bookInfo={bookInfo} />
      }
    </div>
  )
}

export default BookInfo
