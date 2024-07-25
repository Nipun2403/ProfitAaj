import React from "react";
import Form from "./Form/Form";
import left from "./assets/leftSide.png";
import logo from "./assets/logo.png";
// import Form3 from "./Form/Form3";

const Home = () => {
  return (
    <div className="sm:p-4 sm:pt-0">
      <nav className="mb-2">
        <img
          src={logo}
          className="rounded-lg mx-auto sm:mx-0 w-40 h-15 sm:w-28 sm:h-16"
        />
      </nav>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 align-middle content-center">
        <div className=" sm:flex text-center sm:items-center">
          {/* <img src={left} className='w-full h-auto max-w-xs sm:max-w-md' /> */}

          <p className="text-center text-3xl sm:text-7xl ">
            Building tech solutions for E-Commerce Sellers{" "}
          </p>
        </div>
        <div className="basis-3/4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
