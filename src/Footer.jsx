import React from "react";

const Footer = () => {
  return (
    <footer className="pl-[13px] pr-[13px] sm:pl-[20px] sm:pr-[20px]">
      <p className="pt-4 text-lg text-center">Reach out to us anytime!</p>
      <div className="flex justify-center sm:justify-center items-start gap-2 sm:gap-16 pt-4 text-[0.9rem]">
        <div>
          <p>Yashvardhan Sharma</p>
          <p>yash@profitaaj.com</p>
          <p>+91 72177 91058</p>
        </div>

        <div className="">
          <p>Gaurav Mittal</p>
          <p>gaurav@profitaaj.com</p>
          <p>+91 95829 74797</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
