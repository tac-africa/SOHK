/* eslint-disable react/jsx-key */
const Volunteer = () => {
  
  const smallCardStyles = {
    background: 'rgba(51,47,47, 0.3)',
    border: '1px solid #fff',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    backdropFilter: 'blur(9.8px)',
  };

  return (
    <div
      className="h-[48rem] lg:h-96 flex  justify-center items-center bg-center bg-cover bg-no-repeat mt-20 w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5, 0, 32, 0.697), rgba(5, 0, 32, 0.697)), url('/team/volunteer.jpg')",
      }}
    >
      <div className="w-10/12 flex flex-col lg:flex-row space-y-4 lg:space-x-8 lg:space-y-0 justify-center ">
        <div className="p-4 h-96 md:h-72 xl:mr-0  max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
          <h5 className="text-primary ">Want to join with us?</h5>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Become a proud volunteer!
            </h5>
          </a>
          <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">
            TAC Africa volunteers are representative of our
            communities. We are always looking for more volunteers
            with diverse experiences, like people living in rural
            areas, people of color and of all races.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            join us today
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

        <div className="w-full xl:ml-0  grid grid-cols-2 gap-4 lg:px-0 md:max-w-xl">
          <div
            className="rounded-md h-32 text-white text-center pt-8"
            style={{ ...smallCardStyles }}
          >
            <h5 className="text-light m-0">280+</h5>
            <p className="">community members</p>
          </div>
          <div
            className="rounded-md h-32 text-white text-center pt-8"
            style={{ ...smallCardStyles }}
          >
            <h5 className="text-light m-0">17+</h5>
            <p className="">African partners</p>
          </div>
          <div
            className="rounded-md h-32  text-white text-center pt-8"
            style={{ ...smallCardStyles }}
          >
            <h5 className="text-white m-0">23+</h5>
            <p className="">Trainings and hackathons</p>
          </div>
          <div
            className="rounded-md h-32  text-white text-center pt-8"
            
          >
            <h5 className="text-light m-0">
              {/* 23+ */}
              </h5>
            <p className="">
              {/* Trainings and hackathons */}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
