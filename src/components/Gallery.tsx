import Image from "next/image";
import Link from "next/link";


export default function Gallery() {
  return (
    <>
      <div className="w-full container mx-auto p-4">
        <h2 className="text-xl font-bold mb-2">Latest Freedom Wall Posts</h2>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-700 dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</h5>
            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                Open Post
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
