import React, { ReactComponentElement } from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface ISprops {
  open: boolean;
  bgContent: string;
  margin: string;
  pdTitle: string;
  pdBody: string;
  bgTitle: string;
  colorContent: string;
  colorTitle: string;
}

const SContainer = styled.div<Partial<ISprops>>`
  margin: ${(props) => (props.margin ? props.margin : "10px 0")};
  width: 100%;
  height: auto;
`;

const SHead = styled.div<Partial<ISprops>>`
  background-color: ${(props) => (props.bgTitle ? props.bgTitle : "inherit")};
  color: ${(props) => (props.colorTitle ? props.colorTitle : "inherit")};
  padding: ${(props) => (props.pdTitle ? props.pdTitle : "0 0 0 10px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;

  div {
    margin: 0 15px 0 0;
  }
`;

const Body = styled.div<Partial<ISprops>>`
  background-color: ${(props) =>
    props.bgContent ? props.bgContent : "inherit"};
  color: ${(props) => (props.colorContent ? props.colorContent : "inherit")};
  /* padding: ${(props) => (props.pdBody ? props.pdBody : "10px 10px 10px 10px")}; */

  ${(props) =>
    props.open === true &&
    css`
      /* border-left: 2px solid black; */

      height: auto;
      justify-content: space-around;
      align-items: center;
      transition: height 300ms ease-in-out;
    `}

  ${(props) =>
    props.open === false &&
    css`
      max-height: 0;
      height: 0;
      overflow: hidden;
    `}
`;

const Accord = styled.section`
  margin-top: 10px;
`;

//////////////////////////////////////////////////////////////////////////////////////////

interface IProps {
  title: string;
  margin: string;
  pdTitle: string;
  pdBody: string;
  bgContent: string;
  bgTitle: string;
  colorTitle: string;
  colorContent: string;
  openIcon: any;
  closeIcon: any;
  children: any;
}

/////////////////////////////////////////////////////////////////////////////////////////////////

export const Accordion = (props: Partial<IProps>) => {
  const {
    title,
    margin,
    pdTitle,
    pdBody,
    bgContent,
    bgTitle,
    colorContent,
    colorTitle,
    openIcon,
    closeIcon,
    children,
  } = props;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <SContainer margin={margin}>
      <Accord>
        <SHead
          bgTitle={bgTitle}
          colorTitle={colorTitle}
          pdTitle={pdTitle}
          onClick={handleToggle}
        >
          <div>{title} </div>
          {toggle ? <div>{closeIcon} </div> : <div>{openIcon}</div>}
        </SHead>

        <Body
          bgContent={bgContent}
          colorContent={colorContent}
          pdBody={pdBody}
          open={toggle}
        >
          {children}
        </Body>
      </Accord>
    </SContainer>
  );
};

//  <ArrowDropUpIcon fontSize="large" />
//    <ArrowDropDownIcon fontSize="large" />
