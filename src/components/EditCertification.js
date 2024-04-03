import React from "react";

const EditCertification = ({
  certifications,
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
        <input placeholder={certifications[0].title} />
        <button onClick={onSubmit}> Save </button>
      </form>
    </div>
  );
};

export default EditCertification;
