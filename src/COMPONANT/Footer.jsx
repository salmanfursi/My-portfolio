const Footer = () => {
  return (
    <footer id="Footer" className="footer footer-center p-10 bg-primary text-primary-content border-t-4 border-black">
      <div>
        <img
          className="rounded-full h-16 w-16"
          src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/292670603_586960449619270_7617260649430515778_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFmoan-nUExk7LFo5dbqR-dHfohunDQxssd-iG6cNDGy8lpLGWwO_hhTrG-bpcQoSffy_4bcfqRK1IrZ2uLFxXc&_nc_ohc=VpE4DCnDQVEAX96mDyd&_nc_ht=scontent.fdac24-1.fna&oh=00_AfBwGNOBLYEt4xOXa8nEK7b4mXSu8WamH3BoMK3ICxbfVg&oe=64A2ED5F"
          alt=""
        />
        <h1 className="font-mono font-bold text-4xl ">SALMAN FURSI</h1>
        <p className="hidden sm:block md:font-mono font-bold text-4xl ">
          Frontend Developer / Mernstack Developer
        </p>
        <p className="sm:font-sarif font-bold text-2xl md:hidden">
          Frontend Developer  Mernstack Developer
        </p>
      </div>
      <div className=" flex d-flex">
        <a
          href="https://www.facebook.com/profile.php?id=100086015485706"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-16 w-16 m-4"
            src="https://i.ibb.co/zFZG5yh/facebook-1.png"
            alt=""
          />
        </a>

        <a
          href="https://github.com/salmanfursi"
          target="_blank"
          rel="noreferrer"
        >
          <img className="h-16 w-16" src="https://i.ibb.co/f22Jnq1/github-1.png" alt="" />
        </a>

        <a
          href="https://www.linkedin.com/in/salman-fursi-58934b280/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-16 w-16 m-4 rounded-full"
            src="https://i.ibb.co/f8c5PFW/linkdin.png"
            alt=""
          />
        </a>

      </div>
      <p>Copyright © 2023 - All right reserved</p>
    </footer>
  );
};

export default Footer;
