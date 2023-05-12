import { createAction } from "@reduxjs/toolkit";

export const openSidebarMenu = createAction("sidebar/openSidebar");
export const closeSidebarMenu = createAction("sidebar/closeSidebar");

export const openLoginSidebar = createAction("sidebar/openLoginSidebar");
export const closeLoginSidebar = createAction("sidebar/closeLoginSidebar");

export const openMenuSidebar = createAction("sidebar/openMenuSidebar");
export const closeMenuSidebar = createAction("sidebar/closeMenuSidebar");

export const openCartSidebar = createAction("sidebar/openCartSidebar");
export const closeCartSidebar = createAction("sidebar/closeCartSidebar");

export const openUserSidebar = createAction("sidebar/openUserSidebar");
export const closeUserSidebar = createAction("sidebar/closeUserSidebar");
