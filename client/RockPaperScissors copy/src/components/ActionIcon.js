import React from "react";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors, } from "react-icons/fa";

function ActionIcon({ action, ...props }) {
  const icons = {
    rock: FaRegHandRock,
    paper: FaRegHandPaper,
    scissors: FaRegHandScissors,
  };
  const Icon = icons[action];
  return <Icon {...props} />;
}

export default ActionIcon;
