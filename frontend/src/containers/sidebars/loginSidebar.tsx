import React from "react";
import styled, { css } from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { closeLoginSidebar } from "../../redux/general/actions.general";
import { useRouter } from "next/router";

//////////////////////////////////////////////////////////////////////////////

interface ISprops {
  loginSidebarIsOpen: boolean;
}

const SContainer = styled.div<ISprops>`
  ${(props) =>
    props.loginSidebarIsOpen === true &&
    css`
      background-color: white;
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 30vh;
      padding: 5px 15px;
      z-index: 999999;
    `}

  ${(props) =>
    props.loginSidebarIsOpen === false &&
    css`
      display: none;
    `}
`;

const SHead = styled.div`
  display: inline-block;
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

const LoginSidebar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loginSidebarIsOpen } = useAppSelector((state) => state.sidebar);

  // Tis function is used to close the loginSidebar when clicking on the cancel icon
  const onCloseLoginSidebar = () => {
    dispatch(closeLoginSidebar());
  };

  const loginUser = () => {
    router.push("/account/login");
  };

  return (
    <SContainer loginSidebarIsOpen={loginSidebarIsOpen}>
      <SHead onClick={onCloseLoginSidebar}>
        <CancelIcon color="primary" fontSize="medium" />
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
          <SStyledButton onClick={loginUser}>Connectez-vous</SStyledButton>
          <SStyledButton>Create account</SStyledButton>
          <SStyledButton>SingIn partner</SStyledButton>
        </SFoot>
      </SContent>
    </SContainer>
  );
};

export default LoginSidebar;
