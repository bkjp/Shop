import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import { device } from "../../responsive/Responsive";
import { gradientBg } from "../../styles/sharedstyles";
import { Logo, ProfileCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  Button,
  Select,
  MenuItem,
  OutlinedInput,
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { logout_user } from "../../redux/authentication/actions.auth";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  openCartSidebar,
  openLoginSidebar,
  openMenuSidebar,
} from "../../redux/general/actions.general";
import MenuSidebar from "../sidebars/menuSidebar";
import CSearchInput from "../../components/inputs/searchInput";
import CCartIcon from "../../components/cartIcon/cartIcon";

//////////////////////////////////////////////////////////////////////////////////////////////////

interface IPropsStyled {
  toggleMobileMenu?: boolean;
}

const Container = styled.div`
  ${gradientBg}
  position: relative;
  padding: 2px 30px;
`;

const SHead = styled.div`
  color: white;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 1.1rem;

  span {
    margin: 0 10px 0 0;
    cursor: pointer;
  }
`;

const SBody = styled.div`
  display: flex;
  padding: 10px;
`;

const SBodyLeft = styled.div`
  flex: 2;
`;

const SBodyCenter = styled.div`
  flex: 1;
`;

const SBodyRight = styled.div`
  flex: 2;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const SFoot = styled.div`
  background-color: black;
`;

const SMenuIcon = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  font-size: 1.2rem;
  font-weight: bold;
`;

const SLogout = styled.div`
  position: relative;
`;

const SSelect = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border: 1px solid white;
  padding: 0 5px 0 5px;
  cursor: pointer;
`;

const ConnexionContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1.3;
  color: white;
  font-size: 1.2rem;

  div {
    margin: 0 30px 0 0;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const SCartIcon = styled.div`
  cursor: pointer;
  margin: 0 0 0 10px;
`;

///////////////////////////////////////////////////////////////////////////////

export const Header = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { data, status } = useSession();

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const connexion = () => {
    router.push("/account/login");
  };

  const signup = () => {
    router.push("/account/register");
  };

  const onOpenMenuSidebar = () => {
    dispatch(openMenuSidebar());
  };

  const onOpenLoginSidebar = () => {
    dispatch(openLoginSidebar());
  };

  const onOpenCartSidebar = () => {
    dispatch(openCartSidebar());
  };

  return (
    <Container>
      <SHead>
        <div>
          <span>
            <LocalPhoneOutlinedIcon /> +1 000000000
          </span>
          <span>Commande</span>
          <span>Francais</span>
        </div>
      </SHead>

      <SBody>
        {/* -------------------------------------------------------- */}
        <MenuSidebar />

        <SMenuIcon>
          <MenuIcon fontSize="large" onClick={onOpenMenuSidebar} />
        </SMenuIcon>

        {/* -------------------------------------------------------- */}

        <SBodyLeft>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </SBodyLeft>

        <SBodyCenter>
          <CSearchInput />
        </SBodyCenter>

        <SBodyRight>
          {status === "authenticated" ? (
            <SLogout>
              <SSelect>
                <span>
                  <PersonIcon />
                </span>
                <span style={{ margin: "0 5px 0 7px" }}>{data.user.email}</span>
                <span>
                  <ArrowDropDownIcon fontSize="large" />
                </span>
              </SSelect>
            </SLogout>
          ) : (
            <ConnexionContainer>
              <div>
                <Person2OutlinedIcon
                  fontSize="large"
                  onClick={onOpenLoginSidebar}
                />
                <span> Compte</span>
              </div>
            </ConnexionContainer>
          )}

          <SCartIcon onClick={onOpenCartSidebar}>
            <CCartIcon />
          </SCartIcon>
        </SBodyRight>
      </SBody>

      <SFoot>footer header</SFoot>
    </Container>
  );
};

{
  /* <CCartIcon number={cartItemsCount} />; */
}
