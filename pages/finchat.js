import Head from 'next/head';
import React from 'react';
// import Faq from '@/components/Faq';
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
    <div className="bg-gray-200 min-h-screen p-5 " style={{
        backgroundImage: 'url(/bgpg.png)',
        backgroundSize: 'cover',
        
      }}>
      <Head>
        <title>Finance AI</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className="bg-white shadow-md rounded p-5 mx-5 mt-10 flex justify-center items-center">
        <form onSubmit={onSubmit}>
          <label className="flex justify-center items-center font-bold mb-2 text-green-600 text-xl">Enter Your Query</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="message"
            placeholder="Enter Finance"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 flex "
            type="submit"
            value="Generate ideas"
          >
            Submit
          </button>
        </form>
        {loading && (
          <div className="mt-5 flex justify-center">
            <img src="/bhauuuu.gif" className="w-44 h-32" />
          </div>
        )}
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </main>
      {/* <Faq /> */}
    </div>
  );
}
