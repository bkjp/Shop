import Image from "next/image";
import React from "react";
import styled from "styled-components";
import emptyCart from "../../assets/images/emptyCart.jpeg";

const SContainer = styled.div`
  background-color: var(--bg-page);
`;

const SButtonsWrapper = styled.div`
  margin: 25px 0;
`;

const SRegisterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e244;
  color: black;
  width: 15vw;
  height: 5vh;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
`;

const SShopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 15vw;
  height: 5vh;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 15px 0 0 0;
  cursor: pointer;
`;

const SImageWrapper = styled.div`
  display: block;
`;

///////////////////////////////////////////////////////////////////////////////////

const CEmptyCart = () => {
  return (
    <SContainer>
      <h1>Ouppps !!!!!</h1>

      <SImageWrapper>
        <Image
          src={emptyCart}
          alt="emptycart"
          layout="responsive"
          width={100}
          height={100}
        />
      </SImageWrapper>

      <h4>Votre panier est vide</h4>

      <SButtonsWrapper>
        <SRegisterButton>S'Enregistrer</SRegisterButton>
        <SShopButton>Magasinez maintenant</SShopButton>
      </SButtonsWrapper>
    </SContainer>
  );
};

export default CEmptyCart;
