import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div class="flex flex-wrap place-items-center">
                <section class="relative mx-auto">
                    
                    <nav class="flex justify-between bg-gray-900 text-white w-screen">
                        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                            <a class="text-3xl font-bold font-heading" href="#">
                                {/* <img class="h-9" src="logo.png" alt="logo"/>  */}
                                TEAMSYNC.AI
                            </a>
                           
                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><a class="hover:text-gray-200" href="#">Home</a></li>
                                <li><a class="hover:text-gray-200" href="#">Explore</a></li>
                                <li><a class="hover:text-gray-200" href="#">Collections</a></li>
                                <li><a class="hover:text-gray-200" href="#">Contact Us</a></li>
                            </ul>
                            
                            <div class="hidden xl:flex items-center space-x-5 items-center">
                                
                                {/* <a class="hover:text-gray-200" href="#">Sign In</a>
                                <a class="hover:text-gray-200" href="#">Log In</a> */}

                                <button className="btn">Login</button>
                                <button className="btn">Signin</button>

                                {/* <a class="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a> */}

                            </div>
                        </div>
                        
                        
                        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </nav>

                </section>
            </div>
            {/* <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" />
                    </a>
                </div>
            </div> */}
        </>
    )
}

export default Navbar
