import { Button } from "@mui/material";

const GreenButton = ({ color, children }) => (
    <Button
          variant="contained"
          sx={{
            m:2,
            my: 4,
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
export default GreenButton;