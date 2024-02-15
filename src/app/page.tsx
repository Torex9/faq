"use client";

import CustomDisclosure from "./components/customDisclosure";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative flex flex-col justify-center min-h-screen items-center bg-purple-50  md:bg-purple-50 md:min-h-screen md:flex md:justify-center md:items-center">
      <div
        style={{ backgroundImage: "url('/background-pattern-desktop.svg')" }}
        className="absolute w-full top-0  z-0 h-1/3"
      ></div>
      <div className="p-6 z-10 md:z-10 md:flex md:flex-col md:p-6 md:pt-0 md:w-[620px] ">
        <div className="bg-white rounded-2xl shadow-lg p-2 md:p-6">
          <h1 className="pl-5 pt-6 md:pt-0 flex items-center text-3xl font-extrabold text-fuchsia-950 md:flex md:items-center md:text-5xl md:font-extrabold md:my-6 md:mx-4 md:text-fuchsia-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="40"
              // height="41"
              fill="none"
              viewBox="0 0 40 41"
              className="mr-5 w-6 h-6 md:w-10 md:h-10 md:mr-6"
            >
              <path
                fill="#AD28EB"
                d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
              />
            </svg>
            FAQs
          </h1>

          <div className="w-full ">
            <div className="mx-auto w-full rounded-2xl  bg-white px-1">
              <CustomDisclosure
                buttonText="What is Frontend Mentor, and how will it help me?"
                panelText="Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building."
              />
              <CustomDisclosure
                buttonText="Is Frontend Mentor free?"
                panelText="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                option providing access to a range of projects suitable for all skill levels."
              />
              <CustomDisclosure
                buttonText="Can I use Frontend Mentor projects in my portfolio?"
                panelText="Yes, you can use projects completed on Frontend Mentor in
                your portfolio. It's an excellent way to showcase your
                skills to potential employers!"
              />

              <CustomDisclosure
                buttonText="How can I get help if I'm stuck on a challenge?"
                panelText="The best place to get help is inside Frontend Mentor's
                Discord community. There's a help channel where you can
                ask questions and seek support from other community
                members.s"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
