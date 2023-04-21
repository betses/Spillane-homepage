import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-twitter.svg";

function App() {
  return (
    <>
      <div className="bg-[#f2e3e1] grid relative z-[1000] w-full">
        <div className="grid grid-cols-3 px-20 items-center pt-[2.125rem] mb-28 md:pt-[2.125rem]">
          <p className="flex flex-col items-center font-medium text-2xl leading-9">
            <span className="text-6xl font-bold">Spillane.</span> Property
          </p>
          <div className="w-max">
            <ul className="flex items-center text-white text-lg py-3 px-5 ml-32 bg-[#21364f] rounded-md">
              <li className="pr-5">Buy</li>
              <li className="border-x border-gray-600 px-5">Lease</li>
              <li className="border-r border-gray-600 px-5">Sold</li>
              <li className="pl-5">
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </li>
            </ul>
          </div>
          <ul className="flex py-3 px-5 space-x-5">
            <li className="pr-5">About Us</li>
            <li className="border-x border-gray-600 px-5">Resources</li>
            <li className="border-r border-gray-600 px-5">Contact Us</li>
            <li className="flex items-center space-x-3">
              <img src={facebook} className="h-3 w-3" />
              <img src={twitter} className="h-3 w-3" />
            </li>
          </ul>
        </div>
        <div className="flex items-center w-[calc(100%-3rem);] shadow-2xl border border-gray-400  max-w-[43.375rem] text-center mt-[2.875rem] md:mt-0 bg-white py-5 px-3 rounded-[.938rem] absolute top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <input
            type="text"
            id="text"
            className="w-full py-3 px-3 text-base ring-0 outline-none placeholder:text-lg placeholder:font-semibold"
            placeholder="Search Suburb or Address"
          />
          <div className="flex items-center px-5 border-x border-gray-300">
            <p className="w-20">For Sale</p>
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z" />{" "}
                <path d="M12 14l-4-4h8z" />{" "}
              </g>{" "}
            </svg>
          </div>
          <div className="px-5">
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
