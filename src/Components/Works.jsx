import React from 'react';

const Works = () => {
  return (
    <div className="px-5">
      <hr />
      <div>
        <h1 className="py-10 text-center font-bold text-2xl">How it Works?</h1>
      </div>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row lg:flex-col items-center border border-gray-300 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200">
          <img
            src="https://img.freepik.com/free-vector/web-design-production-maintenance-websites-web-graphic-interface-design-responsive-website-software-engineering-development-colorful-icon_335657-2699.jpg"
            alt="website"
            className="w-1/3 md:w-[80px] lg:w-[150px] aspect-square md:mr-4 lg:mr-0 mb-4 md:mb-0 lg:mb-4"
          />
          <div className="flex flex-col text-center">
            <h3 className="text-lg font-semibold mb-2">Book a Maid</h3>
            <p className="text-sm text-gray-700">
              Choose from a range of services like daily cleaning, cooking, laundry, and more—all delivered by reliable, experienced helpers.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row lg:flex-col items-center border border-gray-300 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200">
          <img
            src="https://img.freepik.com/free-vector/woman-setting-her-dates-appointment-booking_23-2148552955.jpg"
            alt="schedule"
            className="w-1/3 md:w-[80px] lg:w-[150px] aspect-square md:mr-4 lg:mr-0 mb-4 md:mb-0 lg:mb-4"
          />
          <div className="flex flex-col text-center">
            <h3 className="text-lg font-semibold mb-2">Schedule Service</h3>
            <p className="text-sm text-gray-700">
              Select your preferred time slot and duration for the service, ensuring it fits your schedule.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row lg:flex-col items-center border border-gray-300 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200">
          <img
            src="https://img.freepik.com/free-vector/modern-space-rocket-with-realistic-design_23-2147902456.jpg"
            alt="service"
            className="w-1/3 md:w-[80px] lg:w-[150px] aspect-square md:mr-4 lg:mr-0 mb-4 md:mb-0 lg:mb-4"
          />
          <div className="flex flex-col text-center">
            <h3 className="text-lg font-semibold mb-2">Get Instant Service</h3>
            <p className="text-sm text-gray-700">
              Receive on-demand, reliable services for your home needs with instant booking confirmation.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default Works;
