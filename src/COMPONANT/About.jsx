import React from "react";

const About = () => {
  return (
    <>
    <h1 id="About" className='text-center text-2xl font-bold outline '>About me !</h1><hr /><hr /><hr />
    <div  className="md:flex d-flex md:contact">
      <div className="w-full ">
        <img
          className="md:h-full w-full object-contain bg-violet-50"
          src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1688057327~exp=1688057927~hmac=ccfa6c0dd1126228b7aba88457698b75168d0b5a96e8095a80493c125344ac03"
          alt=""
        />
      </div>
      <div className="w-full bg-violet-25   
     text-2xl font-bold p-12 md:pt-32 text-sky-900 border border-4 d-flex item-center"><br />
        <h1 className="text-3xl">Salman fursi</h1><br />
        <p>
          Welcome to my portfolio! I'm salman fursi, a junior MERN stack
          developer or a frontend developer.
          I recently completed an intensive web development course at
          Programming Hero, where I honed my skills in the MERN stack. Equipped
          and scalable solutions. I am passionate about staying up-to-date with
          the latest industry trends and continuously expanding my knowledge to
          deliver cutting-edge projects.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
