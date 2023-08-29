import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid black;
  padding: 0.5rem 0;
  margin-bottom: 1rem;

  padding-right: 1rem;

  .bell-icon {
    cursor: pointer;
  }
`;

export const BreadcrumsNavlink = styled(NavLink)`
  font-size: 1rem;
  color: #808080;
  text-decoration: none;
  padding: 4px;

  :hover {
    color: black;
    background-color: #80808011;
  }
`;
