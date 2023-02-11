import React from "react"
import Head from "next/head"

const Home = () => {
 
  return (
    <div>
      <Head>
        <title>F'eD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex place-content-center items-center mt-52 mx-auto ">
        <img src="/tree.gif" alt="Text Animated" className="hover:animate-bounce"/>
     </div>
     
      <div className="flex place-content-end items-end mt-16 mx-auto">
        <img src="/Landing.gif" alt="Text Animated" />
      </div>
    </div>
  )
}

export default Home;
