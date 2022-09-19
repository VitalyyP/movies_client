import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import flatten from "flat";

import { LOCALES } from "./locale";
import messages from "./messages";

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={flatten(messages[locale])}
  >
    {children}
  </IntlProvider>
);

export default Provider;
