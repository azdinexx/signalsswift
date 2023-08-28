function Footer() {
  return (
    <footer className="border-t border-gray-300   py-6 mb-6 md:mb-20 pt-10">
      <div className="max-w-6xl mx-auto flex gap-36 items-center md:items-start justify-center">
        {/* LOGO */}
        <div className="md:max-w-[10rem]">
          <h1 className="text-2xl font-bold">
            {' '}
            Signal
            <img
              src="/ss.png"
              alt="signalsswift"
              className="h-12 inline-block"
              style={{verticalAlign: 'middle'}}
            />
            wift
          </h1>
          <span className="font-thin text-stone-700">
            2023 &copy; Signalsswift All Rights Reserved
          </span>
        </div>
        {/* NAV */}
        <nav className="hidden md:flex gap-[5rem] w-full font-thin">
          <ul className="flex flex-col gap-5  ">
            <li>Home</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>

          <ul className="flex flex-col gap-5  ">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>

          <ul className="flex flex-col gap-5  ">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
