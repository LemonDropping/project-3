import React from "react";
import { FlickeringGreenStartButton } from "./StartButton.styles";

type Props = {
  callback: () => void;
};

const StartButton: React.FC<Props> = ({ callback }) => (
  <FlickeringGreenStartButton onClick={callback}>
    Start Game
  </FlickeringGreenStartButton>
);

export default StartButton;
