'use client';

import React from 'react';
import RightIcon from '@/assets/svgs/right-icon.svg';
import Link from 'next/link';

interface FirestoreTimestamp {
    seconds: number;
    nanoseconds: number;
}

interface Post {
    id: string;
    content: string;
    college: string;
    name: string;
    datePosted: FirestoreTimestamp;
}

const Posts: React.FC<Post> = ({
    id,
    content,
    college,
    name,
    datePosted
}) => {
    const formatDate = (date: FirestoreTimestamp): string => {
        const timestamp = new Date(date.seconds * 1000 + date.nanoseconds / 1e6);
      
        if (timestamp.getHours() > 12) {
            timestamp.setHours(timestamp.getHours() + 12);
        }
      
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Asia/Manila',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: 'numeric',
            hour12: false,
        };
      
        const formattedDate = timestamp.toLocaleDateString('en-PH', options);
        return formattedDate;
    };

    return (
        <div key={id} className="container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <div className="h-full p-5 flex flex-col gap-4 justify-between">
                <div className='container border-b-2 border-pink-700'>
                  <p className="mb-2 text-2xl h-full font-bold tracking-tight text-pink-700 dark:text-white">
                      {content.slice(0,15)}...
                  </p>
                </div>

                <p className="mb-2 text-2xl h-full font-medium tracking-tight text-pink-700 dark:text-white">
                    {content}
                </p>

                <div className="container">
                    {name && (
                        <p className="text-gray-500 text-sm mb-2">Submitted by {name}</p>
                    )}
                    <p className="text-gray-500 text-sm mb-2">
                        Posted on {formatDate(datePosted)}
                    </p>
                </div>

                <div className='container flex flex-row justify-between items-center'>
                  {!((college == 'NONE') || (college == '')) &&
                    <div className='w-12 text-white bg-pink-700 text-xs text-center px-2 py-1 rounded-full'>
                      {college}
                    </div>
                  }
                  {((college == 'NONE') || (college == '')) &&
                    <div className='w-12'/>
                  }

                  <Link
                      href={`/post/${id}`}
                      className="w-2/4 place-self-end inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                  >
                      Open Post
                      <RightIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                  </Link>
                </div>
            </div>
        </div>
    )
}

export default Posts;