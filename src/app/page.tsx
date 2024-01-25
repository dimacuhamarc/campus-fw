import Gallery from "@/components/Gallery";
import SubmitPost from "@/components/SubmitPost";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl">CAMPUS FREEDOM WALL</h1>
        <h3>Created by COMSCI@UP.BAG for Org Week 2024</h3>
      </div>
      <Gallery/>
      <SubmitPost/>
    </main>
  );
}
