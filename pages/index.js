import React from "react"
import Head from "next/head"
import { useState,useEffect } from "react";



const LoadingAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div style={{ display: loading ? "block" : "none" }} className="bg-cover h-screen w-screen my-auto mx-auto place-content-center mt-56">
      <img src="/giphy.gif" alt="Loading animation" />
    </div>
  );
};


const Home = () => {

  return (
    <div>
      <LoadingAnimation />
      <Head>
        <title>F'eD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex place-content-center items-center mt-52 mx-auto ">
        <img src="/tree.gif" alt="Text Animated" className="hover:animate-none"/>
     </div>
     
      <div className="flex place-content-center items-center mt-16 mx-auto">
        <img src="/Landing.gif" alt="Text Animated" />
      </div>
    </div>
  )
}

export default Home;
