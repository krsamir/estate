import React from "react";
import styled from "styled-components";
import Metrics from "./Metrics";

const Container = styled.div`
  margin: 50px 0 0 10px;
  display: flex;
  justify-content: center;
`;
const TextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  text-decoration: underline;
`;
const DespText = styled.p``;
function Description() {
  return (
    <React.Fragment>
      <Container>
        <TextContainer>
          <Title>Over 5 decades of infra-excellence</Title>
          <DespText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem tenetur alias nemo quas fugiat sequi odio, similique
            optio obcaecati nihil ipsa incidunt magnam sunt natus, expedita
            animi repudiandae. Obcaecati, deleniti! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magnam fugiat libero ullam eligendi
            minus sapiente corporis perferendis reprehenderit nostrum eveniet
            facilis distinctio consequuntur, dicta voluptatem voluptate hic
            doloribus eaque animi! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Odit ipsum explicabo illo, architecto quos ipsa in
            ratione eveniet unde! Corporis, at harum maiores esse accusantium
            repellat ab voluptatum modi eos.
          </DespText>
        </TextContainer>
      </Container>
      <Metrics />
    </React.Fragment>
  );
}

export default Description;
