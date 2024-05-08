"use client"
import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter();
  return (
    <div className="flex justify-end items-center min-h-screen py-8 ">
      <div className="max-w-xl mr-11 p-6 bg-orange-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Welcome to BookVerse</h1>
        <p className="text-lg text-sky-800 leading-relaxed">
          Welcome to BookVerse! Explore an exciting world of literature where you can discover, share, and discuss your favorite books. Whether you're a fiction enthusiast, a history buff, or a lover of poetry, our diverse collection caters to every interest. Browse through our curated selection of titles, from timeless classics to contemporary bestsellers. Join our community to engage in lively conversations, recommend must-reads, and connect with fellow bookworms. Embark on a literary journey with us and let the pages come alive!
        </p>
        <span className="text-lg text-sky-800 leading-relaxed">Let's start,</span>
        <button className=" mx-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-300"
        onClick={()=>router.push("/books")}
        >
          Explore BookVerse
        </button>
      </div>
    </div>
  );
}
