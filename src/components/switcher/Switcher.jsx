import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import * as Dom from "../../utils/dom";

function getTheme(checked) {
  return checked ? "right" : "left";
}

function toggleTheme(theme) {
  switch (theme) {
    case "right": {
      Dom.addClassToBody("right");
      Dom.removeClassToBody("left");
      break;
    }
    case "left": {
      Dom.addClassToBody("left");
      Dom.removeClassToBody("right");
      break;
    }
  }
}

const Switcher = ({ emojiLight, emojiDark }) => {

  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    const theme = getTheme(checked);

    setChecked(checked);
    toggleTheme(theme);
  };

  useEffect(() => {
    const checked = Dom.hasClassOfBody('dark');

    handleChange(checked);
  }, []);

  return (
    <div className="switch-container">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          checkedIcon={<div className="icon checkedIcon">{emojiDark}</div>}
          uncheckedIcon={<div className="icon uncheckedIcon">{emojiLight}</div>}
          offColor={"#d9dfe2"}
          offHandleColor={"#fff"}
          onColor={"#999"}
          onHandleColor={"#282c35"}
        />
      </label>
    </div>
  );
};

export default Switcher;
