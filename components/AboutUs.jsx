/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className='flex flex-col justify-center mx-auto w-[90vw] lg:w-8/12 h-screen relative'>
      <div className='h-[450px] w-[450px] bg-red-300 absolute -z-10 rounded-full -top-32 -left-64' ></div>
      <div>      
        <h2 className='text-black font-bold text-4xl uppercase mb-6'>About Us</h2 >
        <p className='text-xl font-bold sans '>
          The School of Hard Knocks is a cutting edge Co-creation Hub for Sports, Research and Community Development Activities for Kids of all age and adults of all works of life. It is a subscription based community and located within the suburb of the Federal Capital Territory, Abuja – Nigeria.
          Our Motto is <span className='fancy_underline relative'> ‘Work’,</span><span className='fancy_underline relative'> ‘Play’ </span> and <span className='fancy_underline relative'> ‘Earn’ </span>. Our Objective is Networking and Co-Creation. And our mission is to replicate similar concept in as much community as possible within Nigeria using this as a pilot project.
        </p>
          <div className='flex mt-8 w-full'>
            <Link href="/blog">
              <a  >
                <button
                  type="button"
                  className="capitalize text-black bg-[#FFC600] hover:text-[#FFC600] border border-primary hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm 2xl:text-lg px-3 py-2.5 text-center mr-2 mb-2 "
                >
                  { 'Become a member' }
                </button>
              </a>
            </Link>
          </div>
      </div>
    </div>
  )
}
