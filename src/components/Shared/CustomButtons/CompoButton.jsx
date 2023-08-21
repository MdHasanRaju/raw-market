import { Button } from "@mui/material";

const CompoButton = ({ color, children }) => (
  <Button
    variant="outlined"
    sx={{
      "&:hover": {
        outline: "none",
        bgcolor: "green",
        color: "white",
      },
    }}
    color="success"
  >
    {children}
  </Button>
);
export default CompoButton;
