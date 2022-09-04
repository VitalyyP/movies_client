import React, { useReducer, createContext } from "react";
import defaultContext from "./defaultContext";
import { LOCALES } from "../../config";
// import { saveToStorage } from "../../utils/localStorage";
// import { STORAGE_KEY } from "../../constants/locale";

import IAppContext from "../../interfaces/IAppContext";

const AppContext = createContext<IAppContext | null>(null);

let reducer = (
  state: { locale: string },
  action: { type: string; locale: string }
) => {
  switch (action.type) {
    case "reset":
      return { ...state, locale: LOCALES.ENGLISH };
    case "setLocale":
      // saveToStorage(STORAGE_KEY, action.locale);
      return { ...state, locale: action.locale };
    default:
      return { ...state, locale: LOCALES.ENGLISH };
  }
};

const initialState = {
  locale: LOCALES.ENGLISH,
};

type Props = {
  children: JSX.Element;
};

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state: ", state);
  console.log("dispatch:", dispatch);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
