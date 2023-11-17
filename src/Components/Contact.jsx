import phone from "../assets/phone.png";
function Contact() {
  return (
    <section>
      <div name="contact" className="bg-black">
        <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full  lg:py-28 md:py-28 py-12 px-4 lg:px-0  md:px-20">
          <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 ">
            <form className="lg:space-y-8 space-y-6 lg:col-span-3 md:col-span-3 col-span-2">
              <div className="mb-12">
                <p className="capitalize lg:text-4xl md:text-4xl text-2xl logoText text-white ">
                  Let's Connect
                </p>
                <div className="w-14 h-1 bg-gray-200 mt-2" />
              </div>
              <div className="grid lg:grid-cols-2  md:grid-cols-2  grid-cols-1 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    // value={info.name}
                    className="shadow-sm bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic "
                    placeholder="Enter Your  Full Name"
                    // onChange={(e) => inputHandler(e)}
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="number"
                    // value={info.number}
                    className="shadow-sm bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic "
                    placeholder="Enter Your Mobile Number"
                    // onChange={(e) => inputHandler(e)}
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  // value={info.email}
                  className="shadow-sm bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic "
                  placeholder="Enter Your Email Address"
                  // onChange={(e) => inputHandler(e)}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <textarea
                  name="description"
                  rows="6"
                  // value={info.description}
                  className="shadow-sm bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic"
                  placeholder="Hours Of Operation..."
                  // onChange={(e) => inputHandler(e)}
                ></textarea>
              </div>

              <div className="group lg:mt-6 mt:mb-6 mt-4 text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                <p className="overAlltext text-base">Send Message</p>
                <span className="group-hover:rotate-90 duration-300"></span>
              </div>
            </form>
            <div className="lg:col-span-2 md:col-span-2 col-span-1 relative">
              <div className="absolute lg:-top-8 lg:right-44 md:-top-12 md:right-[115px] -top-11 right-2">
                <img src={phone} alt={phone} className="w-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
