function App() {
  return (
    <>
      <div className="bg-[#f2e3e1] grid relative z-[1000] w-full">
        <div className="flex justify-between px-20 items-center pt-[2.125rem] mb-28 md:pt-[2.125rem]">
          <p className="flex flex-col items-center font-medium text-2xl leading-9">
            <span className="text-6xl font-bold">Spillane.</span> Property
          </p>
          <ul className="flex text-white text-lg py-3 px-5 space-x-5 bg-[#21364f] rounded-md">
            <li>Buy</li>
            <li>Lease</li>
            <li>Sold</li>
            <li>Search</li>
          </ul>
          <ul className="flex py-3 px-5 space-x-5 ">
            <li>About Us</li>
            <li>Resources</li>
            <li>Contact Us</li>
            <li>Icon</li>
          </ul>
        </div>
        <div className="w-[calc(100%-3rem);]   max-w-[69.375rem] text-center mt-[2.875rem] md:mt-0 bg-white py-6 rounded-[.938rem] grid md:grid-cols-4 gap-6 leading-4 absolute top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:gap-0 md:text-left md:py-[2.375rem]">
          <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
            <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
              IP ADDRESS
            </h2>
            <div className="flex flex-wrap">
              <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 break-all">
                Adress
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
            <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
              LOCATION
            </h2>
            <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 ">
              Name
            </p>
          </div>
          <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
            <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
              TIME
            </h2>
            <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 break-all">
              Hello
            </p>
          </div>
          <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
            <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
              ISP
            </h2>
            <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 break-all">
              Hello
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
