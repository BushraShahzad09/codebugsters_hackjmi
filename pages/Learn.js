import React from "react";
import book from '../public/bookstory.jpeg'
import Image from "next/image";

import Link from "next/link";
export default function Learn() { 

    return(
       
        <div style={{
          backgroundImage: 'url(/story.png)',
          backgroundSize: 'cover',
          
        }}>
            <div className="flex place-content-center py-3 font-mono text-xl ">
            <h1>Learn in the most interactive way !</h1>
            </div>

            <div className="pt-3">
            <div className="flex place-content-start px-40 pt-11">
             <Image src={book} width={130} height={130} className="rounded-2xl  hover:animate-spin"/>
             </div>
             <div className="flex place-content-end px-96 pb-3">
             <Image src={book} width={130} height={130} className="rounded-2xl hover:animate-spin"/>
             </div>
             </div>


            <div className="pt-24">
            <div className="flex place-content-start px-[35rem] ">
                <Link href='/Magazine'>
            <Image src={book} width={130} height={130} className="rounded-2xl hover:animate-spin"/>
            </Link>
            </div>
            </div>



            <div className="py-40">
            <div className="flex place-content-start px-40 ">
             <Image src={book} width={130} height={130} className="rounded-2xl hover:animate-spin"/>
             </div>
             <div className="flex place-content-end px-96">
             <Image src={book} width={130} height={130} className="rounded-2xl hover:animate-spin"/>
             
             </div>
             
             </div>


             </div>
     
    );
}