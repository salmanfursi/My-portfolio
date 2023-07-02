const Header = () => {
  return (
    // <nav  id="Header" className="bg-primary md:fixed top-0 left-0 w-full text-white 

    <div className="navbar z-10 bg-base-100 fixed bg-primary text-white md:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-primary text-white"
          >


            <a
              className="text-gray-300 hover:bg-violet-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Banner"
            >
              Home
            </a>
            <a
              className="text-gray-300 hover:bg-violet-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#About"
            >
              About
            </a>
            <a
              className="text-gray-300 hover:bg-violet-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium "
              href="#Skill"
            >
              Skills
            </a>
            <a
              className="text-gray-300 hover:bg-violet-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Projects"
            >
              Prozects
            </a>
            <a
              className="text-gray-300 hover:bg-violet-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Service"
            >
              Service
            </a>
            <a
              className="text-gray-300 hover:bg-violet-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Contact"
            >
              Contact
            </a>  



          </ul>
        </div>
        <img title="Salman Fursi" className="rounded-full h-12 w-12" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/292670603_586960449619270_7617260649430515778_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFmoan-nUExk7LFo5dbqR-dHfohunDQxssd-iG6cNDGy8lpLGWwO_hhTrG-bpcQoSffy_4bcfqRK1IrZ2uLFxXc&_nc_ohc=VpE4DCnDQVEAX96mDyd&_nc_ht=scontent.fdac24-1.fna&oh=00_AfBwGNOBLYEt4xOXa8nEK7b4mXSu8WamH3BoMK3ICxbfVg&oe=64A2ED5F" alt="" />
      </div>

      {/* ekhan theke lg er kaj */}

      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="hidden md:flex justify-center">
            <a
              className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Banner"
            >
              Home
            </a>
            <a
              className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#About"
            >
              About
            </a>
            <a
              className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium "
              href="#Skill"
            >
              Skills
            </a>
            <a
              className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Projects"
            >
              Prozects
            </a>
            <a
              className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Service"
            >
              Service
            </a>
            <a
              className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
              href="#Contact"
            >
              Contact
            </a>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        
      <div className="flex justify-around">

            <a href="salman fursi resume.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-xl rounded flex d-flex"title="Download my resume" download>
             Resume 
             <img className="h-8 w-8 rounded-full px-1" src="https://i.ibb.co/6JZFx54/download-removebg-preview.png" alt="" />
             </a>

      </div>
    </div>
    </div>

  
  );
};

export default Header;
