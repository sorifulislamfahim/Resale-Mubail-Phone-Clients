import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error.webp";

const ErrorPage = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gray-100 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>
            <p className="mb-8">But dont worry, you can find plenty of other things on our home page.</p>

            <Link to="/">
              {" "}
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-gray-600">Back to Home</button>{" "}
            </Link>
          </div>
          <div class="max-w-lg">
            <img src={error} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;