/* eslint-disable react/jsx-key */
import Link from 'next/link';
import { useState } from 'react';

const DropDownButton = ({
  isFooter,
  setMenuState,
  menuState,
  label,
  content,
  i,
}) => {

  const [isShown, setIsShown] = useState(false);

  return (
    <li
      key={i}
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <button
        id="dropdownButton"
        className="capitalize hover:bg-blue-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm 2xl:text-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {label}{' '}
        { !isFooter && <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>}
      </button>
      {/* <!-- Dropdown menu --> */}
      {isShown && (
        <div
          id="dropdownMenu"
          className={` ${isFooter ? "inline-block " : "block "  }  bg-white z-10 absolute divide-gray-100 rounded shadow dark:bg-gray-700 `}
        >
          <ul className={` ${content[0].name ? "py-1 px-2" : undefined } text-sm divide-y text-gray-700 dark:text-gray-200`}>
            {content.map(({ name, href }, i) => (
              <li
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <Link href={href}>
                  <a
                    onClick={() => {
                      setIsShown(!isShown);
                      setMenuState(!menuState);
                    }}
                    className={`capitalize block ${content[0].name ? "px-4 py-2" : undefined } 2xl:text-lg text-[#393E46] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white `}
                  >
                    { name }
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropDownButton;
