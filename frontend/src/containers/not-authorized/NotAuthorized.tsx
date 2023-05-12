import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import NotAuthorizedImage from "./NotAuthorized.png";

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SImage = styled.div`
  position: relative;
  height: 30vh;
  width: 15vw;
  margin: 10vh 0 5vh 0;
`;

const SMessage = styled.div`
  color: #e1985f;
  font-size: 3rem;
  font-weight: bold;
  padding: 0 5vw;
  text-align: center;
  line-height: 1.1;
`;
////////////////////////////////////////////////////////////////////////////

interface Props {
  message: string;
}

export const NotAuthorized = (props: Props) => {
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <SImage>
          {/* <Image src={NotAuthorizedImage} layout="fill" /> */}
        </SImage>
        <SMessage>{props.message}</SMessage>
        <Button
          sx={{ mt: 4 }}
          variant="contained"
          onClick={() => router.push("/")}
        >
          Go Back
        </Button>
      </Wrapper>
    </Container>
  );
};
