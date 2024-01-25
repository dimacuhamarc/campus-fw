'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { db } from '../configs/firebase';
import { getDocs, collection } from 'firebase/firestore';
// var posts = [
//   {
//     "id": 1,
//     "content": "How do i tell my friends na taken nako uli after a month or so na naging single ako cus nag break kami ng ex ko…. Hint: ung bago is ung ex ko",
//     "college": "CS",
//     "name": "John",
//     "datePosted": "2024-01-24T12:30:00Z"
//   },
//   {
//     "id": 2,
//     "content": "Hiii, freshie heree and im planning to transfer next academic year sa other UP Campus (course ay related sa engineering). I am currently taking BSM, sooo here's my question: Should I take like full GEs po ba this 2nd sem, or kuha pa rin ako ng M54 and/or M29?",
//     "college": "CSS",
//     "name": "Stan",
//     "datePosted": "2024-01-24T14:45:00Z"
//   },
//   {
//     "id": 3,
//     "content": "Lahat ng kilala ko may jowa nakaka out of place ako dito. Lalo na ung mga sumasakop sa buong sidewalk habang naghoholding hands ayaw magpadaan",
//     "college": "Prefer not to say",
//     "name": "Prefer not to say",
//     "datePosted": "2024-01-24T16:00:00Z"
//   }
// ]

interface Post {
  id: string;
  content: string;
  college: any;
  author: any;
  datePosted: any;
}

export default function Gallery() {
  const [posts, setPosts] = useState<Post[]>([]);

  const postCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      // read data from db
      // set posts
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
        {posts.map((post) => (post ? Post(post.id, post.content, post.college, post.author, post.datePosted) : null))}
      </div>
    </div>
  );
}

function Post(
  id: string,
  content: string,
  college: any,
  name: any,
  datePosted: any
) {
  return (
    <div
      key={id}
      className="container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  hover:scale-105"
    >
      <div className="h-full p-5 flex flex-col justify-between">
        <h2 className='text-xs'>{id}</h2>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-700 dark:text-white">
          {content}
        </h5>
        <Link
          href="#"
          className="w-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
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
