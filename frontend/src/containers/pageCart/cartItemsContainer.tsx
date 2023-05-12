import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { removeFromCart, updateQtyAction } from "../../redux/cart/actions.cart";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import defaultImage from "../../assets/images/default/default_image.webp";
import { Grid } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

///////////////////////////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  margin: 10px 0;
`;

const SSelectQty = styled.select`
  color: blue;
`;

const SCartItem = styled.div`
  background-color: var(--bg-page);
  display: flex;
  margin: 20px 0;
  height: auto;
`;

const SImageWrapper = styled.div`
  display: block;
  margin: 0 15px 0 0;
  padding: 10px 10px;
  overflow: hidden;
  width: 100%;
  height: 7vh;
`;

const SColumnHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  font-weight: bold;
`;

const SColumnHeaderText = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  font-weight: bold;
  padding: 0 0 0 10px;
`;

const SColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px 10px;
`;

const SColumnText = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding: 0 0 0 10px;
`;
const SDeleteButton = styled.button`
  border: none;
`;

const SChangeQtyWrapper = styled.div`
  background-color: #f4f48d;
  display: flex;
  align-items: center;
`;

const SChangeQtySpan = styled.span`
  margin: 0 0 0 5px;
  font-size: var(--font-size-tinyText);
`;

////////////////////////////////////////////////////////////////

const CCartItemsContainer = () => {
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.cart);

  const removeFromCarthandler = (x: number) => {
    dispatch(removeFromCart(x));
  };

  //----------------------------------------------------------------------
  const [qtySelected, setQtySelected] = useState("");

  const updateQtyHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    itemId: number
  ) => {
    // setQtySelected((e.target as HTMLSelectElement).value);
    setQtySelected(e.target.value);

    // We dispatch adjustQtyOfItem action with itemId and qtySelected as payload
    dispatch(
      updateQtyAction({
        newQty: Number(e.target.value),
        itemId: itemId,
      })
    );
  };
  //---------------------------------------------------------------------
  return (
    <SContainer>
      <div>
        <Grid container>
          <Grid item xs={12} md={2} lg={2}></Grid>

          <Grid item xs={12} md={4} lg={4}>
            <SColumnHeaderText>Nom du produit</SColumnHeaderText>
          </Grid>

          <Grid item xs={12} md={1} lg={1}>
            <SColumnHeader>Quantité</SColumnHeader>
          </Grid>

          <Grid item xs={12} md={1} lg={1}>
            <SColumnHeader>Prix u</SColumnHeader>
          </Grid>

          <Grid item xs={12} md={2} lg={2}>
            <SColumnHeader>Sous total</SColumnHeader>
          </Grid>

          <Grid item xs={12} md={2} lg={2}>
            <SColumnHeader>Supprimer</SColumnHeader>
          </Grid>
        </Grid>
      </div>
      {cartItems.map((product) => (
        <SCartItem key={product.id}>
          <Grid container>
            <Grid item xs={12} md={2} lg={2}>
              <SImageWrapper>
                <Image
                  src={
                    product.product_images[0].image
                      ? product.product_images[0].image
                      : defaultImage
                  }
                  alt="some text"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </SImageWrapper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <SColumnText>
                <div>
                  <div> {product.name}</div>
                  <SChangeQtyWrapper>
                    {product.stock > 0 ? (
                      <SSelectQty
                        value={qtySelected}
                        onChange={(e) => updateQtyHandler(e, product.id)}
                      >
                        <option value="">{product.qty}</option>
                        {[...Array(product.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </SSelectQty>
                    ) : (
                      <h4>Stock de produit épuisé.</h4>
                    )}
                    <SChangeQtySpan>Change quantity</SChangeQtySpan>
                  </SChangeQtyWrapper>
                </div>
              </SColumnText>
            </Grid>

            <Grid item xs={12} md={1} lg={1}>
              <SColumn>{product.qty}</SColumn>
            </Grid>

            <Grid item xs={12} md={1} lg={1}>
              <SColumn>{product.price}</SColumn>
            </Grid>

            <Grid item xs={12} md={2} lg={2}>
              <SColumn>{product.price * product.qty}</SColumn>
            </Grid>

            <Grid item xs={12} md={2} lg={2}>
              <SColumn>
                <SDeleteButton
                  onClick={() => removeFromCarthandler(product.id)}
                >
                  <DeleteOutlineOutlinedIcon />
                </SDeleteButton>
              </SColumn>
            </Grid>
          </Grid>
        </SCartItem>
      ))}
    </SContainer>
  );
};

export default CCartItemsContainer;
