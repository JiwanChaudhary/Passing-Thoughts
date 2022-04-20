import styled from "styled-components";

export const Form = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 2px;
  border: 1px solid black;
  border-radius: 5px;

  & input {
    display: flex;
    flex-direction: row;
    gap: 2px;
    padding: 9px 13px;
    border-radius: 5px;
    border: none;
  }

  & input::placeholder {
    font-size: 15px;
  }

  & input:focus {
    outline: none;
  }
`;
