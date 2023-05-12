import React, { useState } from "react";
import styled, { css } from "styled-components";
import Select from "react-select";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TextField } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { usePostRequest } from "../../helpers/hooks/requests/postRequests";
import { NEXT_PUBLIC_API_BASE_URL } from "../../config/VariableConfig";
import CustomCircularLoading from "../loading/CircularLoading";
import { Switch, Case, Default, If, Else, Then } from "react-if";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { create_category } from "../../redux/category/actions.category";

interface IStyledProps {
  toggle: boolean;
}

const SLabel = styled.div`
  font-size: var(--font-size-label);
`;

const SIconAddCategory = styled.span`
  position: relative;
  margin: 0 0 0 20px;
  cursor: pointer;
`;

const SCategoryBox = styled.div<IStyledProps>`
  position: absolute;
  top: 15px;
  left: 30px;

  ${(props) =>
    props.toggle === true &&
    css`
      font-size: var(--font-size-label);
      border-radius: 10px;
      width: auto;
      height: auto;
      z-index: 50;
    `}

  ${(props) =>
    props.toggle === false &&
    css`
      width: 0;
      height: 0;
      overflow: hidden;
      display: none;
    `}
`;

const SForm = styled.form`
  background-color: pink;
  padding: 20px 20px;
`;

const STitle = styled.div`
  display: flex;
  div {
    margin: 0 10px 0 0;
  }
`;

///////////////////////////////////////////////////////////////////////

interface IProps {
  label: string;
  data: {
    id: number;
    name: string;
    slug?: string;
    is_active?: boolean;
    created_at?: string;
  }[];
}

//////////////////////////////////////////////////////////////////////////////////////

export const CustomCategorySelect = (props: IProps) => {
  const label = props.label;
  const data = props.data;

  const dispatch = useAppDispatch();

  // We look category state
  // const { loading, feedback, category, status } = useAppSelector(
  //   (state) => state.category
  // );

  const dataOptions = data.map((item: { name: string }) => ({
    label: item.name,
    value: item.name,
  }));

  // Local state of form category
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");

  // Local state to open and close SCategoryBox
  const [toggle, setToggle] = useState(false);

  //------------------------------------------------------------------

  // We call usePostRequest to get values in order to make request using psotData
  const { result, status, success, failed, error, postData } = usePostRequest();

  // Function used to dispatch form value of category in the backend
  // This local state is to store the status response coming from the
  // `${API_BASE_URL}/api/categories/create/`,
  const handleAddCategory = () => {
    postData({
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/categories/create/`,
      data: {
        name: categoryName,
        slug: categorySlug,
      },
    });

    // We clear the inputs
    setCategoryName("");
    setCategorySlug("");
  };

  //------------------------------------------------------------------------

  // Fonction used to open category box when clicking on add icon mui.
  const handleOpenCategoryBox = () => {
    setToggle(!toggle);
  };

  // Function used to close category box when clicking on abort button.
  const handleCloseCategoryBox = () => {
    // We delete the existing values
    setCategoryName("");
    setCategorySlug("");
    //We close the box
    setToggle(false);
  };

  return (
    <div>
      <SLabel>
        <div>{label}</div>
        <SIconAddCategory>
          <PlaylistAddIcon color="primary" onClick={handleOpenCategoryBox} />
          <SCategoryBox toggle={toggle}>
            <SForm>
              <STitle>
                <div>Ajouter une catégorie</div>

                <If condition={!success}>
                  <Then>
                    <CustomCircularLoading
                      type="spin"
                      height="10%"
                      width="10%"
                    />
                  </Then>
                  <Else>
                    <If condition={success}>
                      <Then>
                        <CheckCircleIcon color="success" />
                      </Then>
                      <Else></Else>
                    </If>
                  </Else>
                </If>
              </STitle>
              <div>
                <TextField
                  variant="standard"
                  label="Nom"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <TextField
                  variant="standard"
                  label="Slug"
                  value={categorySlug}
                  onChange={(e) => setCategorySlug(e.target.value)}
                />
              </div>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{ mt: 3 }}
                  color="success"
                  variant="contained"
                  onClick={handleCloseCategoryBox}
                >
                  Annuler
                </Button>
                <Button
                  sx={{ mt: 3, ml: 2 }}
                  variant="contained"
                  onClick={handleAddCategory}
                >
                  Enregistrer
                </Button>
              </Box>
            </SForm>
          </SCategoryBox>
        </SIconAddCategory>
      </SLabel>
      <Select options={dataOptions} />
    </div>
  );
};
