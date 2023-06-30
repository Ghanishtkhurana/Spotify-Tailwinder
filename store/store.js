"use client";
import SidebarSlice from "@/slice/SidebarSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    sidebarSlice: SidebarSlice,
  },

  devTools: process.env.NODE_ENV !== "production",
});
