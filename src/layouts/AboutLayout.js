import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import showImage from "../images/Rick_and_Morty_title_card_(cropped).png";

const AboutLayout = () => {
  return (
    <>
        <div className="about">
        <div className="aboutHeadline">
                <h2>Rick and Morty</h2>
                <p>TV Series 2013– TV-14 23m</p>
                <div className="aboutCreators">
                    <h2>Creators</h2>
                    <p>Dan Harmon-Justin Roiland</p>
                </div>
            <div className="aboutStars">
                <h2>Stars</h2>
                <p>Justin Roiland - Chris Parnell - Spencer Grammer</p>
            </div>
            <div className="showTags">
                <button className="tag">Animation</button>
                <button className="tag">Adventure</button>
                <button className="tag">Comedy</button>
            </div>
            <NavLink to={"details"}>Details</NavLink>
        </div>
        <div className="aboutImage">
            <img src={showImage} alt="title card" />
        </div>
        </div>
        <Outlet />
    </>
  );
};

export default AboutLayout;
