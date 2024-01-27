'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import RightIcon from '@/assets/svgs/right-icon.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IntroPosts: React.FC<{
    items?: any
}> = ({ items }) => {
    const { ref, inView } = useInView({
        threshold: 0.25
    });

    // const animationLeft = useAnimation();
    // const animationRight = useAnimation();

    // useEffect(() => {
    //     if (inView) {
    //         animationLeft.start({
    //             x: 0,
    //             transition: {
    //                 type: 'spring', duration: 1.25, bounce: 0.15
    //             }
    //         });
    //         animationRight.start({
    //             x: 0,
    //             transition: {
    //                 type: 'spring', duration: 1.25, bounce: 0.15
    //             }
    //         });
    //     }

    //     if (!inView) {
    //         animationLeft.start({
    //             x: '-100px',
    //         });
    //         animationRight.start({
    //             x: '100px'
    //         });
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [inView]);

    if (!items.length) {
        return (
            <div className="mt-8 min-h-[80vh] flex w-full overflow-hidden">
                <motion.div
                    initial={{ x: '-100px' }}
                    animate={{ x: '0px' }}
                    transition={{ type: 'spring', duration: 1, bounce: 0.15 }}
                    className="absolute left-0 bg-white animate-pulse p-4 w-96 h-[80%] max-h-screen"
                />

                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <span className="text-xl tracking-wider">UPB Presents</span>
                    <span className="text-[6rem] uppercase font-bold">The Campus <br /> Wall</span>
                    <span className="text-xl opacity-75">Created by COMSCI@UP.BAG for Org Week 2024</span>
                </div>

                <div className="flex flex-col items-end">
                    <motion.div
                        initial={{ x: '100px' }}
                        animate={{ x: '0px' }}
                        transition={{ type: 'spring', duration: 1, bounce: 0.15 }}
                        className="absolute right-0 bg-white animate-pulse p-4 w-96 h-[41%] max-h-[50%]" 
                    />

                    <motion.div
                        initial={{ y: '50px' }}
                        animate={{ y: '0px' }}
                        transition={{ type: 'spring', duration: 1, bounce: 0.15 }}
                        className="absolute right-0 bottom-10 bg-white animate-pulse p-4 w-72 h-[25%] max-h-[33%]"
                    />
                </div>
            </div>
        )
    }

    return (
        <div ref={ref} className="relative mt-8 min-h-[80vh] flex w-full justify-center">
            {/* 1 out of 3 of freedom wall posts */}
            <div
                className="absolute left-0 bg-white p-4 w-96 h-full max-h-screen"
            >
                <p className="mb-4 text-4xl font-bold tracking-wide text-pink-700">
                    {items[0]?.content}
                </p>

                <div className="container">
                    {items[0]?.name ? (
                        <p className="text-gray-500 text-xl mb-2">Submitted by {items[0]?.name}</p>
                    ) : 
                        <p className="text-gray-500 text-xl mb-2">This is Posted Anonymously</p>
                    }
                    {items[0]?.name && (
                        <p className="text-gray-500 text-xl mb-2">Submitted by {items[0]?.name}</p>
                    )}
                    <p className="text-gray-500 text-sm mb-2">
                        Posted on {items[0]?.postdate.seconds}
                    </p>
                </div>

                <div className="absolute bottom-10 right-10">
                    <Link
                        href={`/post/${items[0]?.id}`}
                        className="flex items-center px-8 py-4 text-sm font-medium text-center text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300"
                    >
                        Open Post
                        <RightIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                    </Link>
                </div>
            </div>

            {/* main text */}
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <span className="text-xl tracking-wider">UPB Presents</span>
                <span className="text-[6rem] uppercase font-bold">The Campus <br /> Wall</span>
                <span className="text-xl opacity-75">Created by COMSCI@UP.BAG for Org Week 2024</span>
            </div>

            {/* remaining of 3 freedom wall posts */}
            <div className="flex flex-col items-end">
                <div className="absolute right-0 top-0 bg-white p-4 w-96 h-1/2 max-h-[50%]">
                    <p className="mb-4 text-4xl font-bold tracking-wide text-pink-700">
                        {items[1]?.content}
                    </p>

                    <div className="container">
                        {items[1]?.name ? (
                            <p className="text-gray-500 text-xl mb-2">Submitted by {items[1]?.name}</p>
                        ) : 
                            <p className="text-gray-500 text-xl mb-2">This is Posted Anonymously</p>
                        }
                        <p className="text-gray-500 text-sm mb-2">
                            Posted on {items[1]?.postdate.seconds}
                        </p>
                    </div>

                    <div className="absolute bottom-4 right-4">
                        <Link
                            href={`/post/${items[1]?.id}`}
                            className="flex items-center px-8 py-4 text-sm font-medium text-center text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300"
                        >
                            Open Post
                            <RightIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                        </Link>
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 bg-white p-4 w-72 h-1/3 max-h-[33%]">
                    <p className="mb-4 text-4xl font-bold tracking-wide text-pink-700">
                        {items[2]?.content}
                    </p>

                    <div className="container">
                        {items[2]?.name ? (
                            <p className="text-gray-500 text-xl mb-2">Submitted by {items[2]?.name}</p>
                        ) : 
                            <p className="text-gray-500 mb-2">This is Posted Anonymously</p>
                        }
                        <p className="text-gray-500 text-sm mb-2">
                            Posted on {items[2]?.postdate.seconds}
                        </p>
                    </div>

                    <div className="absolute bottom-0 right-0">
                        <Link
                            href={`/post/${items[2]?.id}`}
                            className="flex items-center px-8 py-4 text-sm font-medium text-center text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300"
                        >
                            Open Post
                            <RightIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPosts;