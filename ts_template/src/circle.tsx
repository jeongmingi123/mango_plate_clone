import React from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 500px;
  height: 500px;
  background-color: ${({ bgColor }) => bgColor};
`;

const Circle = ({ bgColor }: CircleProps) => {
  return (
    <>
      <Container bgColor={bgColor} />
    </>
  );
};

export default Circle;
