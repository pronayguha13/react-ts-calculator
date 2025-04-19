import React from "react";
import styles from "./styles.module.css";
import Button from "../../components/Button/Button";

const numericButtons = [7, 8, 9, 6, 5, 4, 3, 2, 1, 0];
const sideOperatorButtons = ["+", "="];

const topOperatorButtons = ["CE", "/", "*", "-"];

const ButtonContainer = () => {
  const handleClick = (event: MouseEvent, character: string) => {
    console.log(
      "Click event detected on button :",
      character,
      "and the event emitted for that click event:",
      event
    );
  };

  const getNumericButtons = () => {
    return (
      <div className={styles.numeric_button_container}>
        {numericButtons.map((numericButton, index) => (
          <Button
            key={index}
            character={numericButton.toString()}
            onClickHandler={handleClick}
          />
        ))}
      </div>
    );
  };

  const getTopOperatorButtons = () => {
    return (
      <div className={styles.top_operator_button_container}>
        {topOperatorButtons.map((opBtn, index) => (
          <Button key={index} character={opBtn} onClickHandler={handleClick} />
        ))}
      </div>
    );
  };

  const getSideOperatorButtons = () => {
    return (
      <div className={styles.side_operator_button_container}>
        {sideOperatorButtons.map((opBtn, index) => (
          <Button key={index} character={opBtn} onClickHandler={handleClick} />
        ))}
      </div>
    );
  };

  const getSpecialButtons = () => {
    return (
      <div className={styles.special_button_container}>
        {[".", "+/-"].map((specialCharacter, index) => (
          <Button
            key={index}
            character={specialCharacter}
            onClickHandler={handleClick}
          />
        ))}
      </div>
    );
  };
  return (
    <div className={styles.container}>
      {getTopOperatorButtons()}
      {getSideOperatorButtons()}
      {getNumericButtons()}
      {getSpecialButtons()}
    </div>
  );
};

export default ButtonContainer;
