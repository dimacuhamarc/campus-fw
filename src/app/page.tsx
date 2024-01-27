'use client';

import Gallery from "@/modules/wall/gallery";
import Submit from "@/modules/wall/submit";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start">
            <div className="relative mt-4 w-full max-w-7xl flex items-center justify-between">
                <span className="text-3xl font-semibold">The Campus Wall</span>
                <div className="tracking-wider">
                    <Submit />
                </div>
            </div>

            <div className="mt-4">
                <Gallery />
            </div>
        </main>
    );
}
