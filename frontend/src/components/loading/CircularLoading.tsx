import { color, height, width } from "@mui/system";
import { type } from "os";
import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

// <CircularProgress color="secondary|success|inherit" />

interface IProps {
  type: any;
  color?: string;
  height?: string;
  width?: string;
  delay?: number;
}

const CustomCircularLoading = (props: IProps) => {
  const { type, color, width, height, delay } = props;

  return (
    <ReactLoading
      type={type}
      color={color}
      height={height}
      width={width}
      delay={delay}
    />
  );
};

export default CustomCircularLoading;

// props:
// - type
// - color     #ffffff
// - height    default 64 (px)
// - width     default 64 (px)
// - delay     0 (msecs)
// - className

// Loading Types
// - blank
// - balls
// - bars
// - bubbles
// - cubes
// - cylon
// - spin
// - spinningBubbles
// - spokes
