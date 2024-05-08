"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DisplayBooks from '../components/DisplayBooks';
import { useRouter } from 'next/navigation';

function Books() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router=useRouter()
    const fetchBooks = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://softwium.com/api/books");
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error.message);
            setError('Failed to fetch books. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchBooks();
    }, [])
    console.log("books: ", books)
    return (
        <div>
            {isLoading ? (
                <p className="text-lg text-white text-center">Loading books...</p>
            ) : (
                <div className="overflow-y-auto max-h-screen">
                    {error ? (
                        <div className="text-lg bg-slate-50  p-3 items-center text-red-600 text-center m-2">{error}
                            <button className=" my-2 mx-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-300"
                                onClick={() => router.back()}
                            >
                                Go Back
                            </button>
                        </div>
                    ) : <DisplayBooks books={books} />
                    }
                </div>
            )
            }
        </div>
    )
}

export default Books
