import React, { useState } from "react";
import AboutPage from "./AboutPage";
import EditAbout from "./EditAbout";
const Layout = () => {
  const [about, setAbout] = useState(
    "I am a software designer for the company Karma Industries, I specialize in front-end, back-end, and full stack development."
  );
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      Layout
      <AboutPage
        about={about}
        setShowAbout={setShowAbout}
        setAbout={setAbout}
      />
      <EditAbout
        showAbout={showAbout}
        setShowAbout={setShowAbout}
        setAbout={setAbout}
        about={about}
      />
    </div>
  );
};

export default Layout;
