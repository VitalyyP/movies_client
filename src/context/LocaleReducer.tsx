import { getFromStorage } from "../utils/localStorage";

export type LocaleActions = SetLocale;

export enum ActionType {
  SetLocale,
}

export interface IState {
  locale: string;
}

export const initialState: IState = {
  locale: getFromStorage("locale") ? getFromStorage("locale") : "en-us",
};

export const LocaleReducer = (state: IState, action: LocaleActions): IState => {
  switch (action.type) {
    case ActionType.SetLocale:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

type SetLocale = {
  type: ActionType.SetLocale;
  payload: IState;
};

export const setLocale = (locale: string): SetLocale => ({
  type: ActionType.SetLocale,
  payload: { locale },
});
