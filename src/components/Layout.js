import React, { useState } from "react";
import AboutPage from "./AboutPage";
import EditAbout from "./EditAbout";
import Certification from "./Certification";
import EditCertification from "./EditCertification";
const Layout = () => {
  const [about, setAbout] = useState(
    "I am a software designer for the company Karma Industries, I specialize in front-end, back-end, and full stack development."
  );
  const [showAbout, setShowAbout] = useState(false);

  const [showCertifiations, setShowCertifications] = useState(false);

  const [numClicks, setNumClicks] = useState(0);

  var defaultCertification = {
    title: "Exam 762: Developing SQL Databases",
    company: "Microsoft",
    issue: "Issued May 2020",
  };

  const [certifications, setCertifications] = useState([
    {
      title: "Exam 762: Developing SQL Databases",
      company: "Microsoft",
      issue: "Issued May 2020",
    },
    {
      title: "Exam 762: Developing SQL Databases",
      company: "Microsoft",
      issue: "Issued May 2020",
    },
    {
      title: "Exam 762: Developing SQL Databases",
      company: "Microsoft",
      issue: "Issued May 2020",
    },
  ]);

  return (
    <div>
      Layout
      <div id="certification-container">
        {certifications.map((cert, index) => {
          return (
            <Certification
              certification={cert}
              showCertifications={showCertifiations}
              setShowCertifications={setShowCertifications}
            />
          );
        })}
      </div>
      <EditCertification
        showCertifiations={showCertifiations}
        setShowCertifications={setShowCertifications}
        certifications={certifications}
        setCertifications={setCertifications}
      />
    </div>
  );
};

export default Layout;
