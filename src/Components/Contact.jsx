import { useState } from "react";
import phone from "../assets/phone.png";

function Contact() {
  const [user, setUser] = useState({
    fname: "",
    email: "",
    message: "",
    number: "",
  });
  const [smtp, setSmptRes] = useState();
  const inputHandler = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formValidation = (e) => {
    e.preventDefault();
    const { email, message, number } = user;

    if (window.Email) {
      const config = {
        SecureToken: "38aa0b1a-e857-4112-9bd4-b3858dc9278d",
        To: email,
        From: "mohammedakhilpasha12@gmail.com",
        Subject: number,
        Body: message,
      };

      window.Email.send(config).then((message) => {
        console.log("message", message);
        if (message) {
          setSmptRes("Successfully Send");
          alert(message);
          console.log("message", message);
          setUser({
            fname: "",
            email: "",
            number: "",
            message: "",
          });

          setTimeout(() => {
            setSmptRes(" ");
          }, 5000);
        } else {
          setSmptRes("Error Send");
        }
      });
    } else {
      console.log(
        "Email object not defined. Check if smtp.js is properly loaded."
      );
    }
  };
  console.log(smtp);
  return (
    <section>
      <div name="contact" className="bg-black">
        <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full  lg:py-28 md:py-28 py-12 px-4 lg:px-0  md:px-20">
          <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 ">
            <form
              onSubmit={formValidation}
              className="lg:space-y-8 space-y-6 lg:col-span-3 md:col-span-3 col-span-2"
            >
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
                    name="fname"
                    value={user.fname}
                    className="shadow-sm overAlltext bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm  font-medium   rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic "
                    placeholder="Enter Your  Full Name"
                    onChange={(e) => inputHandler(e)}
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="number"
                    value={user.number}
                    className="shadow-sm overAlltext bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic "
                    placeholder="Enter Your Mobile Number"
                    onChange={(e) => inputHandler(e)}
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="shadow-sm overAlltext bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic "
                  placeholder="Enter Your Email Address"
                  onChange={(e) => inputHandler(e)}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  rows="6"
                  value={user.message}
                  className="shadow-sm overAlltext bg-white border border-white focus:outline-none focus:border-[#ff0000] text-sm rounded-lg block w-full lg:p-2.5 md:p-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 placeholder:italic"
                  placeholder="Hours Of Operation..."
                  onChange={(e) => inputHandler(e)}
                  required
                ></textarea>
              </div>
              <div className="flex lg:justify-start md:justify-start lg:items-start md:items-start justify-center items-center">
                <div className="group lg:mt-5 mt:mb-5 mt-3 text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  <button type="submit" className="overAlltext text-sm font-semibold">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <div className="lg:col-span-2 md:col-span-2 col-span-1 relative">
              <div className="absolute lg:-top-8 lg:right-44 md:-top-12 md:right-[115px] -top-9 right-2 image-container">
                <img src={phone} alt={phone} className="w-[60px]  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
