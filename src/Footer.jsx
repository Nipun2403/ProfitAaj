import React from "react";

const Footer = () => {
  return (
    <footer className="pl-[20px] pr-[20px]">
      <p className="pt-4 text-lg text-center">Reach out to us anytime!</p>
      <div className="flex justify-between sm:gap-16 pt-4">
        <div>
          <p>Yashvardhan Sharma</p>
          <p>yash@profitaaj.com</p>
          <p>+91 7217791058</p>
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
