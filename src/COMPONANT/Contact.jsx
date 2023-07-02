import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tcyfic6',
     'template_nlj5rhc',
      form.current, 'd6NV95QychMhhLI-P')
      .then((result) => {
          console.log(result.text);
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold bg-violet-300 outline">
        contact with me!
      </h1>
      <div
        id="Contact"
        className="flex flex-col sm:flex-row md:contact bg-violet-300 text-primary-content border border-b"
      >
        <div className="sm:w-full md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center sm:items-start p-4">
            
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2 text-2xl"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full px-3 py-2 rounded bg-white text-blue-500 outline"
                placeholder="Enter your name"
              />
           
            
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2 text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded bg-white text-blue-500 outline"
                placeholder="Enter your email"
              />
            
              <label
                htmlFor="message"
                className="block text-2xl text-white font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 rounded bg-white text-blue-500 outline"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            
            <input type="submit" value="Send" className="mt-4 px-3 py-1 bg-white text-blue-500 font-medium rounded hover:bg-blue-500 hover:text-white outline text-2xl"/>
            
          </form>
        </div>








        <div className="hidden sm:block sm:w-full md:w-1/2">
          <img
            className="object-cover w-full h-full"
            src="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg?w=900"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
