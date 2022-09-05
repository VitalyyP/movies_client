import React, { useReducer, createContext } from "react";

import { useDefaultContext } from "./defaultContext";
import { LOCALES, STORAGE_KEY } from "../../const";
import { saveToStorage } from "../../utils/localStorage";
import IAppContext from "../../interfaces/IAppContext";

const AppContext = createContext<IAppContext | null>(null);

let reducer = (
  state: { locale: string },
  action: { type: string; locale: string }
) => {
  switch (action.type) {
    case "setLocale":
      console.log("saveToStorage(STORAGE_KEY, action.locale");
      saveToStorage(STORAGE_KEY, action.locale);
      return { ...state, locale: action.locale };
    default:
      throw new Error(`Unsuported action.type: ${action.type}`);
  }
};

const initialState = {
  locale: LOCALES.UKRANIAN,
  // locale: LOCALES.ENGLISH,
};

type Props = {
  children: JSX.Element;
};

const AppContextProvider = ({ children }: Props) => {
  const defaultContext = useDefaultContext();
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, defaultContext);
  console.log("state: ", state);
  console.log("dispatch:", dispatch);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
