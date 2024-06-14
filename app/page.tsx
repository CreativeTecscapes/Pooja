import Image from "next/image";
import Navbar from "@/components/Navbar";
import Typing from "@/components/Typing";
import Svg from "@/components/Svg";
import About from "@/components/About";
import Projects from "@/components/Projects"
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center">
        <div className="lg:w-3/5 md:mr-4 w-auto">
          <Typing />
        </div>
        <div className="md:right-32 mt-8 md:mt-36 lg:ml-0 ml-6">
          <Svg />
        </div>
      </div>
      <About />
      <Projects />
    </>
  );
}
