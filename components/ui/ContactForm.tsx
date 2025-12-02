"use client"
import Image from "next/image";
import React from "react";
import Adobe from "../../public/adobe.svg";
import phone from "../../public/phone.svg";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook, FaRegAddressCard, FaVoicemail } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const ContactForm = () => {
  const handleSendEmail = (e:any) => {
    e.preventdefault()
    console.log("Send Email")
  };
  return (
    <div className="text-white bg-white flex flex-col md:flex-row w-11/12 md:w-5/6 rounded-sm">
      {/* Div1 */}
      <div className="h-auto bg-black-100 py-5 px-5 mx-2 my-2 basis-2/6 rounded-sm flex flex-col gap-8 justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Contact Information
          </h1>
          <p className="text-white-200">Say something to start a live chat!</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <FaPhoneAlt />
            <p className="text-white-100">+91 8169178869</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaMailBulk />
            <p className="text-white-100">ajayshirke.tech@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaRegAddressCard />
            <p className="text-white-100">Palghar, Maharashtra, India</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Div2 */}
      <div className="px-5 py-2 text-black-100 basis-4/6">
        <form onSubmit={handleSendEmail}>
          <div className=" pb-4">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    required
                    placeholder="Your First Name"
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className=" block text-sm font-bold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    required
                    placeholder="Your Last Name"
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Your Email Address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full">
                <fieldset >
                  <legend className="text-md font-bold leading-6 text-gray-900">
                    Select Subject
                  </legend>
                  {/* <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p> */}
                  <div className="flex items-center mt-6 gap-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        //   value={}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        General Inquiry
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Hiring
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="sm:col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    aria-multiline
                    required
                    placeholder="Write your message.."
                    id="message"
                    name="message"
                    autoComplete=""
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full flex items-center justify-end">
                {/* <MagicButton
                  title="Send Message"
                  icon={undefined}
                  position={""}
                  
                /> */}
                <button type="submit" className="px-5 py-2 bg-black-100 text-white-200 font-bold rounded-sm">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
