import React from "react";
import "./TopBanner.css";
import banner from "../../../Images/Top-Banner.jpg";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const TopBanner = () => {
  return (
    <div className="top-banner my-5">
      <div className="w-100 banner-info">
        <div className="">
          <h1 className="text-5xl font-bold">
          laptop parts
          </h1>
          <p className="py-4">
          Various advanced quality laptop parts
          </p>
          <PrimaryButton>All Catalog</PrimaryButton>
        </div>
      </div>
      <div className="">
        <img src={banner} alt="" srcset="" />
      </div>
    </div>
  );
};

export default TopBanner;
