import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { dataArray } from "./data";
const Container = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 6px;
  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

function Projects() {
  return (
    <React.Fragment>
      <Container>
        <h4>Our expertise in:</h4>
        <Grid container spacing={3}>
          {dataArray.map(({ name, description, icon }) => (
            <React.Fragment key={name}>
              <Grid item xs={12} sm={6} md={4}>
                <Card name={name} description={description} Icon={icon} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
