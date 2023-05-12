import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { anim_progress_bar } from "../../animations/Animations";
import { device } from "../../responsive/Responsive";
import { gradientBarFeature } from "../../styles/sharedstyles";

interface IPropsStyled {
  col: string;
  width: string;
}

const Container = styled.div<IPropsStyled>`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "20vw")};
  cursor: pointer;

  @media ${device.mobile} {
    width: 100%;
    margin: 30px 0;
  }
`;

const EmptyDiv = styled.div`
  ${gradientBarFeature}
  width: 50px;
  height: 5px;
  background-color: white;
  div {
    height: 100%;
    background-color: green;
    transform-origin: left;
    animation: ${anim_progress_bar} 1000ms infinite both ease-in-out;
  }
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 7px 10px 20px 10px;
`;
const Description = styled.div`
  color: white;
  font-size: 1.2rem;
`;

interface IProps {
  title?: string;
  text?: string;
  col?: string;
  width?: string;
}

export const FeatureCard = (props: IProps) => {
  const { title, text, col, width } = props;

  const router = useRouter();

  const connexion = () => {
    router.push("/auth/login");
  };

  return (
    <Container col={col} width={width} onClick={connexion}>
      <div>
        <EmptyDiv>
          <div></div>
        </EmptyDiv>
        <Title>{title}</Title>
      </div>

      <Description>{text}</Description>
    </Container>
  );
};

/////////////////////  UTILISATION  //////////////////////////////////////

// <StandardFeature
//    width="100%"
//    title="Title"
//    text="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum alias
//         dignissimos minus atque reprehenderit! Eos deleniti, temporibus
//         architecto iste harum cum unde atque minus! Dolorum odit iure dolor"
// />;
