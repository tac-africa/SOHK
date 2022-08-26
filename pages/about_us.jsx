/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const NewAbout = () => {

  const data =  [
    {
      imgUrl: '/icons8-combo-chart-100 (1).png',
      title: 'Big Data Expert',
      text: 'With our team of AI experts & Big Data consultants, we help companies move into the AI and machine learning-powered age.'
    },
    {
      imgUrl: '/icons8-google-web-search-500.png',
      title: 'Research & Development',
      text: 'We constantly study to innovate and introduce new products and services or to improve our existing services'
    },
    {
      imgUrl: '/intelligence.png',
      title: 'Data Exchange & Inspection',
      text: 'Our professionals and digital consultants specializes in inspection and testing of digital products and infrastructures.'
    },
  ]


  const backgroundImg = '/team/about_us1.jpg'

  return(
    <>
      <div className='m-0 p-0' >
        <HeroBanner text={'About us'} bannerOverlay activeLink={'About us'}  backgroundImg={ backgroundImg } />

        <div className='w-[80vw] mx-auto'  >
          <h2 className='text-sweet_blue font-semibold pt-1.5' >Our Background </h2> 
          <p className='text-base' >
            TAC NGO AFRICA was born out of an International Forum on Technologies, a high level meeting dedicated to “Technology for a Safer world. The first two editions were held in Lyon France, in April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and INTERPOL.</p>
            
            <p> Essentially, we are a non-governmental, bipartisan organisation, connecting law enforcement, subject matter experts, civil society to solve issues that affect our society. We work on the transformation of our law enforcement and judiciary. We make them more technologically enabled. Besides this, we solve problems through policy advocacy, research, training and capacity building and volunteering.
          </p>
          <p>
          Law enforcement officials today are facing a challenging and demanding operating environment. As society is increasingly connected and the world becoming borderless, technologies can help law enforcement to prevent, detect and investigate more efficiently, but at the same time, they also open up possibilities for criminals.
          <p>
          Technology Against Crime believes that its vision of a safer continent is possible through a multi-stake holder approach to innovation in policing.
          </p>
          Autonomous cars, Artificial Intelligence, robotics, drones and crypto-currencies in the dark web; these are becoming part of today’s reality, which intensifies the challenges of securing our cities, major events, borders and cyberspace.
          </p>
          <p>
          Welcome to TAC, where we leverage new technologies to shape the future of policing. Learn, share and experience the technological possibilities and state-of-the-art policing solution in action.
          </p>
        </div>
    </div>
    </>

  )
}

export default NewAbout;