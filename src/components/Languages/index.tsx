import { useContext } from "react";
import { Box, Button } from "@mui/material";

import LanguageContext from "../Context/Context";
import { LOCALES } from "../../config";

const Languages = () => {
  const context = useContext(LanguageContext);
  const { language, setLanguage } = context
    ? context
    : { language: "", setLanguage: () => {} };
  console.log("context: ", context);
  return (
    <Box>
      <Button
        disabled={language === LOCALES.ENGLISH}
        sx={{ my: 2, color: "white" }}
        onClick={() => setLanguage(LOCALES.ENGLISH)}
      >
        English
      </Button>
      <Button
        disabled={language === LOCALES.UKRANIAN}
        sx={{ my: 2, color: "white" }}
        onClick={() => setLanguage(LOCALES.UKRANIAN)}
      >
        Ukranian
      </Button>
    </Box>
  );
};

export default Languages;
