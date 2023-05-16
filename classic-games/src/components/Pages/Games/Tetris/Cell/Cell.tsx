import React from "react";
import { StyledCell } from "./Cell.styles";
import { TETROMINOES } from "../utils/setup";

type Props = {
  type: keyof typeof TETROMINOES;
};

const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOES[type].color} />
);

export default React.memo(Cell);
