import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  padding: 16px;
  text-align: center;
  margin: 16px;
  border: 1px solid green;
`;
const Char = (props) => {
  return <Container onClick={props.clicked}>{props.character}</Container>;
};

export default Char;
