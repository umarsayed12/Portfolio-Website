import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
const ContactForm = () => {
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, form.current, {
        publicKey: emailjsPublicKey,
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess(
            "Message Sent Succesfully. You will recieve a response soon. Thankyou!"
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg text-dark_blue px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg text-dark_blue px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg text-dark_blue p-2"
          value={message}
          onChange={handleMessage}
        />
        {success.length ? (
          <p className="text-[rgb(0,255,0)] mt-2">{success}</p>
        ) : null}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[60%] md:w-[30%] text-center border flex justify-center items-center gap-1 border-white text-dark_blue bg-gradient-to-r  from-dark_yellow to-light_yellow rounded-full py-2 px-4 text-lg mt-10 hover:bg-light_yellow hover:scale-110 transition-all duration-500 cursor-pointer md:self-start sm:self-center"
          >
            <IoIosSend />
            <p className="flex items-center">Send Message</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
