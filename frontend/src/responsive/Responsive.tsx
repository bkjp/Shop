import React from "react";

const size = {
  mobile: "915px",
  tablet: "768px",
  desktop: "1050px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`, // devive.mobile
  tablet: `(max-width: ${size.tablet})`, // device.tablet
  desktop: `(max-width: ${size.desktop})`, // device.desktop
};
