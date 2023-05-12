import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const NavStyle = styled.div`
  background-color: orange;
  width: 90;
  margin: 10px 0;
  a {
    padding: 10px;
    text-decoration: none;

    &[aria-current] {
      background-color: #faf9f4;
      color: #353637;
    }
  }
`;

export const NavLink = ({ children, href }) => {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <NavStyle>
      <Link href={href}>
        {React.cloneElement(child, {
          "aria-current": router.pathname === href ? "page" : null,
        })}
      </Link>
    </NavStyle>
  );
};
