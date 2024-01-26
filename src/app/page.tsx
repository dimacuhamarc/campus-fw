import Gallery from "@/modules/wall/gallery";
import Submit from "@/modules/wall/submit";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <span className="text-2xl">The Campus Wall</span>
                <span>Created by COMSCI@UP.BAG for Org Week 2024</span>
                <Submit />
            </div>
            <Gallery />
        </main>
    );
}
