import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const About = () => {
  return (
    <div style={{ backgroundColor: "rgb(92, 92, 92)" }}>
      <Navbar></Navbar>
      <div>
        <div className="container mt-5">
          <div className="border-top pt-5 pb-5 row d-flex details-teams align-items-start justify-content-center text-white">
            <div className="col-md-6 border-end">
              <img src="" alt="" className="w-75 img-thumbnail m-2" />
            </div>
            <div className="col-md-6 text-start">
              <h2 className="">RAYHAN</h2>
              <p className="lead">
                Student | Programmer | Writer | Content Creator
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
