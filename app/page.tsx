import Image from "next/image";
import Navbar from "@/components/Navbar";
import Typing from "@/components/Typing";
import Svg from "@/components/Svg";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center">
  <div className="md:mr-4">
    <Typing />
  </div>
  <div className="md:fixed md:right-32 mt-8 md:mt-36">
    <Svg />
  </div>
</div>
    </>
  );
}
