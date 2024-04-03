import React, { useState } from "react";
import AboutPage from "./AboutPage";
import EditAbout from "./EditAbout";
import Certification from "./Certification";
const Layout = () => {
  const [about, setAbout] = useState(
    "I am a software designer for the company Karma Industries, I specialize in front-end, back-end, and full stack development."
  );
  const [showAbout, setShowAbout] = useState(false);

  const [numClicks, setNumClicks] = useState(0);

  var defaultCertification = {
    title: "Exam 762: Developing SQL Databases",
    company: "Microsoft",
    issue: "Issued May 2020",
  };

  return (
    <div>
      Layout
      <div id="certification-container">
        <Certification certification={defaultCertification} />
        <Certification certification={defaultCertification} />
        <Certification certification={defaultCertification} />
      </div>
      {/* <AboutPage
        about={about}
        setShowAbout={setShowAbout}
        setAbout={setAbout}
        numClicks={numClicks}
        setNumClicks={setNumClicks}
      />
      <EditAbout
        showAbout={showAbout}
        setShowAbout={setShowAbout}
        setAbout={setAbout}
        about={about}
      />
      <button onClick={() => setNumClicks(numClicks + 1)}>Click me</button>
      <div>
        <h4> Number of Clicks: {numClicks}</h4>
      </div> */}
    </div>
  );
};

export default Layout;
