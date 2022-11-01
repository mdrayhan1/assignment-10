import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row banner d-flex align-items-center justify-content-center">
          <Navbar />
          <div className="col-6">
            <h1 className="title">
              Increase Your <br /> Knowledge And Skills
            </h1>
            <p className="text-white text-center mt-3">
              Develop amazing web and app experiences with tips and advice from
              the experts at LEARN MORE COADING?.
              <br />
              <small className="text-white">
                Want to enhance your website or app with the latest web
                development, Check What We Prepared For You!
              </small>
            </p>
            <Link to={"/about"}>
              <Button variant="outline-info text-success about-btn">
                Get to know us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
