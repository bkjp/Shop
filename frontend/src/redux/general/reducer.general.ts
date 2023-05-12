import { createReducer } from "@reduxjs/toolkit";
import {
  closeCartSidebar,
  closeLoginSidebar,
  closeMenuSidebar,
  closeSidebarMenu,
  closeUserSidebar,
  openCartSidebar,
  openLoginSidebar,
  openMenuSidebar,
  openSidebarMenu,
  openUserSidebar,
} from "./actions.general";

interface GeneralType {
  sidebarIsOpen: boolean;
  loginSidebarIsOpen: boolean;
  menuSidebarIsOpen: boolean;
  cartSidebarIsOpen: boolean;
  userSidebarIsOpen: boolean;
}
const initialState: GeneralType = {
  sidebarIsOpen: true,
  loginSidebarIsOpen: false,
  menuSidebarIsOpen: false,
  cartSidebarIsOpen: false,
  userSidebarIsOpen: false,
};

const sidebarReducer = createReducer(initialState, (builder) => {
  builder.addCase(openSidebarMenu, (state, action) => {
    state.sidebarIsOpen = true;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });
  builder.addCase(closeSidebarMenu, (state, action) => {
    state.sidebarIsOpen = false;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });

  // login sidebar
  builder.addCase(openLoginSidebar, (state, action) => {
    state.sidebarIsOpen = true;
    state.loginSidebarIsOpen = true;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });
  builder.addCase(closeLoginSidebar, (state, action) => {
    state.sidebarIsOpen = false;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });

  // Menu sidebar
  builder.addCase(openMenuSidebar, (state, action) => {
    state.sidebarIsOpen = true;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = true;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });
  builder.addCase(closeMenuSidebar, (state, action) => {
    state.sidebarIsOpen = false;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });

  // Cart sidebar
  builder.addCase(openCartSidebar, (state, action) => {
    state.sidebarIsOpen = true;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = true;
    state.userSidebarIsOpen = false;
  });
  builder.addCase(closeCartSidebar, (state, action) => {
    state.sidebarIsOpen = false;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });

  // User sidebar
  builder.addCase(openUserSidebar, (state, action) => {
    state.sidebarIsOpen = true;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = true;
  });
  builder.addCase(closeUserSidebar, (state, action) => {
    state.sidebarIsOpen = false;
    state.loginSidebarIsOpen = false;
    state.menuSidebarIsOpen = false;
    state.cartSidebarIsOpen = false;
    state.userSidebarIsOpen = false;
  });
});

export default sidebarReducer;
