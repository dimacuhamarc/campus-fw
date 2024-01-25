'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { db } from '../configs/firebase';
import { getDocs, collection } from 'firebase/firestore';

interface Post {
  id: string;
  content: string;
  college: string;
  author: string;
  postdate: FirestoreTimestamp;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export default function Gallery() {
  const [posts, setPosts] = useState<Post[]>([]);

  const postCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Post[];
        console.log(filteredData);
        setPosts(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="w-full container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">Latest Freedom Wall Posts</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (post ? Post(post.id, post.content, post.college, post.author, post.postdate) : null))}
      </div>
    </div>
  );
}

function Post(id: string, content: string, college: string, name: string, datePosted: FirestoreTimestamp) {
  
  function formatDate(date: FirestoreTimestamp): string {
    const timestamp = new Date(date.seconds * 1000 + date.nanoseconds / 1e6);
    timestamp.setHours(timestamp.getHours() + 12);
    const options:Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: 'numeric',
    };
    const formattedDate = timestamp.toLocaleDateString('en-PH', options);
    return formattedDate;
  }

  return (
    <div
      key={id}
      className="container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  hover:scale-105"
    >
      <div className="h-full p-5 flex flex-col gap-4 justify-between">
        <h2 className='text-xs'>{id}</h2>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-700 dark:text-white">
          {content}
        </h5>
        <div className='container'>
          {name && (<p className="text-gray-500 text-sm mb-2">Submitted by {name}</p>)}
          <p className="text-gray-500 text-sm mb-2">Posted on {formatDate(datePosted)}</p>
        </div>
        <Link
          href="#"
          className="w-2/4 self-end inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Open Post
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        
      </div>
    </div>
  );
}
