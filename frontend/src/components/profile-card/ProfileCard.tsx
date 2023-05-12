import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import profilePicture from "./jules.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SContainer = styled.div`
  width: 13vw;
  background-color: gray;
  color: white
  border: 1px solid yellow;
  z-index: 100;
`;

const SPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0 0;
  height: 10vh;

  div {
    position: relative;
    width: 50%;
    border-radius: 50px;
    background-color: red;
  }
`;

const SProfileName = styled.div`
  text-align: center;
  padding: 10px 0;
  line-height: 1.2;
`;

const SWrapperItem = styled.div`
  padding: 10px 0 10px 0;
  height: 10vh;
`;

const SItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  span {
    margin: 0 5px 0 10px;
    cursor: pointer;
  }
`;

export const ProfileCard = () => {
  const router = useRouter();
  const { data } = useSession();

  const logout = () => {
    signOut({
      redirect: false,
    });
  };

  return (
    <SContainer>
      <SPicture>
        <div>
          {/* <Image src={profilePicture} layout="responsive" /> */}
        </div>
      </SPicture>

      <SProfileName>
        <div style={{ fontSize: "1.3rem" }}>{data.user.name} </div>
        <div style={{ color: "yellow" }}>{data.user.email} </div>
      </SProfileName>

      <SWrapperItem>
        <SItem onClick={() => router.push(" /dashboard/general")}>
          <span>
            <DashboardIcon />
          </span>
          <span>Dashboard</span>
        </SItem>
        <SItem onClick={logout}>
          <span>
            <LogoutIcon />
          </span>
          <span>Logout</span>
        </SItem>
      </SWrapperItem>
    </SContainer>
  );
};
