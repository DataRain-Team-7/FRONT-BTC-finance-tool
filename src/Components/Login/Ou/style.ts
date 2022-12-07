import styled from "styled-components";
import theme from "../../../styles/theme";

export const OuContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LeftLine = styled.div`
  height: 0.9px;
  width: 45px;
  background-color: gray;
  margin: 0px 5px 0px 0px;
`;
export const RightLine = styled.div`
  height: 0.9px;
  width: 45px;
  background-color: gray;
  margin: 0px 0px 0px 5px;
`;
export const OuText = styled.h2`
  font-size: ${theme.constants.fontBody};
  color: gray;
`;
