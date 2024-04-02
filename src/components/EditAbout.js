import React, { useState } from "react";

const EditAbout = ({ about, showAbout, setAbout, setShowAbout }) => {
  const [newAbout, setNewAbout] = useState("");

  function updateAbout(value) {
    setNewAbout(value);
  }
  function onSubmit() {
    setAbout(newAbout);

    setShowAbout(!showAbout);
  }
  return (
    <div style={{ display: showAbout ? "block" : "none" }}>
      <form>
        <label>About</label>
        <input
          placeholder={about}
          onChange={(e) => updateAbout(e.target.value)}
        />
      </form>
    </div>
  );
};

export default EditAbout;
