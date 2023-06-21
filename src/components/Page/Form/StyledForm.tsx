import styled from "styled-components";

export interface InputProps {
    hasError?: string | false;
  }

export const StyledForm = styled.form`
  display: flex;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ErrorMessage = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: var(--red);
  padding-left: 30px;
`;

export const StyledInput = styled.input<InputProps>`
  width: 421px;
  height: 56px;
  border: 1px solid ${props => (props.hasError ? "var(--red)" : "var(--pale-blue)")};
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.0001);
  border-radius: 28px;
  outline: 0;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  padding-left: 30px;
  color: var(--black);
  ::placeholder {
    color: #b8c7ed;
  }
  :focus {
    border: 1px solid var(--pale-blue);
  }
`;
export const StyledButton = styled.button`
  width: 200px;
  height: 56px;
  background: var(--blue);
  box-shadow: 0px 5px 10px 2px rgba(76, 123, 243, 0.230414);
  border-radius: 28px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: var(--white);
  :hover {
    opacity: 0.6;
  }
`;
