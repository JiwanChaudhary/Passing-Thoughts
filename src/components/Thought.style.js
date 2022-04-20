import styled from "styled-components";

export const Li = styled.li`
  background-color: #fff;
  color: #000;
  list-style: none;
  margin: 5px 0;
  min-width: 250px;
  max-width: 250px;

  & button {
      color: green;
      font-size: 25px;
      border: none;
      border-radius: 3px;
      float: right;
      background: none;
      padding: 7px 10px 0 0;
  }

  & button:hover {
    color: red;
    cursor: pointer;
  }

  & div {
    padding: 10px;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
  }
`;
