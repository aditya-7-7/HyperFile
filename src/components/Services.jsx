import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import giant from "../../images/giant.gif";
import we from "../../images/we.gif";



const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex flex-col md:flex-row w-full justify-start items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ml-4">
        <strong>Services that we<br />continue to improve</strong>
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base ml-4">
          The best choice for buying and selling your crypto assets, with the various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security guarantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Low fees"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Data Privacy"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>

    <div className="flex justify-center items-center">
  <div className="gifcontainer" style={{ marginTop: "145px", marginLeft: "-20px", width: "220px", height: "260px" }}>
    <div className="box">
      <div className="flex flex-col justify-center items-center">
        <img src={giant} alt="logo" style={{ width: "200px", height: "200px", marginRight: "-2px" }} />
        <div style={{ marginTop: "5px", textAlign: "center", color: "white" }}>
          <strong>Other Cloud Giants</strong>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="flex justify-center items-center">
  <div className="gifcontainer" style={{ marginTop: "145px", marginLeft: "60px", width: "220px", height: "260px" }}>
    <div className="box">
      <div className="flex flex-col justify-center items-center">
        <img src={we} alt="logo" style={{ width: "200px", height: "200px", marginRight: "-2px" }} />
        <div style={{ marginTop: "5px", textAlign: "center", color: "white" }}>
          <strong>We at HyperFile</strong>
        </div>
      </div>
    </div>
  </div>
</div>



</div>

);

export default Services;
