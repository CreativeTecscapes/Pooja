"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I am Pooja Bangar. I am a Graphic Gesigner by profession, I am a freelancer as well, I have completed my education in Graphic Designing and now moving for my higher studies in US
I am passaniote about my work and my hobbies are singing dancing.I am Pooja Bangar. I am a Graphic Gesigner by profession, I am a freelancer as well, I have completed my education in Graphic Designing and now moving for my higher studies in US
I am passaniote about my work and my hobbies are singing dancing.I am Pooja Bangar. I am a Graphic Gesigner by profession, I am a freelancer as well, I have completed my education in Graphic Designing and now moving for my higher studies in US
I am passaniote about my work and my hobbies are singing dancing.
`;

export default function TextGenerateEffectDemo() {
  return(
    <div className="mt-32">
        <div className="flex justify-center items-baseline align-middle mt-10 text-3xl text-[#3B82F6]"><strong>About Me</strong></div>
        <div className="text-center text-sm lg:px-40 px-7 mt-10">
           <TextGenerateEffect words={words}/>
        </div>
    </div>
   
  ) 
}
