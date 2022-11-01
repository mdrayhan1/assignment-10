import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#edffff" }}>
        <div className="container">
          <h1 className="text-center mb-5">
            BLOG <br />
          </h1>
          <div className="qsn-ans">
            <div className="qsn-1">
              <h2>what is cors??</h2>
              <h6>
                Ans : Cross-origin resource sharing (CORS) is a browser
                mechanism which enables controlled access to resources located
                outside of a given domain. It extends and adds flexibility to
                the same-origin policy (SOP).
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-2">
              <h2>
                Why are you using firebase? What other options do you
                have to implement authentication ??
              </h2>
              <h6>
                Ans :Google Firebase offers many features that pitch it as
                the go-to backend development tool for web and mobile apps. It
                reduces development workload and time. And it's a perfect
                prototyping tool. Firebase is simple, lightweight, friendly, and
                industrially recognized.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-3">
              <h2>How does the private route work??</h2>
              <h6>
                Ans : The react private route component renders child
                components ( children ) if the user is logged in. If not logged
                in the user is redirected to the /login page with the return url
                passed in the location state property.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-4">
              <h2>What is Node? How does Node work? ??</h2>
              <h6>
                Ans : It is a used as backend service where javascript works
                on the server-side of the application. This way javascript is
                used on both frontend and backend. Node. js runs on chrome v8
                engine which converts javascript code into machine code, it is
                highly scalable, lightweight, fast, and data-intensive. Working
                of Node.
              </h6>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blogs;
