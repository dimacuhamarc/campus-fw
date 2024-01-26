'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/configs/firebase';
import { getDocs, collection, onSnapshot } from 'firebase/firestore';
import Posts from '@/components/wall/Posts';

interface FirestoreTimestamp {
    seconds: number;
    nanoseconds: number;
}

interface Post {
    id: string;
    content: string;
    college: string;
    author: string;
    postdate: FirestoreTimestamp;
}

const Gallery = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const postCollectionRef = collection(db, 'posts');

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
            // console.log(error);
        }
    };
  
    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        getPosts();

        // Subscribe to document changes
        const unsubscribe = onSnapshot(postCollectionRef, (snapshot) => {
        const updatedPosts = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        })) as Post[];

        setPosts(updatedPosts);
        });

        // Clean up the subscription when the component is unmounted
        return () => unsubscribe();
    }, []);

    return (
        <div className="w-full container mx-auto my-4 p-4">
            <p className="text-3xl font-bold mb-6">Latest Submissions</p>
            <div className="grid gap-4 grid-cols-4">
                {posts?.map((post: any) => {
                    return (
                        <Posts
                            key={post.id}
                            id={post.id}
                            content={post.content}
                            college={post.college}
                            name={post.author}
                            datePosted={post.postdate}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;