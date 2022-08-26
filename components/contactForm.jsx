/* eslint-disable react/jsx-key */
import {
  faPhone,
  faLocationDot,
  faPaperPlane,
  faGlobeAfrica,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Contact( { status, message, onValidated } ) {

  console.log(status)

  const [ inputValue, setInputValue ] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
    isSubscribed: false
  })

  const handleInputChange = (key, e) => {
    // e.preventDefault()
    setInputValue( {...inputValue, [key ] : e.target.value } )

  }

  const handleChecked = (key, e) => {
    setInputValue( {...inputValue, [key ] : e.target.checked } )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    inputValue.first_name &&
    inputValue.last_name &&
    inputValue.email &&
    inputValue.email.indexOf('@') > -1 &&
    onValidated({
      EMAIL: inputValue.email,
      MERGE1: inputValue.first_name,
      MERGE2: inputValue.last_name, 
    });


  }


  return (
    <div>
      <section className=" p-[10rem] ">
        <div className="lg:w-[70vw] ">
          <div className="flex justify-center ">
            <div className="flex flex-col lg:w-10/12 md:w-full ">
              <div className=" w-full shadow-lg shadow-gray-500/50 lg:rounded-lg">
                <div className="flex flex-wrap -mr-4 -ml-4 no-gutters">
                  <div className="relative w-full pr-4 pl-4 flex items-stretch lg:max-w-[58.33333%]">
                    <div className="bg-white w-full p-md-5 p-4">
                      <h3 className="mb-4 text-3xl font-semibold">
                        Get in touch
                      </h3>
                      {/* <div id="form-message-warning" className="mb-4"></div> 
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div> */}
                      <form
                        // method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="mc__form"
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <div className="flex flex-wrap -mr-4 -ml-4 p-0 m-0 ">
                          <div className="flex md:flex-col w-6/12 mb-4 pr-1 m-0">
                            {/* <div className="mb-4 w-4/12 "> */}
                            <input
                              type="text"
                              className="h-12 w-full  text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                              name="first_name"
                              id="name"
                              value={inputValue.first_name}
                              onChange={(e) => handleInputChange('first_name', e)}
                              placeholder="first_name"
                            />
                            {/* </div> */}
                          </div>

                          <div className="flex md:flex-col w-6/12 mb-4 pr-1 m-0">
                            {/* <div className="mb-4 w-4/12 "> */}
                            <input
                              type="text"
                              className="h-12 w-full  text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                              name="last_name"
                              id="name"
                              value={inputValue.last_name}
                              onChange={(e) => handleInputChange('last_name', e)}
                              placeholder="last_name"
                            />
                            {/* </div> */}
                          </div>

                          <div className="flex md:flex-col w-full  mb-4 m-0">
                            {/* <div className="mb-4 w-full "> */}
                            <input
                              type="email"
                              className="h-12 w-full text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                              name="email"
                              id="email"
                              value={inputValue.email}
                              onChange={(e) => handleInputChange( 'email', e)}
                              placeholder="Email"
                            />
                            {/* </div> */}
                          </div>
                          <div className="flex md:flex-col w-full p-0 m-0">
                            <div className="mb-4 w-full">
                              <input
                                type="text"
                                className="h-12 w-full text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                                name="subject"
                                id="subject"
                                value={inputValue.subject}
                              onChange={(e) => handleInputChange('subject', e)}
                              placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="flex md:flex-col w-full p-0 m-0">
                            <div className="mb-4">
                              <textarea
                                name="message"
                                className="h-48 w-full text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                                id="message"
                                cols="30"
                                value={inputValue.message}
                                onChange={(e) => handleInputChange('message', e)}
                                rows="7"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>

                          <div>
                          <div className="flex items-center">
                              <input value={inputValue.isSubscribed} id="checked-checkbox" type="checkbox"
                              name='isSubscribed'
                                      onChange={(e) => handleChecked( 'isSubscribed', e)}
                               className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label forHtml="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">subscribe to our news letter</label>
                          </div>
                          </div>
                          
                          <div className="flex md:flex-col w-full p-0 m-0">
                            <div className="mb-4">
                              <button
                                type="submit"
                                value="submit"
                                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Send Message 
                                { status == 'sending' && (<i className={` ml-2 fa fa-spinner fa-spin`} />) } 
                                { status == 'error' && (<i className={` ml-2 fa fa-close`} />) } 
                                { status == 'success' && (<i className={` ml-2 fa fa-check-circle text-white `} aria-hidden="true" />) }
                              </button>
                              <div className="float-left w-full hidden text-base font-bold py-2 px-0"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className=" flex  md:flex-col lg:w-5/12 items-stretch ">
                    <div className="grow -my-6 text-white bg-primary w-full p-10 lg:rounded-lg">
                      <h3 className="mb-4 mt-6 text-white text-3xl font-semibold">
                        Contact us
                      </h3>
                      <div className="w-full mb-6 flex items-start ">
                        <div className=" px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <div className="pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Address:
                            </span>{' '}
                            Plot 239 Mafemi Crescent, Besides Daily
                            Trust Newspapers, Utako District, Abuja,
                            Nigeria. 900112
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-6 flex items-start">
                        <div className=" px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className=" pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Phone:
                            </span>{' '}
                            <a
                              className="text-white"
                              href="tel://1234567920"
                            >
                              +234 706 224 7581
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-6 flex items-start">
                        <div className=" px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                        <div className=" text-white pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Email:
                            </span>{' '}
                            <a
                              className="text-white"
                              href="mailto:info@yoursite.com"
                            >
                              secretariat@tacafrica.org
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-6 flex items-start">
                        <div className="px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faGlobeAfrica} />
                        </div>
                        <div className=" pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Website:
                            </span>{' '}
                            <Link href="/">
                              <a className="text-white">
                                tacafrica.org
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
