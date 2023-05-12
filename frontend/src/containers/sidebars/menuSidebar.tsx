import React from "react";
import styled, { css } from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  closeLoginSidebar,
  closeMenuSidebar,
} from "../../redux/general/actions.general";

//////////////////////////////////////////////////////////////////////////////

interface ISprops {
  menuSidebarIsOpen: boolean;
}

const SContainer = styled.div<ISprops>`
  ${(props) =>
    props.menuSidebarIsOpen === true &&
    css`
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 30vh;
      padding: 5px 15px;
      z-index: 9999999;
    `}

  ${(props) =>
    props.menuSidebarIsOpen === false &&
    css`
      display: none;
    `}
`;

const SHead = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const SBody = styled.div``;

const SContent = styled.div`
  margin: 10px 0 0 0;
`;

const SFoot = styled.div``;

const SStyledButton = styled.button`
  background-color: #7e7ee6;
  color: white;
  border: none;
  width: 100%;
  margin: 5px 0;
`;

const STitle = styled.div`
  color: blue;
`;

////////////////////////////////////////////////////////////////////////////

const MenuSidebar = () => {
  const dispatch = useAppDispatch();

  const { menuSidebarIsOpen } = useAppSelector((state) => state.sidebar);

  // Tis function is used to close the loginSidebar when clicking on the cancel icon
  const onCloseMenuSidebar = () => {
    dispatch(closeMenuSidebar());
  };

  return (
    <SContainer menuSidebarIsOpen={menuSidebarIsOpen}>
      <SHead>
        <CloseIcon
          color="primary"
          fontSize="medium"
          onClick={onCloseMenuSidebar}
        />
      </SHead>

      <SContent>
        <SBody>
          <STitle>Bienvenue</STitle>
          <div>Mon Compte</div>
          <ul>
            <li>Achat rapide et facile</li>
            <li>Access au panier</li>
          </ul>
        </SBody>

        <SFoot>
          <SStyledButton>Connectez-vous</SStyledButton>
          <SStyledButton>Create account</SStyledButton>
          <SStyledButton>SingIn partner</SStyledButton>
        </SFoot>
      </SContent>
    </SContainer>
  );
};

export default MenuSidebar;
