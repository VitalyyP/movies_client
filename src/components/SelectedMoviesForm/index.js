import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";

const SelectedMoviesForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <CheckIcon />
      </div>
    </Box>
  );
};

export default SelectedMoviesForm;
