import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import ISnackbar from "../../interfaces/ISnackbar.interface";
import { translate } from "../../i18n";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbar({
  openAlert,
  // handleClick,
  handleClose,
}: ISnackbar) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={openAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          color="info"
          sx={{ width: "100%", m: "0px" }}
        >
          {translate("copied")}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
