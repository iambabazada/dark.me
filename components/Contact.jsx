import React from "react";

const Contact = () => {
  return (
    <div className="container text-center text-white md:pt-[48px] pt-[0px]  md:px-[0px] px-[26px]">
      <div className="font-extrabold md:text-[40px] text-[32px]">CONTACT US</div>
      <div className="flex flex-col">
        <div className="text-[16px] mt-2">
        <a href="mailTo:@darkmedia.me">contact@darkmedia.me</a> 
        </div>
        <div className="text-[16px] mt-2">
           <a href="tel:+994505118813">+994505118813</a>
        </div>
      </div>
      <div className="text-[14px] md:text-[16px]  text-gray-400 py-[60px]">
        <div>Privacy Policy</div>
        <div>Copyright © 2024 DARK - All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Contact;
