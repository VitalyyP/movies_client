import { Form, Field } from "react-final-form";
import CheckIcon from "@mui/icons-material/Check";
import { IconButton, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";

import IValues from "../../interfaces/IValues.interface";

const SelectedMoviesForm = ({ onSubmit }: any) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors: IValues = {};
        if (!values.listName) {
          errors.listName = "Required";
        }
        return errors;
      }}
      render={({ handleSubmit, form, values }) => (
        <form onSubmit={handleSubmit}>
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Field<string>
              name="listName"
              render={({ input, meta }) => (
                <>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter the list name"
                    inputProps={{ "aria-label": "enter list name" }}
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
              )}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              type="submit"
              color="primary"
              sx={{ p: "10px" }}
              aria-label="check"
            >
              <CheckIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  );
};

export default SelectedMoviesForm;
