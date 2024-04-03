import React, { useState } from "react";
import AboutPage from "./AboutPage";
import EditAbout from "./EditAbout";
import Certification from "./Certification";
import EditCertification from "./EditCertification";
const Layout = () => {
  // const [about, setAbout] = useState(
  //   "I am a software designer for the company Karma Industries, I specialize in front-end, back-end, and full stack development."
  // );
  // const [showAbout, setShowAbout] = useState(false);

  const [showCertifiations, setShowCertifications] = useState(false);

  const [certifications, setCertifications] = useState([
    {
      id: 0,
      title: "Exam 762: Developing SQL Databases",
      company: "Microsoft",
      issue: "Issued May 2020",
    },
    {
      id: 1,
      title: "Exam 2222: Developing SQL Databases",
      company: "Microsoft",
      issue: "Issued May 2020",
    },
    {
      id: 2,
      title: "Exam 123123: Developing SQL Databases",
      company: "Microsoft",
      issue: "Issued May 2020",
    },
  ]);

  const [currentCert, setCurrentCert] = useState({
    id: -1,
    title: "Defualt",
    company: "Defualt",
    issue: "Defualt",
  })

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
              setCurrentCert={setCurrentCert}
            />
          );
        })}
      </div>
      <EditCertification
        currentCert={currentCert}
        certifications={certifications}
        showCertifiations={showCertifiations}
        setShowCertifications={setShowCertifications}
        setCertifications={setCertifications}
      />
    </div>
  );
};

export default Layout;
