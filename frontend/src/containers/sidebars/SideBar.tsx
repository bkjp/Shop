import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import GridViewIcon from "@mui/icons-material/GridView";
import TerminalIcon from "@mui/icons-material/Terminal";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import { Accordion, Logo, NavLink } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import {
  closeSidebarMenu,
  openSidebarMenu,
} from "../../redux/general/actions.general";
import { logout_user } from "../../redux/authentication/actions.auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
/////////////////////////////////////////////////////////////////////////////////////////

interface StyledActiveMenu {
  sidebarIsOpen: boolean;
}

const Container = styled.div<StyledActiveMenu>`
  background-color: var(--color-bg-sidebar);
  color: var(--color-text-sidebar);
  width: ${(props) => (props.sidebarIsOpen ? "300px" : "0")};
  height: 100%;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: white;
  }
`;

const BoxLink = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin: 30px 10px;
  width: 100%;
`;

interface StyledProps {
  linkStatus: string;
}

const LinkItem = styled.div<StyledProps>`
  background: ${(props) => (props.linkStatus === "active" ? "#6a6ad6" : null)};
  border-right: ${(props) =>
    props.linkStatus === "active" ? "5px solid white" : "none"};

  margin: 5px 0;
  width: 97%;
  padding: 10px 0 10px 15px;

  &:hover {
    background-color: #9191ee;
    color: white;
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    margin: 0 15px 0 0;
  }
`;

///////////////////////////////////////////////////////////////////////////////////

export const Sidebar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  //console.log(session);

  // if (status === "authenticated") {
  //   console.log(session.user);
  // }

  const dispatch = useAppDispatch();

  const { sidebarIsOpen } = useAppSelector((state) => state.sidebar);

  // When we click on some line we close the sidebar with this function
  const handleCloseSidebar = () => {
    const sizeScreen = window.innerWidth;
    if (sizeScreen <= 900) {
      dispatch(closeSidebarMenu());
    } else {
      dispatch(openSidebarMenu());
    }
  };

  // When we click on the close icon we dispatch action that set up the sidebar state and close
  const closeSidebar = () => {
    dispatch(closeSidebarMenu());
  };

  // We logout the user by executing this function
  const logout = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(logout_user("dummy string"));
    }
  };

  return (
    <Container sidebarIsOpen={sidebarIsOpen}>
      <Title>
        <CloseIconWrapper>
          <CloseIcon onClick={closeSidebar} />
        </CloseIconWrapper>
        <Logo />
      </Title>

      <BoxLink>
        <LinkItem
          linkStatus={
            router.pathname === "/dashboard/general" ? "active" : "no-active"
          }
        >
          <Link href="/dashboard/general">
            <a onClick={handleCloseSidebar}>
              <div>
                <span>
                  <GridViewIcon />
                </span>
                <span>Mon tableau de bord</span>
              </div>
            </a>
          </Link>
        </LinkItem>

        <LinkItem
          linkStatus={
            router.pathname === "/dashboard/profile" ? "active" : "no-active"
          }
        >
          <Link href="/dashboard/profile">
            <a onClick={handleCloseSidebar}>
              <div>
                <span>
                  <TerminalIcon />
                </span>
                <span>Mon Profil</span>
              </div>
            </a>
          </Link>
        </LinkItem>

        <Accordion
          title="Clients et Fournisseurs"
          bgContent="var(--bg-content-1)"
          openIcon={<ArrowDropDownIcon fontSize="large" />}
          closeIcon={<ArrowDropUpIcon fontSize="large" />}
        >
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/customers"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/customers/customers-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Clients</span>
                </div>
              </a>
            </Link>
          </LinkItem>
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/providers"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/providers/providers-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Fournisseurs</span>
                </div>
              </a>
            </Link>
          </LinkItem>
        </Accordion>

        <Accordion
          title="Produits et M. premieres"
          bgContent="var(--bg-content-1)"
          openIcon={<ArrowDropDownIcon fontSize="large" />}
          closeIcon={<ArrowDropUpIcon fontSize="large" />}
        >
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/selled-products"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/products/products-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Produits vendus</span>
                </div>
              </a>
            </Link>
          </LinkItem>
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/raw-products"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/raw-products/raw-products-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Matieres premieres</span>
                </div>
              </a>
            </Link>
          </LinkItem>
        </Accordion>

        {/* Ventes et clients */}
        <Accordion
          title="Ventes et Achats"
          bgContent="var(--bg-content-1)"
          openIcon={<ArrowDropDownIcon fontSize="large" />}
          closeIcon={<ArrowDropUpIcon fontSize="large" />}
        >
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/selling/bill-selling"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/shopping/shopping-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Achats</span>
                </div>
              </a>
            </Link>
          </LinkItem>
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/selling/orders"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/orders/orders-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Livraisons</span>
                </div>
              </a>
            </Link>
          </LinkItem>
        </Accordion>

        {/*------------------- CATEGORIES TAGS AND TYPES------------------- */}

        <Accordion
          title="Categorie et Types"
          bgContent="var(--bg-content-1)"
          openIcon={<ArrowDropDownIcon fontSize="large" />}
          closeIcon={<ArrowDropUpIcon fontSize="large" />}
        >
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/category/category-list"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/category/category-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Categories</span>
                </div>
              </a>
            </Link>
          </LinkItem>
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/product-type/product-type-list"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/product-type/product-type-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Types de produits</span>
                </div>
              </a>
            </Link>
          </LinkItem>
          <LinkItem
            linkStatus={
              router.pathname === "/dashboard/tags/tags-list"
                ? "active"
                : "no-active"
            }
          >
            <Link href="/dashboard/tags/tags-list">
              <a onClick={handleCloseSidebar}>
                <div>
                  <span>
                    <PaidOutlinedIcon />
                  </span>
                  <span>Tags</span>
                </div>
              </a>
            </Link>
          </LinkItem>
        </Accordion>

        <LinkItem
          linkStatus={
            router.pathname === "/dashboard/message" ? "active" : "no-active"
          }
        >
          <Link href="/dashboard/message">
            <a onClick={handleCloseSidebar}>
              <div>
                <span>
                  <MessageOutlinedIcon />
                </span>
                <span> Message</span>
              </div>
            </a>
          </Link>
        </LinkItem>

        <LinkItem
          linkStatus={
            router.pathname === "/dashboard/settings" ? "active" : "no-active"
          }
        >
          <Link href="/dashboard/settings/general">
            <a onClick={handleCloseSidebar}>
              <div>
                <span>
                  <SettingsOutlinedIcon />
                </span>
                <span> parametres</span>
              </div>
            </a>
          </Link>
        </LinkItem>

        <div onClick={logout}>
          <span>
            <LogoutIcon />
          </span>
          <span>Lougout</span>
        </div>
      </BoxLink>
    </Container>
  );
};
