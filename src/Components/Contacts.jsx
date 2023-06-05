// import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import useFirebase from "../Hooks/useFirebase";
const Container = styled.div`
  margin: 20px 10px;
`;

const InputBox = styled.div`
  margin-top: 10px;
`;
function Contacts() {
  const { event } = useFirebase();
  return (
    <Container>
      <h3>Contact us</h3>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <InputBox>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              fullWidth
            />
          </InputBox>
          <InputBox>
            <TextField
              id="filled-basic"
              label="Mobile no."
              variant="filled"
              fullWidth
            />
          </InputBox>
          <InputBox>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              fullWidth
            />
          </InputBox>
          <InputBox>
            <TextField
              multiline
              id="filled-basic"
              label="Message"
              variant="filled"
              fullWidth
              rows={5}
            />
          </InputBox>
          <InputBox>
            <Button
              variant="contained"
              onClick={() => event("Contacts", "Contact Screen")}
            >
              Send Message
            </Button>
          </InputBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contacts;
