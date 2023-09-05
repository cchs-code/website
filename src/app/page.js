// import Image from 'next/image'
import Hero from "./components/Hero";
import Section from "./components/Section";

export default function Home() {
  return (
    <main>
        <Hero title="Coding Club" description="Where we build cool stuff">
        <div className="mt-6">
          <a href="/join" className="py-2 px-4 bg-blue-400 border-b-4 border-slate-500 no-underline text-black">Join</a>
        </div>
        </Hero>
    </main>
  )
}
