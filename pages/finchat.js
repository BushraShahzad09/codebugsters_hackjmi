import Head from 'next/head';
import React from 'react';
import { useState } from 'react';


export default function finchat() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setResult(data.result.replaceAll('\n', '<br />'));
    setLoading(false);
  }

  return (
    <div className="min-h-screen p-5 ">
      <Head>
        <title>Finance AI</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className=" shadow-md rounded p-5 mx-5 mt-32 flex justify-center items-center flex-col">
        
      <h1 className='tracking-wider font-serif font-bold italic text-2xl py-4 '>Ask Me Anything</h1>
      
      {!loading && <img src='/tree.gif' alt="af" className='w-40 h-44'/>}
          
           {loading && (
          <div className="mt-5 flex justify-center flex-col place-content-center items-center mr-24">
            <img src="/think_ai.gif" className="w-52 h-36" />
          </div>
        )}
        <form onSubmit={onSubmit} className='w-full'>    
           
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-11 "
            type="text"
            name="message"
            placeholder="Enter Your Query"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 flex place-content-center justify-center"
            type="submit"
            value="Result"
          >
            Get Result
          </button>
        </form>
      
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </main>
    </div>
  );
}
