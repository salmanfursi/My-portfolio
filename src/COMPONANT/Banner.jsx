import "./Header.css";

const Banner = () => {
  return (
    <div id="Banner" className="">
      <div className="md:flex d-flex ">
        <div className="w-full h-full text-right ">
          <p className="font-sarif font-bold text-4xl py-32 pr-8 text-sky-900 bg-white my-auto ">
          <h1 className=" text-violet-900 ">I'm Salman ,</h1><br />
           A skilled MERN stack developer passionate about building exceptional web applications. With expertise in MongoDB, Express.js, React, and Node.js, I deliver functional and user-friendly solutions. Committed to continuous learning, I stay up to date with the latest technologies. Let's collaborate to bring your ideas to life!
           <br /><br />
           <h1>Thanks!</h1>
          </p>
        </div>

        <div className="hidden sm:block w-full flex items-center justify-center md:outline">
          <div className="text-center">
            <img
              className="py-6 md:w-full pb-4 "
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg?size=626&ext=jpg&ga=GA1.1.1183713184.1688103796&semt=ais"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
