import {
  faBullseye,
  faCloud,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllCourses.css";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://lerarn-more-coading-server.vercel.app/all-courses-details"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });


  return (
    <div className="container all-courses text-center">
      <div className="all-course">
        <h1>Find Cources</h1>
        <p className="lead fs-6">
          This is a difference cources to develope your programming, and CSE
          learning
        </p>
        <br />
      </div>
      <div className="courses ">
        <div className="row">
          {courses?.map((course) => (
            <div className="col-md-3" key={course.id}>
              <div className="cart">
                <div className="logo-image">
                  <img className="img-fluid" src={course.image} alt="" />
                  <h2 className="fs-5 mt-2">{course.name}</h2>
                  <p className="lead fs-5">{course.time}</p>
                  <small className="text-success">{course.access}</small> <br />
                  <Link to={`/details/${course.id}`}>
                    <Button className="btn btn-outline-success mt-2">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-image bg-parallax overlay">
        <div className="container">
          <div className="row">
            <div className="p-5 col-md-6 text-start text-white">
              <h2>Snatch a 50% offer</h2>
              <p className="lead fs-5">
                catch our deal and start your study then grab your dream job
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="section-hr" />
      <div className="row">
        <div className="section-header text-center">
          <h1 className="mt-5">
            Benifites of learning
            <span style={{ color: "#374050" }}>JAVASCRIPT ?</span>
          </h1>
          <p className="lead fs-5">
            JavaScript supports valuable skills such as object-oriented,
            functional, and imperative styles of programming.{" "}
          </p>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faCloud} />
            <div className="feature-content text-start">
              <h4>Our Online Courses</h4>
              <p className="lead fs-5">
                Not only is it beginner-friendly; it will also set you up with
                some extremely valuable transferable skills. JavaScript supports
                object-oriented
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faBullseye} />
            <div className="feature-content text-start">
              <h4>Study with Live Sessions</h4>
              <p className="lead fs-5">
                These classes tend to be cheaper than those that offer live
                instruction, at around $100 on average, depending on the course
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faGamepad} />
            <div className="feature-content text-start">
              <h4>Attractive Games</h4>
              <p className="lead fs-5">
                JavaScript is best for web-based and mobile games. It's also a
                great language for kids to learn because it's generally easy to
                understand and has plenty of resources 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
