import React from "react";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-start items-center">
        <img src={logo} alt="logo" className="w-48" />
        <div className="pl-4">
          <h4 className="text-white text-xl font-bold">About</h4>
          <p className="text-white text-base text-left max-w-xs mt-2">
            Kryptomastery is a platform that aims to provide comprehensive information and resources about cryptocurrencies,
            blockchain technology, and related topics. Join us to stay updated with the latest trends and insights in the crypto world.
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap">
      <div className="text-white" style={{ marginTop: "-50px" }}>
            <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Home</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Contact Us</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Contribute</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Privacy Policy</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Pricing</a></li>
            </ul>
          </div>
          <div className="text-white" style={{ marginTop: "-50px" }}>
            <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>Social</h6>
            <ul class="footer-links">
              <li><a href="https://www.facebook.com/profile.php?id=100084959137020&mibextid=ZbWKwL">Facebook</a></li>
              <li><a href="https://instagram.com/_adityaaa._._?igshid=MzNlNGNkZWQ4Mg==">Instagram</a></li>
              <li><a href="https://github.com/aditya-7-7">Github</a></li>
              <li><a href="https://devfolio.co/@aditya_7_7">Devfolio</a></li>
              <li><a href="https://quine.sh/user/aditya-7-7">Quine.sh</a></li>
            </ul>
          </div>
          <div className="text-white" style={{ marginTop: "-80px" }}>
          <ul class="footer-links">
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">My Files</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Storage</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Shared</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">Tutorials</a></li>
              <li><a href="https://drive.google.com/file/d/1XahfAJj5nrVWXo6hrVWJfU1Wtf4YsuOw/view">FAQ</a></li>
            </ul>
          </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">adityatapadar2017@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">HyperFile</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
