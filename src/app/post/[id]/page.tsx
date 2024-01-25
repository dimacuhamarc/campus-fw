'use client';
import { useState, useEffect } from 'react';
import { db } from '../../../configs/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';
import Link from 'next/link';

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

export default function Page({ params }: { params: { id: string } }) {
  // return <div>My Post: {params.id}</div>
  // #retrieve post from firestore using id
  // #render post
  const [post, setPost] = useState<Post | null>(null);
  const postCollectionRef = collection(db, 'posts');
  const postID = params.id;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(postCollectionRef, postID);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = { ...docSnap.data(), id: docSnap.id } as Post;
          setPost(data);
          console.log(data);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, []);

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
    <main className="flex min-h-screen flex-col gap-10 items-center justify-start p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl">CAMPUS FREEDOM WALL</h1>
        <h3>Created by COMSCI@UP.BAG for Org Week 2024</h3>
      </div>
      <div
        key={post?.id}
        className="container w-3/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  hover:scale-105"
      >
        <div className="h-full p-5 flex flex-col gap-4 justify-between">
          <h2 className='text-xs'>{post?.id}</h2>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-700 dark:text-white">
            {post?.content}
          </h5>
          <div className='container'>
            {post?.author && (<p className="text-gray-500 text-sm mb-2">Submitted by {post?.author}</p>)}
            {post?.postdate && <p className="text-gray-500 text-sm mb-2">Posted on {formatDate(post.postdate)}</p>}
          </div>
        </div>
      </div>


      <Link href={`/`} className="self-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
        Go Back
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
    </main>
  );
}