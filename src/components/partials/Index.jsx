import React from "react";
import { Link } from "react-router-dom";
import Notify, { Success, Error } from "./Notify";


export default function Index() {

  const checkInternet = async () => {
    try {
      const online = await fetch("https://college-erp-server.vercel.app/");
      online.status === 200 ? Success("Connected") : Error("Not Connected")
    } catch (error) {
      Error("Check your internet")
      console.log(error);
    }
  }

  window.addEventListener("load", checkInternet);

  return (
    <>
      <div className="main">
        <div className="inner relative h-screen flex justify-center overflow-hidden">
          <div className="brandlogo absolute 2xsm:top-48 xsm:top-44 sm:top-44 md:top-44 xl:top-44 flex justify-center">
            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-4 mb-3 text-link dark:text-link-blue w-24 lg:w-28 self-center text-sm mr-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="blue"></circle><g stroke="currentColor" stroke-width="1" fill="white"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
          </div>
          <div className="py-96 2xsm:py-84 xsm:py-84">
            <div className="flex flex-wrap justify-center">
              <Link to={"/login"}><button className="bg-green-600 hover:bg-green-500 text-center font-medium text-slate-100 rounded-sm px-20 py-2 m-2">
                Login
              </button></Link>
              <Link to={"/register"}><button className="bg-yellow-700 hover:bg-yellow-600 text-center text-slate-100 font-medium rounded-sm px-20 py-2 m-2">
                Register
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <Notify />
    </>
  );
}
