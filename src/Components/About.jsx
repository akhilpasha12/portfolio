import React from "react";

function About() {
  return (
    // bg-gray-800 to-black 
    <section>
      <div
        name="about"
        className=" w-full h-full lg:py-28 md:py-28 py-12  lg:px-0 md:px-20 px-4 bg-gradient-to-b from bg-white"
      >
        <div className="lg:max-w-screen-lg md:lg:max-w-screen-lg mx-auto ">
          <div className="lg:mb-10 md:mb-10 mb-6">
            <p className="lg:text-4xl md:text-4xl text-2xl logoText text-black inline border-b-4 border-gray-500 ">
              About
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-4 gap-4  text-justify">
            <p className="text-black lg:text-base md:text-base text-base font-semibold overAlltext">
              Motivated and detail-oriented Frontend Developer with one year of
              hands-on experience in building responsive and user-friendly web
              and mobile applications. Proficient in utilizing modern frontend
              technologies such as React.js, React Native (Android), and
              Next.js.
            </p>
            <p className="text-black lg:text-base md:text-base text-base font-semibold overAlltext">
              Adept at translating design concepts into functional and visually
              appealing interfaces. Demonstrated ability to collaborate with
              cross-functional teams to deliver high-quality software solutions
              within project timelines.
            </p>
            <p className="text-black lg:text-base md:text-base text-base font-semibold overAlltext">
              Experienced in using state management tools like Redux Toolkit to
              ensure efficient data flow within applications. Committed to
              staying current with emerging industry trends and technologies.
              Excited about contributing to innovative projects and expanding
              expertise in frontend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
