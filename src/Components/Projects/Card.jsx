import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import useFirebase from "../../Hooks/useFirebase";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 6px;
  /* transition: all 0.2s ease-in-out;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.05);
  } */
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const Title = styled.div`
  margin: 10px 0;
  font-size: 22px;
`;
const Description = styled.div`
  height: 410px;
`;
function Card({ name, description, Icon }) {
  const { event } = useFirebase();
  return (
    <React.Fragment>
      <Container onClick={() => event(name, "Projects")}>
        <Icon fontSize="large" style={{ fontSize: "60px" }} />
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Container>
    </React.Fragment>
  );
}
Card.propTypes = {
  name: propTypes.string,
  Icon: propTypes.object,
  description: propTypes.string,
};
export default Card;
