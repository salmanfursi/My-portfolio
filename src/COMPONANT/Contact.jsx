import React from 'react';

const Contact = () => {
  return (
   

<>
  <h1 className="text-center text-2xl font-bold bg-violet-300 outline">contact with me!</h1>
  <div id="Contact" className="flex flex-col sm:flex-row md:contact bg-violet-300 text-primary-content border border-b">
    <div className="sm:w-full md:w-1/2">
      <form className="flex flex-col justify-center items-center sm:items-start p-4">
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-white font-medium mb-2 text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded bg-white text-blue-500 outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="message" className="block text-2xl text-white font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 rounded bg-white text-blue-500 outline"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-3 py-1 bg-white text-blue-500 font-medium rounded hover:bg-blue-500 hover:text-white outline text-2xl"
        >
          Send
        </button>
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
