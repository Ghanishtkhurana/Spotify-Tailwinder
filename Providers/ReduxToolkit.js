"use client"
import { store } from "@/store/store";
import { Provider } from "react-redux";

export const ReduxToolkit = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

