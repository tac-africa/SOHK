/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';

const  backgroundImg = '/projects/mobile_home.png'


export default function LandingPage() {
  return (
    <section className="w-full">
      <div className={'h-[90vh] bg-fixed bg-center bg-cover bg-mobileBG lg:bg-desktopBG ' }>
        <div className='w-full h-full flex flex-col justify-end lg:justify-center items-end ' style={{background: 'rgba(3, 2, 3, 0.49)' }}>
          <div className='mx-8 mb-5 lg:mb-0 lg:w-6/12'>
            <h1 className='   poppins text-white font-bold z-50 mr-12 '
            >
              <p className='text-5xl'>School Of </p>
              <p className='text-[#FFC600] text-7xl uppercase'>Hard Knocks</p>
            </h1>
            <p className='text-xl text-white w-10/12'>The School of Hard Knocks is a cutting edge Co-creation Hub for Sports, Research and Community Development Activities for Kids of all age and adults of all works of life. </p>
              <Link href="/">
                <a  >
                  <button
                    type="button"
                    className="capitalize text-black bg-[#FFC600] hover:text-[#FFC600] border border-primary hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm 2xl:text-lg px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    {'Learn More'}
                  </button>
                </a>
              </Link>    
          </div>
        </div>
      </div>
    </section>
  );
}
