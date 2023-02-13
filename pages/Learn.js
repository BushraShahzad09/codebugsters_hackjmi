import React from "react";
import book from '../public/bookstory.jpeg'
import Image from "next/image";
import Link from "next/link";
export default function Learn() {

    return (
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-2xl  font-serif tracking-wide text-cyan-900">Choose Your <i><b>Way of Learning</b></i> </h1>
          <div className="grid grid-cols-2 gap-10 mt-10 place-content-center items-center justify-center ">
            <div className="grid grid-rows-2">
              <Link href="/Story1">
                <img
                  src="/ask.png"
                  alt="story"
                  className="w-64 h-64 object-cover rounded-lg mr-56"
                />
              </Link>
              <h1 className="text-xl text-center mt-6 tracking-wider text-cyan-900 py-4 ">
              <i><b>  Story Mode: </b></i><br /><span >Learn Everything about Finance In An Interactive Way Through tutorials and quizzes!</span>
              </h1>
            </div>
            <div className="grid grid-rows-2 ">
              <Link href="/Magazine">
                <img
                  src="/magazin.gif"
                  alt="magazine"
                  className="w-64 h-64 object-cover rounded-lg mr-56"
                />
              </Link>
              <p className="text-xl text-center mt-6 tracking-wide text-cyan-900 py-4 ">
               <i><b> Magazine:</b></i> <br /><span>Read our handpicked Articles so you won't waste time finding your favourite Articles</span>
              </p>
            </div>
          </div>
        </div>
      );
      
}