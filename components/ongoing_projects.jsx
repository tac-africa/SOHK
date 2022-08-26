/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import VideoComp from '../components/videoPlayer/video';
import Link from 'next/link';
import FormModal from './formModal';
import { useState } from 'react'


const OngoingProjects = () => {
  


  const pdfs =  {
    smart_policing: "https://www.dropbox.com/s/28ma51r9y0vc1pi/smart_policing_concept.pdf?dl=1",
    underground_economy: "https://www.dropbox.com/s/y4vilgjbrw8pk1n/The_Underground_Economy.pdf?dl=1",
    drone_compendium: "https://www.dropbox.com/s/acbrvnvz2ivjhiv/Drone_Compendium_For_TAC_Africa_compressed.pdf?dl=1",
    blockchain_and_crypto: "https://www.dropbox.com/s/sxe1q3q3s4ndx7t/Cryptocurrency_Brochure_Volume_1_1.pdf?dl=1"
  }

  const [ modalShow, setModalShow] = useState(false)
  const [ PDF, setPDF ] = useState('')
  const videoSrc = '/video/TAC_video.mp4'
  const videoThumbnail = '/vid_thumbnail.png'

  return (
    <>
    <FormModal PDF={PDF} setPDF={setPDF} modalShow={modalShow} setModalShow={setModalShow} />
    
      <div className="w-10/12 mx-auto">
        <div className="mx-auto w-10/12 text-center mb-12 lg:w-7/12">
          <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-6xl text-center mb-12">
            Ongoing <span className="text-primary font-bold text-6xl"> Projects </span>{' '}
          </h2>
          <p className="text-sm lg:text-lg">
            TAC Africa through her collaborations and partnerships
            curate, develop projects to help organization and industries
            benefit from emerging technology
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden ">
              <VideoComp videoSrc={videoSrc} videoThumbnail={videoThumbnail} />
            </div>
            <div className="lg:w-5/12 mx-auto lg:my-auto">
              <div id='irpas'>
                
                <h2  className="text-sweet_blue font-bold text-xl my-3">
                  Institute For Remotely Piloted Aircraft Systems
                  (IRPAS)
                </h2>
                <p className="text-xs  lg:text-base 2xl:text-xl">
                  {/* prides itself as well-established industry leader in
                  drone and counter drone systems, with its headquarters
                  in FCT Abuja Nigeria and an international office in.
                  Lagos, Nigeria. We are at the forefront of the
                  security industry and are proud to provide quality
                  Emerging Technology and Security Services & Solutions
                  tailored to meet our clients’ needs across various
                  industries */}
                  Institute for Remotely Piloted Aircraft System was
                  conceived to address the growing demand for digital
                  transformation. Our goal is to be the first Remotely
                  Piloted Aircraft training and assessment organization
                  in Nigeria. Our mission is to ensure that the training
                  and licensing of professional RPAS Pilot In Nigeria is
                  conducted with the highest standard to meet global
                  standard practice.
                </p>
              </div>

              <div>
                <Link href={'/irpas'}>
                  <a>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Read More
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div id='tac_community_hub' className="flex flex-col-reverse lg:flex-row mt-10">
            <div className="flex flex-col lg:w-6/12 lg:flex-row md:mt-10">
              <div className="mr-4 lg:my-auto">
                <h2 className="text-sweet_blue font-bold text-xl my-3">
                  TAC Community Hub
                </h2>
                <p className="text-xs lg:text-base 2xl:text-xl ">
                  <em className="text-lg lg:text-xl 2xl:text-2xl text-sweet_blue">
                    TAC Community Hub a.k.a. The School of Hard Knocks
                  </em>
                  {` is a cutting edge
                  Co-creation Hub for Sports, Research and Community
                  Development Activities for Kids of all age and adults
                  of all works of life. It is a subscription based
                  community and located within the suburb of the Federal
                  Capital Territory, Abuja – Nigeria.`}
                </p>
                <div>
                  <Link href={'/tac_community_hub'}>
                    <a>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Read More
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:ml-4 lg:w-6/12 mx-auto">
              <div className="lg:aspect-w-16 lg:aspect-h-9 rounded-sm overflow-hidden">
                <img src="/community/5.JPG" alt="community hub" />
              </div>
            </div>
          </div>

          <div id='smart_policing' className="flex flex-col lg:flex-row mt-10">
            <div className="w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden ">
              <div className="lg:aspect-w-14 lg:aspect-h-9 rounded-sm overflow-hidden object-cover">
                <img src="/smart_policing.png" alt="smart policing" />
              </div>
            </div>
            <div className="lg:w-5/12 mx-auto lg:my-auto">
              <div>
                <h2 className="text-sweet_blue font-bold text-xl my-3">
                  Smart Policing Concept
                </h2>
                <p className="text-xs  lg:text-base 2xl:text-xl">
                  Innovation is not just about the latest{' '}
                  {`gadget-it's`} about finding new ways to do things
                  better. innovation can take the form of new concepts,
                  new methods or new tools but innovation tends to work
                  best when all this forms come together to enable
                  police and law enforcement agencies to have greater
                  insight and impact than ever before. the innovation
                  that are shaping the future of law enforcement begin
                  with emerging technologies that support new concept of
                  operations, enabling the interventions, and
                  relationships that keep society safe.
                </p>
              </div>

              <div>
                <a
                  className="inline-flex items-center cursor-pointer py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    setModalShow(!modalShow);
                    setPDF(pdfs.smart_policing)
                  }
                }
                >
                  Download Guide
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div id='the_underground_economy' className="flex flex-col-reverse lg:flex-row mt-10">
            <div className="flex flex-col lg:w-6/12 lg:flex-row md:mt-10">
              <div className="mr-4 lg:my-auto">
                <h2 className="text-sweet_blue font-bold text-xl my-3">
                  The Underground Economy
                </h2>
                <p className="text-xs lg:text-base 2xl:text-xl ">
                  {` 
                    Changes in technology, society, and the law make new crimes possible. Attitudes are changing too.
                    The implications of these shifts are complex. This is seen in the way law enforcement and businesses
                    have had to adapt to deal with risks and opportunities presented by an ever-changing digital
                    environment..`}
                </p>
                <div>
                <a
                  className="inline-flex items-center cursor-pointer py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    setModalShow(!modalShow);
                    setPDF(pdfs.underground_economy)
                  }
                }
                >
                  Download Guide
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              </div>
            </div>

            <div className="lg:ml-4 lg:w-6/12 mx-auto">
              <div className="lg:aspect-w-16 lg:aspect-h-9 rounded-sm overflow-hidden">
                <img src="/community/underground_economy.png" alt="community hub" />
              </div>
            </div>
          </div>

          <div id='the_drone_book' className="flex flex-col lg:flex-row mt-10">
            <div className="w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden ">
              <div className="lg:aspect-w-14 lg:aspect-h-9 rounded-sm overflow-hidden object-cover">
                <img src="/community/The_Drone_book.png" alt="The_Drone_book" />
              </div>
            </div>
            <div className="lg:w-5/12 mx-auto lg:my-auto">
              <div>
                <h2 className="text-sweet_blue font-bold text-xl my-3">
                  The Drone Book
                </h2>
                <p className="text-xs  lg:text-base 2xl:text-xl">
                  The past decade has seen the adoption of drones as a tool in the armory of the police and other law enforcement agencies.
                  last year, the campaign group Drone Watch gathered information on police usage of drones in the uk. The response to freedom of
                  information requests sent to 48 police revealed the true extent of this phenomenon. 33 regional forces now directly own and 
                  use drones.

                </p>
              </div>

              <div>
                <a
                  className="inline-flex items-center cursor-pointer py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    setModalShow(!modalShow);
                    setPDF(pdfs.drone_compendium)
                  }
                }
                >
                  Download Guide
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div id='blockchain_and_cryptocurrency' className="flex flex-col-reverse lg:flex-row mt-10">
            <div className="flex flex-col lg:w-6/12 lg:flex-row md:mt-10">
              <div className="mr-4 lg:my-auto">
                <h2 className="text-sweet_blue font-bold text-xl my-3">
                  Blockchain And Cryptocurrency

                </h2>
                <p className="text-xs lg:text-base 2xl:text-xl ">
                  {` 
                    Decentralized finance leverages key principles of the Ethereum blockchain to
                    increase financial security and transparency, unlock liquidity and growth opportunities,
                    and support an integrated and standardized economic system.
                    Programmability. Highly programmable smart contracts automate execution and
                    enable the creation of new financial instruments and digital assets.`}
                </p>
                <div>
                <a
                  className="inline-flex items-center cursor-pointer py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    setModalShow(!modalShow);
                    setPDF(pdfs.blockchain_and_crypto)
                  }
                }
                >
                  Download Guide
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              </div>
            </div>

            <div className="lg:ml-4 lg:w-6/12 mx-auto">
              <div className="lg:aspect-w-16 lg:aspect-h-9 rounded-sm overflow-hidden">
                <img src="/community/blockchain_And_crypto.png" alt="community hub" />
              </div>
            </div>

            </div>

      </div>
      </div>
    </>
  );
};

export default OngoingProjects;
