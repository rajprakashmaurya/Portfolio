import React from "react";

const ContactForm = () => {
  return (
    <form className="p-6 px-16 rounded-lg shadow-md w-full">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="message"
          rows="5"
          placeholder="Enter your message"
        />
      </div>
      <button
        className="bg-[#d80286bf] w-full text-white p-2 rounded-lg hover:bg-[#d80286]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
