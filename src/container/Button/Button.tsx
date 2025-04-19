import React from "react";
import styles from "./styles.module.css";
import Button from "../../components/Button/Button";

const numericButtons = [...Array(10).keys()];
const operatorButtons = ["+", "-", "*", "/", "CE", "="];

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
    return numericButtons.map((numericButton, index) => (
      <Button
        key={index}
        character={numericButton.toString()}
        onClickHandler={handleClick}
      />
    ));
  };

  const getOperatorButtons = () => {
    return operatorButtons.map((opBtn, index) => (
      <Button key={index} character={opBtn} onClickHandler={handleClick} />
    ));
  };
  return (
    <div className={styles.container}>
      {getOperatorButtons()}
      {getNumericButtons()}
    </div>
  );
};

export default ButtonContainer;
