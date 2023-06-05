import React from "react";
import styled from "styled-components";

const items = [
  {
    count: "500+",
    name: "Building Projects",
  },
  {
    count: "20,000 +",
    name: "Villages Electrified",
  },
  {
    count: "7000+ kms",
    name: "Water Pipelines",
  },
  {
    count: "9000+ Acres",
    name: "Land Irritated",
  },
  {
    count: "11000+",
    name: "Employees",
  },
];
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px dashed #dddddd;
  padding: 10px;
  margin: 10px 0;
  &:last-child {
    border-right: none;
  }
`;

const Count = styled.div`
  font-size: 25px;
`;
const Name = styled.span`
  font-size: 15px;
`;
function Metrics() {
  return (
    <React.Fragment>
      <Container>
        {items.map(({ count, name }) => (
          <Item key={name}>
            <Count>{count}</Count>
            <Name>{name}</Name>
          </Item>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default Metrics;
