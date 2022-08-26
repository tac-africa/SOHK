/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { data } from '../../../pages/api/navLinks.js';
import { useState, useCallback } from 'react';
import DropDownButton from '../../dropdownButton.jsx';

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleButton = useCallback(() => {
    setMenuState(( menuState ) => !menuState );
  }, []);

  const navBarStyles = {
    backdropFilter: 'blur(0px) saturate(100%)',
    WebkitBackdropFilter: 'blur(0px) saturate(100%)',
    background: ' rgba(255, 255, 255, 0.22)',
    border: '1px solid rgba(209, 213, 219, 0.3)',
  };

  return (
    <nav
      className={` px-2 sm:px-4 py-2.5 ${
        menuState && 'h-screen'
      } lg:h-full`}
      style={{ ...navBarStyles }}
    >
      <div
        key={data.label}
        className="xl:px-12 flex flex-wrap justify-between items-center mx-auto"
      >
        <Link key={data.label} href={'/'}>
          <a key={data.label}>
            <img
              src="/SOHK_logo.png"
              className="mr-3 h-20 "
              alt="tac Logo"
              key={data.label}
            />
          </a>
        </Link>
        <button
          onClick={toggleButton}
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          key={data.label}
        >
          <span
            className="visible lg:hidden"
            style={{ zIndex: '100' }}
            onClick={toggleButton}
            key={data.label}
          >
            <button
              className={[
                'hamburger hamburger--collapse ',
                menuState && 'is-active',
              ].join(' ')}
              onClick={toggleButton}
              type="button"
              key={data.label}
            >
              <span key={data.label} className="hamburger-box text-sweet_blue">
                <span
                  key={data.label}
                  className="hamburger-inner text-sweet_blue"
                >
                  
                </span>
              </span>
            </button>
          </span>
        </button>

        <div
          className={`${
            menuState == true ? '' : 'hidden'
          }  md:isvisible w-full lg:block lg:w-auto`} //md:w-auto
          id="mobile-menu"
          key={data.label}
        >
          <ul
            className="flex flex-col mt-4 lg:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
            key={data.label}
          >
            {data?.map(({ label, content, type, details }, i) => (
              <>
                {content.length > 1 ? (
                  <>
                    <DropDownButton
                      label={label}
                      content={content}
                      setMenuState={setMenuState}
                      menuState={menuState}
                    />
                  </> //dropdown
                ) : label == 'contact' ? (
                  <Link href="#contact">
                    <a key={data.label}>
                      <button
                        type="button"
                        className="capitalize text-black bg-[#FFC600] hover:text-[#FFC600] hover:bg-black border border-primary  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 2xl:text-lg px-5 py-2.5 text-center mr-2 mb-2"
                        key={data.label}
                      >
                        {label}
                      </button>
                    </a>
                  </Link>
                ) : label == 'Events' ? (
                  <Link href='/tac_events'>
                    <a key={data.label}>
                    <button            
                      type="button"
                      className="capitalize mt-80 lg:mt-0 py-2.5 px-5 mr-2 mb-2 text-sm 2xl:text-lg font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:text-[#FFC600] hover:bg-black focus:z-10 focus:ring-4 focus:ring-gray-200"
                      key={data.label}
                    >
                      {label}
                    </button>
                    </a>
                  </Link>
                ) : 
                (
                  <li>
                    <a
                      key={i}
                      href={label == 'Home' ? '/' : '#contact'}
                      className="capitalize block py-2 pr-4 pl-3 text-gray-700 border-b 2xl:text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {label}
                    </a>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
