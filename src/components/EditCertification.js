import React from "react";

const EditCertification = ({
  certification,
  setCertifications,
  setShowCertifications,
  showCertifiations,
}) => {
  function onSubmit() {
    setShowCertifications(!showCertifiations);
  }
  return (
    <div style={{ display: showCertifiations ? "block" : "none" }}>
      <form>
        <label> Title </label>
        <input>placeholder = {certification}</input>
        <button onClick={onSubmit}> Save </button>
      </form>
    </div>
  );
};

export default EditCertification;
