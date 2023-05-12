import React from "react";
import styled from "styled-components";
import { Logo } from "../../components";
import CCartIcon from "../../components/cartIcon/cartIcon";
import { openCartSidebar } from "../../redux/general/actions.general";
import { useAppDispatch } from "../../redux/store";

///////////////////////////////////////////////////////////////

const SContainer = styled.div`
  background-color: #6767de;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  padding: 10px 5vw;
`;

const SCartIcon = styled.div`
  cursor: pointer;
`;

///////////////////////////////////////////////////////////////////

const CCartHeader = () => {
  const dispatch = useAppDispatch();

  const onOpenCartSidebar = () => {
    dispatch(openCartSidebar());
  };

  return (
    <SContainer>
      <Logo />
      <SCartIcon onClick={onOpenCartSidebar}>
        <CCartIcon />
      </SCartIcon>
    </SContainer>
  );
};

export default CCartHeader;
