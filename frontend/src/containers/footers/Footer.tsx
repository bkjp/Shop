import React from "react";
import styled from "styled-components";
import { Logo } from "../../components";
import { device } from "../../responsive/Responsive";

const Container = styled.footer`
  background-color: var(--color-bg-footer);
  color: white;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 35px 0;
  color: white;
  padding: 20px;
  div {
    width: 20vw;
  }

  @media ${device.mobile} {
    div {
      width: 75vw;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const Item = styled.div`
  color: white;
  div {
    cursor: pointer;
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

const TitleItem = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin: 30px 0;
  border-bottom: 1px solid white;
`;

const CopyRight = styled.div`
  text-align: center;
  margin: 30px 0;
`;

export const Footer = () => {
  return (
    <Container>
      <Title>
        <div>
          <Logo />
        </div>
      </Title>
      <Content>
        <Item>
          <TitleItem>Nos produits</TitleItem>
          <div>Templates pour sites web</div>
          <div>Sites web</div>
          <div>Applications web</div>
          <div>Boutiques en ligne</div>
          <div>Logos</div>
          <div>Marketing</div>
        </Item>
        <Item>
          <TitleItem>Nos Clients</TitleItem>
          <div>Entrepreneurs</div>
          <div>Developpeurs</div>
          <div>Restaurants</div>
          <div>Artistes</div>
          <div>Shopping</div>
          <div>Etudiants</div>
          <div>Instructeurs</div>
          <div>Épiceries</div>
        </Item>
        <Item>
          <TitleItem>Entreprise</TitleItem>
          <div>Nous connaitre</div>
          <div>Recrutement</div>
        </Item>
        <Item>
          <TitleItem>Nous Joindre</TitleItem>
          <div>infos@webvision.com</div>
          <div>Recrutement</div>
        </Item>
        <Item>
          <TitleItem>Nous Suivre</TitleItem>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Instagram</div>
          <div>YouTube</div>
        </Item>
      </Content>
      <CopyRight>
        &copy; Copyright 2022 betfien technologies. All rights reserved.
      </CopyRight>
    </Container>
  );
};
