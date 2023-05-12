import styled, { keyframes } from "styled-components";

export const anim_progress_bar = keyframes`
        0%{
        transform: scaleX(0);
       
        }
        25%{
        transform: scaleX(.25);
        opacity: 0.75;
        }
        50%{
        transform: scaleX(.50);
        opacity: 0.5;
        }
        75%{
        transform: scaleX(.75);
        opacity: .25;
        }
        100%{
        transform: scaleX(1);
        opacity: 1;
        }
`;

//////////////////////// UTILISATION  ///////////////////////////
const Container = styled.div`
  animation: ${anim_progress_bar};
  animation-duration: 300ms;
  animation-iteration-count: 5 | infinite;
  animation-direction: normal(default) | reverse | alternate | alternate-reverse;
  animation-fill-mode: backwards | forwards | both;
  animation-timing-function: cubic-bezier(
    0,
    0,
    -1,
    1
  ); // ou une valeur prédéfinie
`;
// ou bien
// animation : name duration delay fill-mode timing-function
