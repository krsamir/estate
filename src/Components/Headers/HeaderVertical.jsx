import styled from "styled-components";
import propTypes from "prop-types";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  margin-top: 5px;
`;
const LeftContainer = styled.span`
  text-decoration: underline;
  flex: 1;
  cursor: pointer;
`;
const RightContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
`;
const RightContainerSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SingleSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  border-bottom: 2px solid #ebebeb;
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
function HeaderVertical() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <LeftContainer onClick={() => setShow((prev) => !prev)}>
        Estate ltd
      </LeftContainer>
      <RightContainer show={show}>
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
          <Label>{name}: </Label>
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
export default HeaderVertical;
