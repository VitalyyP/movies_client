import React from "react";
import { createContext, useReducer, useContext } from "react";
import {
  LocaleReducer,
  IState,
  initialState,
  LocaleActions,
} from "./LocaleReducer";

type LocaleContextType = {
  state: IState;
  dispatch: React.Dispatch<LocaleActions>;
};

const LocaleContext = createContext<LocaleContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export const useLocaleContext = (): LocaleContextType => {
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error("useLocaleContext must be used within LocaleContext");
  }

  return context;
};

export const useLocaleDispatch = (): LocaleContextType => {
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error("useLocaleDispatch must be used within LocaleContext");
  }

  return context;
};

export const LocaleProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(LocaleReducer, initialState);

  return (
    <LocaleContext.Provider value={{ state, dispatch }}>
      {children}
    </LocaleContext.Provider>
  );
};
