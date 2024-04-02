import React from "react";

const EditAbout = ({ about, showAbout, setShowAbout }) => {
  const [newAbout, setNewAbout] = useState("");

  function updateAbout(value) {
    setNewAbout(value);
  }
  return (
    <div>
      <form>
        <label>About</label>
        <input>
          placeholder={about}
          onChange={(e) => updateAbout(e.target.value)}
        </input>
      </form>
    </div>
  );
};

export default EditAbout;
