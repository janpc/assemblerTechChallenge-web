import styled from "styled-components";
import * as COLORS from "../../styles/colors";

const MemeItem = styled.div`
  height: 30vh;
  flex-grow: 1;
  border-radius: 10px;
  overflow: hidden;

  &:last-child {
    flex-grow: 10;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 5px ${COLORS.LIGHT};
  }
`;

const MemeImage = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;

export { MemeItem, MemeImage };
