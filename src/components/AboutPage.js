import React from "react";

const AboutPage = ({ about, showAbout, setShowAbout }) => {
  return (
    <>
      <div>
        AboutPage
        <p>{about}</p>
      </div>
      <div>
        <button id="edit-about" onClick={() => setShowAbout(!showAbout)}>
          Edit About
        </button>
      </div>
    </>
  );
};

export default AboutPage;
