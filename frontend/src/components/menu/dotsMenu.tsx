import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import Link from "next/link";

const SContentMenu = styled.div`
  width: 0;
  height: 0;
  overflow: hidden;
`;

const SContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;

  &:hover ${SContentMenu} {
    background-color: #282828;
    color: white;
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 0;
    height: 100px;
    width: 150px;
    border-radius: 10px;
    z-index: 50;
  }
`;

export const CustomDotsMenu = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(false);
    setOpenMenu(!openMenu);
  };

  return (
    <SContainer>
      <Button variant="contained" size="small" onClick={handleOpenMenu}>
        <MoreHorizIcon fontSize="small" />
      </Button>
      <SContentMenu>{children}</SContentMenu>
    </SContainer>
  );
};
