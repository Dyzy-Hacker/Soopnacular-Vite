import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import waffles from "../images/waffles.png";

const Contact = () => {
  // loading e za koga ke se isprati porakata

  const [loading, setLoading] = useState(false);
  // form e za ispisuvanje na formata od emailjs

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //za vnesuvanje value vo polinjata

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  // handleSubmit e za da ja isprati formata

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9k0expn",
        "template_est2gsd",
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, //service_9k0expn
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,  //template_est2gsd
        {
          from_name: form.name,
          to_name: "Sponacular",
          from_email: form.email,
          to_email: "bebekoski123@gmail.com",
          message: form.message,
        },
        "MFFbn9PkmVrLX16g8"
        // import.meta.env.VITE_APP_EMAILJS_PUBLICE_KEY //MFFbn9PkmVrLX16g8
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl pb-[29vh]">
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-cosutm_yellow py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className=" h-[30vh] sm:mt-[12.5vh]  ">
        <img src={waffles} alt="" className="rounded-md" />
      </div>
      {/* <div className="bg1-services rounded-3xl mt-[30px]"></div> */}
    </div>
  );
};

export default Contact;
