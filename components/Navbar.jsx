import React,{ useState } from "react"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import logo from '../public/finwise.png'

export default function Navbar() {
   const [navbar , setNavbar] = useState(false)
   const {user} = useUser();
    return(
        <nav className="w-full shadow border ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="py-5">
            
              <Link href='/'>
                <h2 className="tracking-widest font-mono text-xl  rounded-sm  px-2 text-cyan-800">Fin<i><b>Wise</b></i></h2>
                </Link>
              
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
               
                <li className="text-cyan-900 font-serif font-semibold tracking-wide">
                  <Link href="/Learn">
                    MoneyWise
                  </Link>
                </li>
                <li className="text-cyan-900 font-serif font-semibold tracking-wide">
                  <Link href="/finchat">
                  Wise AI
                  </Link>
                </li>
                <li className="text-cyan-900 font-serif font-semibold tracking-wide">
                  <Link href="/Faq">
                  FAQ
                  </Link>
                </li>
                <li className="text-cyan-900 font-serif font-semibold tracking-wide">
                  <Link href="/About">
                    About
                  </Link>
                </li>
               
{!user && <li>
                    <Link href="/api/auth/login">
                        <button className="bg-blue-500 text-white px-3 rounded-xl py-1 font-serif tracking-wide">Sign Up</button>
                    </Link>
                </li>}

               
          {user && <li>
            <Link href='/api/auth/logout'>
            <button className="bg-blue-500 text-white px-3 rounded-xl py-1 font-serif tracking-wide">Logout</button>
            </Link>
            </li>}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}