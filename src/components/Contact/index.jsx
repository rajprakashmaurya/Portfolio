import React from "react";
import ContactForm from "./ContactForm";
import contact from "../../static/contact-us.png";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="aboutme-title text-slate-800  text-center  mb-10">
        <div className=" text-4xl font-bold tracking-wider">Contact me</div>

        <hr className="bg-rose-800 h-1 w-16 border-5 m-auto my-6" />

        <div className="mx-32 text-2xl  ">
          Feel free to Contact me by submitting the form below and I will get
          <br /> back to you as soon as possible.
        </div>
      </div>
      <div className="flex justify-between gap-5 mx-20">
        <div className="w-2/4 max-md:w-full ">
          <ContactForm />
        </div>

        <div className="contact-image w-2/4 max-md:hidden ">
          <img src={contact} alt="contact image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
