/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx';

const Header = ({ mobile, desk }) => {
  return (
    <div className={`${desk || mobile} `}>
      <span>
        <h2 className=" text-2xl md:text-3xl font-bold text-deep_blue ">
          {'Dr. Jerry Akubo'}
          <span className="text-lg md:text-xl">{' CEH,CCI,MCITP,'}</span>
        </h2>
      </span>
      <span>
        <h2 className=" text-xl font-semibold text-deep_blue">{'CEO'}</h2>
      </span>
      <span>
        <h1 className=" font-bold text-3xl md:text-4xl mb-2 md:mb-12 text-sweet_blue">
          {'Technology Against Crime Initiative, Africa (TAC Africa)'}
        </h1>
      </span>
    </div>
  );
};

const Founder = () => {
  const backgroundImg = '/founder_banner.png';
  const desk = 'hidden lg:block mx-auto w-screen w-5/6';
  const mobile = 'block lg:hidden w-screen mt-4 px-3';

  return (
    <>
      <HeroBanner
        bannerOverlay
        activeLink={'THE FOUNDER'}
        text={'The founder'}
        backgroundImg={backgroundImg}
      />
      <div className="w-screen  ">
        <div className="md:m-8 container">
          <Header desk={desk} />

          <div className="flex flex-col lg:flex-row mt-12 w-full">
            <div className="w-screen ">
              <img
                className="object-fit md:mt-12"
                src="/Jerry-Akubo-21.png"
                alt="founder"
              />
            </div>

            <Header mobile={mobile} />

            <div className="mt-8 px-6 lg:text-lg">
              <p>
                Dr. Jerry Akubo founded TAC Africa as a futurist
                oriented, Law Enforcement Centric NGO, borne out of an
                International Forum on Technologies – a high level
                meeting dedicated to Technologies for a Safer World,
                co-organized by INTERPOL and the Ministry of Interior
                in Lyon, France in 2013. The NGO was officially
                registered in Abuja, Nigeria in 2016. Prior to this,
                he worked over a decade and half as the National
                Technical Officer for INTERPOL NCB Abuja under the
                auspices of the Nigeria Police Force.
              </p>

              <p>
                Dr. Akubo has been recognized by the INTERPOL Global
                Complex for Innovation and the Directorate of
                Innovation Center, Singapore for his exemplary
                service, partnership and contributions having actively
                attended and participated in over eight (8) INTERPOL
                General Assemblies and Eight (8) INTERPOL World
                Congress in a roll amongst other high level technical
                meetings and presentation he organized on extending
                INTERPOL Secured Communications Network to authorized
                Law Enforcement Agencies across the African Region.
              </p>
            </div>
          </div>
          <div className="my-12 px-6 lg:text-lg">
            <p>
              He is a frequent speaker on Emerging Technologies and
              the maximal utilization of INTERPOL tools by Law
              Enforcement Agencies within the African Region while
              pushing a number of research and developmental projects
              to improve the technical know-how and easy accessibility
              of tools and technologies for Law Enforcement Agents
              especially the front line officers.
            </p>

            <p>
              Dr. Akubo is an evangelist on the use of Innovative
              Aerial Surveillance, remote sensing and emerging
              technology to tackle most unique set of challenges the
              African region is facing including on the one side.
              Transnational Organized Cyber Crime and on the other,
              battling insurgents and terrorist group often domiciled
              in very remote & inaccessible locations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
