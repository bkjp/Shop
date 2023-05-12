import styled, { css } from "styled-components";

//////////////////////////////   FLEX     ////////////////////////////////////

export const FlexNormal = `
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const FlexNormalEnd = `
  display:flex;
  justify-content:end;
  align-items:center;
`;

export const FlexNormalStart = `
  display:flex;
  justify-content:start;
  align-items:center;
`;

//////////////////////////////    FORMS   /////////////////////////////////////

export const SDisplayError = styled.div`
  background-color: green;
  color: white;
  line-height: 1.1;
  padding: 5px 5px;
  border: none;
`;

/////////////////////////////     FLEX   ///////////////////////////////////////

interface IPropsStyled {
  bg?: string;
  color?: string;
  fz?: string;
  border?: string;
  br?: string;
  width?: string;
  height?: string;
  margin?: string;
  pd?: string;
  col?: boolean;
  page?: boolean;
}

const Flex = styled.div<IPropsStyled>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.bg ? props.bg : "inherit")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  border: ${(props) => (props.border ? props.border : "none")};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  padding: ${(props) => props.pd && props.pd};

  ${(props) => {
    if (props.col) {
      return css`
        display: flex;
        flex-direction: column;
      `;
    }
  }}

  ${(props) => {
    if (props.page) {
      return css`
        height: 100vh;
        min-height: 100vh;
      `;
    }
  }}
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

/////////////////////////////    GRADIENT    ///////////////////////////////////

export const bgGradientC = `
  background: hsla(0, 6%, 24%, 1);
  background: linear-gradient(
    0deg,
    hsla(0, 6%, 24%, 1) 0%,
    hsla(0, 0%, 0%, 1) 100%
  );
  background: -moz-linear-gradient(
    0deg,
    hsla(0, 6%, 24%, 1) 0%,
    hsla(0, 0%, 0%, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    hsla(0, 6%, 24%, 1) 0%,
    hsla(0, 0%, 0%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#403939", endColorstr="#000000", GradientType=1 );

`;

export const gradientBg = `
  background: rgb(126,81,150);
  background: linear-gradient(90deg, rgba(126,81,150,1) 0%, rgba(4,3,66,1) 66%, rgba(5,4,75,1) 75%, rgba(9,9,121,1) 100%, rgba(2,0,36,1) 100%);
`;

export const gradientText = `
background: #4CDC17;
background: linear-gradient(to right, #4CDC17 56%, #ADCF27 63%, #947A5C 51%, #321978 84%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const gradientSection = `

  /* ff 3.6+ */
    background:-moz-linear-gradient(162deg, rgba(127, 36, 127, 1) 0%, rgba(168, 68, 168, 1) 80%, rgba(0, 209, 255, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(162deg, rgba(127, 36, 127, 1) 0%, rgba(168, 68, 168, 1) 80%, rgba(0, 209, 255, 1) 100%);

    /* opera 11.10+ */
    background:-o-linear-gradient(162deg, rgba(127, 36, 127, 1) 0%, rgba(168, 68, 168, 1) 80%, rgba(0, 209, 255, 1) 100%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00D1FF', endColorstr='#7F247F', GradientType=1 );

    /* ie 10+ */
    background:-ms-linear-gradient(162deg, rgba(127, 36, 127, 1) 0%, rgba(168, 68, 168, 1) 80%, rgba(0, 209, 255, 1) 100%);

    /* global 94%+ browsers support */
    background:linear-gradient(162deg, rgba(127, 36, 127, 1) 0%, rgba(168, 68, 168, 1) 80%, rgba(0, 209, 255, 1) 100%);

 `;

export const gradientBarFeature = `
  /* ff 3.6+ */
    background:-moz-linear-gradient(88deg, rgba(127, 70, 36, 1) 0%, rgba(0, 209, 255, 1) 86%, rgba(168, 120, 68, 0.1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(88deg, rgba(127, 70, 36, 1) 0%, rgba(0, 209, 255, 1) 86%, rgba(168, 120, 68, 0.1) 100%);

    /* opera 11.10+ */
    background:-o-linear-gradient(88deg, rgba(127, 70, 36, 1) 0%, rgba(0, 209, 255, 1) 86%, rgba(168, 120, 68, 0.1) 100%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#A87844', endColorstr='#7F4624', GradientType=0 );

    /* ie 10+ */
    background:-ms-linear-gradient(88deg, rgba(127, 70, 36, 1) 0%, rgba(0, 209, 255, 1) 86%, rgba(168, 120, 68, 0.1) 100%);

    /* global 94%+ browsers support */
    background:linear-gradient(88deg, rgba(127, 70, 36, 1) 0%, rgba(0, 209, 255, 1) 86%, rgba(168, 120, 68, 0.1) 100%);
 `;

export const gradientBrand = `

    /* ff 3.6+ */
    background:-moz-linear-gradient(335deg, rgba(255, 255, 0, 1) 0%, rgba(255, 0, 226, 0.43) 43%, rgba(255, 59, 0, 1) 97%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(335deg, rgba(255, 255, 0, 1) 0%, rgba(255, 0, 226, 0.43) 43%, rgba(255, 59, 0, 1) 97%);

    /* opera 11.10+ */
    background:-o-linear-gradient(335deg, rgba(255, 255, 0, 1) 0%, rgba(255, 0, 226, 0.43) 43%, rgba(255, 59, 0, 1) 97%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFF00', endColorstr='#FF3B00', GradientType=1 );

    /* ie 10+ */
    background:-ms-linear-gradient(335deg, rgba(255, 255, 0, 1) 0%, rgba(255, 0, 226, 0.43) 43%, rgba(255, 59, 0, 1) 97%);

    /* global 94%+ browsers support */
    background:linear-gradient(335deg, rgba(255, 255, 0, 1) 0%, rgba(255, 0, 226, 0.43) 43%, rgba(255, 59, 0, 1) 97%);
   `;
export { Flex, Main, Title, Description, CodeTag };

////////////////////////////////      SHADOW     ////////////////////////////////////////

export const shadowProfilNavbar = `
-webkit-box-shadow: 0px 11px 22px -8px rgba(0,0,0,0.78);
box-shadow: 0px 11px 22px -8px rgba(0,0,0,0.78);
`;
