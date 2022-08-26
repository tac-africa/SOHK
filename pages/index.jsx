/* eslint-disable react/jsx-key */
import Head from 'next/head'
import LandingPage from '../components/landingPage.jsx'
import Activities from '../components/activities'
import PeopleAreSaying from '../components/PeopleAreSaying.jsx'
import Partners from '../components/Partners.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Contact from '../components/Contact.jsx'


export default function Home() {
  return (
    <div >
      <Head>
        <title>TAC Africa</title>
        <meta name="description" content="TAC Africa Website" />
        <link rel="icon" href="/TAC_LOGO.png" />
      </Head>
      <LandingPage />
      <AboutUs />
      <Activities text2={'News'} />
      <PeopleAreSaying />
      {/* <Partners /> */}
      <Contact />
    </div>
  )
}
