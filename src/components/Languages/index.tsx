import { Box, Button } from "@mui/material";

import {
  useLocaleContext,
  useLocaleDispatch,
} from "../../context/LocaleContext";
import { setLocale } from "../../context/LocaleReducer";
import { LOCALES } from "../../const";
import { saveToStorage } from "../../utils/localStorage";

const Languages = () => {
  const { state } = useLocaleContext();
  const { locale } = state;
  const { dispatch } = useLocaleDispatch();

  const setLanguage = (locale: string) => {
    saveToStorage("locale", locale);
    dispatch(setLocale(locale));
  };

  return (
    <Box>
      <Button
        disabled={locale === LOCALES.ENGLISH}
        sx={{ my: 2, color: "white" }}
        onClick={() => setLanguage(LOCALES.ENGLISH)}
      >
        English
      </Button>
      <Button
        disabled={locale === LOCALES.UKRAINIAN}
        sx={{ my: 2, color: "white" }}
        onClick={() => setLanguage(LOCALES.UKRAINIAN)}
      >
        Українська
      </Button>
    </Box>
  );
};

export default Languages;
