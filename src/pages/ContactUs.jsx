import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-between px-20 py-10 bg-white">
      {/* Left Side: Contact Info */}
      <div className="flex-1 mr-8">
        <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
        <p className="text-gray-600 mb-8">
          Reach out for us for any inquiry Lorem ipsum dolor sit, amet
          consectetur...
        </p>
        <div className="flex gap-12 mt-30">
          <div>
            <div className="font-semibold mb-1">Location</div>
            <div className="text-gray-700 text-sm">
              No 13/1
              <br />
              Suhada Road,
              <br />
              Kelaniya
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">E Mail</div>
            <div className="text-gray-700 text-sm">abcxyz@gmail.com</div>
          </div>
          <div>
            <div className="font-semibold mb-1">Phone</div>
            <div className="text-gray-700 text-sm">
              +94 1123454689
              <br />
              +94 1123454689
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 max-w-md">
        <h3 className="text-xl font-semibold mb-1">Contact Us</h3>
        <p className="text-gray-600 mb-6">Reach out for us for any inquiry</p>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Full Name"
            className="mb-4 px-4 py-3 rounded-lg bg-blue-100 focus:bg-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="E Mail"
            className="mb-4 px-4 py-3 rounded-lg bg-blue-100 focus:bg-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="mb-4 px-4 py-3 rounded-lg bg-blue-100 focus:bg-white focus:outline-none min-h-[100px]"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
