// import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  margin-top: 5px;
`;
const LeftContainer = styled.div`
  margin-left: 10px;
  text-decoration: underline;
  flex: 1;
  cursor: pointer;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightContainerSections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SingleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-left: 2px solid #ebebeb;
  padding: 10px;
  cursor: pointer;
  &:first-child {
    border-right: none;
  }
  &:hover {
    background-color: #ebebeb;
    border-radius: 6px;
  }
`;
const Label = styled.div`
  color: #787472;
`;
const Description = styled.a`
  color: #092759;
  text-decoration: none;
`;
const sections = [
  { name: "Call", description: "9999999999", type: "num" },
  { name: "Email", description: "host@domain.com", type: "email" },
  { name: "Careers", description: "career@estate.com", type: "email" },
];
function HeaderHorizontal() {
  return (
    <Container>
      <LeftContainer>Estate ltd</LeftContainer>
      <RightContainer>
        <SectionBox sections={sections} />
      </RightContainer>
    </Container>
  );
}

function SectionBox({ sections }) {
  return (
    <RightContainerSections>
      {sections.map(({ name, description, type }) => (
        <SingleSection key={name}>
          <Label>{name}</Label>
          {type === "email" ? (
            <Description href={`mailto:${description}`}>
              {description}
            </Description>
          ) : (
            <Description href={`tel:${description}`}>{description}</Description>
          )}
        </SingleSection>
      ))}
    </RightContainerSections>
  );
}
SectionBox.propTypes = {
  sections: propTypes.array,
};
export default HeaderHorizontal;
