import { createContext, useContext, useReducer } from "react";

interface IAppContext {
  state: { locale: string };
  dispatch: React.Dispatch<{
    type: string;
    locale: string;
  }>;
}

const AppContext = createContext<IAppContext | null>(null);

let reducer = (
  state: { locale: string },
  action: { type: string; locale: string }
) => {
  switch (action.type) {
    case "setLocale":
      return { ...state, locale: action.locale };
    default:
      throw new Error(`Unsuported action.type: ${action.type}`);
  }
};

type Props = {
  children: JSX.Element;
};

const useDefaultContext = () => {
  return {
    locale: "en-uk",
  };
};

const AppContextProvider = ({ children }: Props) => {
  const defaultContext = useDefaultContext();
  const [state, dispatch] = useReducer(reducer, defaultContext);
  console.log("state: ", state);
  console.log("state.locale: ", state.locale);
  console.log("dispatch:", dispatch);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// const { state, dispatch } = useContext(AppContext);

export { AppContext, AppContextProvider };
