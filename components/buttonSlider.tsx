import { useState } from "react";
import styles from "./buttonSlider.module.css";

const ButtonSlider = () => {
  const [buttonSwitch, setButtonSwitch] = useState(false);

  const handleToggleUpload = () => {
    setButtonSwitch(false);
  };

  const handleToggleRecent = () => {
    setButtonSwitch(true);
  };

  return (
    <div className={`${styles.buttonContainer} bg-gray-100 `}>
      <input
        type="radio"
        id="switchUpload"
        name="switchButton"
        value="Monthly"
        checked={!buttonSwitch}
        className={styles.buttonInput}
      />
      <input
        type="radio"
        id="switchRecent"
        name="switchButton"
        value="Monthly"
        checked={buttonSwitch}
        className={styles.buttonInput}
      />
      <label
        htmlFor="switchUpload"
        className={styles.buttonLabel}
        onClick={handleToggleUpload}
      >
        New Upload
      </label>
      <label
        htmlFor="switchRecent"
        className={styles.buttonLabel}
        onClick={handleToggleRecent}
      >
        Recent
      </label>
      <div className={styles.wrapper}>
        <div
          className={`${styles.switch} ${buttonSwitch ? styles.active : ""}`}
        >
          <div className={styles.switchDiv}>New Upload</div>
          <div className={styles.switchDiv}>Recent</div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSlider;
