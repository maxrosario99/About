import React, { useState } from "react";

const EditCertification = ({
  currentCert,
  certifications,
  setCertifications,
  setShowCertifications,
  showCertifiations,
}) => {
  const [updatedCert, setUpdateCert] = useState({});

  const udpateCert = (value) => {
    const copy = { ...updatedCert };
    // copy[Object.keys(value)[0]] = value[Object.keys(value)[0]]
    copy[Object.keys(value)[0]] = value[Object.keys(value)[0]];
    console.log(copy);
    setUpdateCert(copy);
  };

  function onSubmit() {
    const copy = [...certifications];
    const found = copy.findIndex((cert) => cert.id === currentCert.id);
    copy[found] = updatedCert;

    setCertifications(copy);
    setShowCertifications(!showCertifiations);
  }
  return (
    <div style={{ display: showCertifiations ? "block" : "none" }}>
      <div>
        <label> Title </label>
        <input
          onChange={(e) => udpateCert({ title: e.target.value })}
          placeholder={currentCert.title}
        />
      </div>
      <div>
        <label> Company </label>
        <input
          onChange={(e) => udpateCert({ company: e.target.value })}
          placeholder={currentCert.title}
        />
      </div>
      <div>
        <label> Issue </label>
        <input
          onChange={(e) => udpateCert({ issue: e.target.value })}
          placeholder={currentCert.issue}
        />
      </div>
      <button onClick={onSubmit}> Save </button>
    </div>
  );
};

export default EditCertification;
