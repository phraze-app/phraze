import styled from "@emotion/styled";
import { PhrazeTheme } from "@phraze-app/theme";

export const StyledInput = styled.input<{
  hasStartAdornment?: boolean;
  theme?: PhrazeTheme;
}>`
  border: solid 1px black;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;

  height: 3rem;
  width: 100%;
  background-color: black;
  color: white;

  padding-left: ${({ hasStartAdornment }) => (hasStartAdornment ? "44px" : "")};
  box-shadow: ${({ theme }) => theme.shadows.card};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textGrey25};
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.textWhite};

  font-weight: bold;
  font-size: 12px;
  margin-left: 8px;
  margin-bottom: 4px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const AdornmentIconWrapper = styled.div<{ isEndIcon?: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;

  ${({ isEndIcon }) => (isEndIcon ? `right: 12px;` : `left: 12px;`)}
`;
