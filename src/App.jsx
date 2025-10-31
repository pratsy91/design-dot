import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const engineerings = [
  "WEB & ECOMMERCE",
  "MOBILE APP",
  "BRAND DEVELOPMENT",
  "MEDIA ADVERTISING",
  "DIGITAL MARKETING",
  "DIGITAL TRANSFORMATION",
  "EMERGING TECHNOLOGIES",
  "IT SUPPORT & TESTING",
  "SOLUTIONS",
];

const leftEngs = [
  "Software Engineering",
  "Software consulting",
  "Software Development Services",
  "Enterprise Software Development",
  "Custom Software Development",
  "Software Product Development",
  "E-Learning Application",
  "ERP | CRM | HRM",
];

const rightEngs = [
  "Software Development Outsourcing",
  "Offshore Software Development",
  "Big Data Analytics",
  "Application Modernization Services",
  "API Development",
  "AI in Software",
];

function App() {
  return (
    <>
      <div className="">
        <div className="bg-[#141429] px-16 pt-8 relative ">
          <div className="pointer-events-none absolute -inset-1 grid-columns-bg mx-16 z-50"></div>
          <div className="absolute -bottom-[500px] left-1/2 -translate-x-1/2 max-w-[85%] w-full">
            <img
              src="./bottom-image.png"
              alt=""
              className="w-full h-auto block"
            />
            {/* <div className="pointer-events-none absolute -inset-1 grid-columns-bg"></div> */}
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div className="flex min-[1200px]:flex-row flex-col items-center gap-x-[50px] text-white">
              <button className="bg-[#FF850F] w-[189px] h-[42px] rounded-[40px] text-[16px]">
                FREE CONSULTATION
              </button>
              <div className="flex md:flex-row flex-col gap-x-[20px]">
                <p className="text-[14px] font-bold border-b-[3px] pb-2">
                  EXPERTISE
                </p>
                <p className="text-[14px] font-bold ">
                  AI -{" "}
                  <span className="bg-linear-to-r from-[#a0c3e2] to-[#ff850f] bg-clip-text text-transparent">
                    INGENUITY
                  </span>
                </p>
                <p className="text-[14px] font-bold">TECHNOLOGY</p>
                <p className="text-[14px] font-bold">CORPORATE</p>
                <p className="text-[14px] font-bold">CONTACT US</p>
                <p className="flex items-start gap-x-2 text-[14px] font-bold">
                  <img
                    src="./24-hour.png"
                    alt="24 hour"
                    className="relative bottom-1"
                  />
                  <span>+91</span> <span>9878282812</span>
                </p>
              </div>
            </div>
            <img src="./designdot-title.png" alt="" />
          </div>
          {/* section 2 */}
          <div className="flex flex-col bg-white pt-[28px] relative">
            <div className="flex px-[34px] pb-[60px] justify-center md:flex-row flex-col gap-x-20">
              <div>
                <img src="./freepik.png" alt="" />
                <div className="text-black mt-[32px] text-[20px] font-bold">
                  <p className="leading-none text-[24px] uppercase">
                    Engagement Models
                  </p>
                  <p className="text-[16px]">
                    <span>Hiring Software Developers</span>
                    <span className="font-normal">
                      , It only takes a few clicks
                    </span>
                  </p>
                  <ul className="flex flex-col gap-y-[12px] mt-8 ml-[50px] max-w-[350px]">
                    <li className="leading-none uppercase">
                      Dedicated Teams of Developers
                      <br />
                      <span className="font-normal text-[16px] leading-tight block lowercase">
                        <span className="uppercase">H</span>ire developers who
                        are committed to your project.
                      </span>
                    </li>
                    <li className="leading-none uppercase">
                      Outsource your work
                      <br />
                      <span className="font-normal text-[16px] leading-tight block lowercase">
                        <span className="uppercase">G</span>et a solution that
                        is tailored to your needs.
                      </span>
                    </li>
                    <li className="leading-none uppercase">
                      staff augmentation
                      <br />
                      <span className="font-normal text-[16px] leading-tight block lowercase">
                        <span className="uppercase">C</span>lose the talent gap
                        on your internal staff
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-x-10 min-[1200px]:flex-row flex-col">
                <div className="mt-4">
                  <span className="font-bold leading-[30px] mb-0 text-[16px] px-2 py-1 rounded text-white bg-[#00539C] ">
                    ENGINEERING
                  </span>
                  <ul className="flex flex-col gap-y-[20px] mt-6 ml-4">
                    {engineerings.map((engineering, index) => (
                      <li
                        key={`${engineering}-${index}`}
                        className="flex items-center w-[300px] justify-between text-[#00539C] font-bold"
                      >
                        <span>{engineering}</span>
                        <img
                          src="./vector.png"
                          alt=""
                          className="h-[5px] w-[5px]"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#00539C] h-[534px] w-[2.5px] hidden min-[1200px]:block"></div>
                <div className="mt-4 min-w-[400px]">
                  <p className="text-[#00539C] font-bold text-[16px]">
                    ENGINEERING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="border-b-2 w-[300px] inline-block border-[#00539C]"></span>
                  </p>
                  <div className="flex justify-between md:flex-row flex-col mt-[70px] font-medium text-[#00539C] text-[12px]">
                    <div className="flex flex-col gap-y-[24px]">
                      {leftEngs.map((leftEng, index) => (
                        <p key={`${leftEng}-${index}`}>{leftEng}</p>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-[24px]">
                      {rightEngs.map((rightEng, index) => (
                        <p key={`${rightEng}-${index}`}>{rightEng}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[120px] w-full overflow-hidden ">
              {/* Footer image filling the container */}
              <img
                src="./footer.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
              />

              {/* Black overlay above the image */}
              <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

              {/* Metrics content over the image */}
              <div className="absolute inset-0 z-20 flex px-[60px] justify-between font-bold text-white items-center">
                <div className="flex flex-col items-center">
                  <p className="text-[24px]">20 +</p>
                  <p className="text-[12px] font-bold">YEARS IN BUSINESS</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[24px]">900 +</p>
                  <p className="text-[12px] font-bold">CLIENT'S WORLDWIDE</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[24px]">1700 +</p>
                  <p className="font-bold text-[12px]">PROJECT EXECUTED</p>
                </div>
                <div className="flex flex-col">
                  <p>
                    Want to consult with us on a project but need a quote? For
                    an estimate, click this button
                  </p>
                  <p className="font-normal text-[12px]">
                    Start with a free exploratory call—we'll listen to your
                    needs and suggest tailored strategies, obligation-free.
                  </p>
                </div>
                <img src="./arrow-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen px-16 relative">
          <div className="pointer-events-none absolute -inset-1 grid-columns-bg mx-16 z-50"></div>
        </div>
      </div>
    </>
  );
}

export default App;
