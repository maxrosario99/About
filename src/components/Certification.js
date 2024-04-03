import React from "react";

const Certification = ({ certification }) => {
  return (
    <div className="individual-cert">
      <h1>{certification.title}</h1>
      <h2>{certification.company}</h2>
      <h3>{certification.issue}</h3>
      <button className="edit-button">Edit </button>
    </div>
  );
};

export default Certification;
