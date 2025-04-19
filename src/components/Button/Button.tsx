import React from "react";
import styles from "./styles.module.css";

type ButtonProps = {
  character: string;
  onClickHandler: (event: MouseEvent, character: string) => void;
};

const Button = (props: ButtonProps) => {
  return <div className={styles.container}>{props.character}</div>;
};

export default Button;
