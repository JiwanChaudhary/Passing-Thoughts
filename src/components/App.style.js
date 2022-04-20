import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  place-items: center;
  
  & ul {
      padding: 0;
  }
`;

export const Header = styled.header`
  margin: 0;
  padding: 0;

  & h1 {
      cursor: pointer;
  }
  & h1::before {
    content: "💭";
    padding: 0 10px;
  }
`;
