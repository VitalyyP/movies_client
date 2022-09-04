import { createContext } from "react";

interface IContext {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<IContext | null>(null);

export default LanguageContext;
