import { Button } from "@mui/material";

const CustomButton = ({ color, bgcolor, outlineColor, children }) => {
  return (
    <Button
      variant="outlined"
      color={outlineColor}
      sx={{ 
        "&:hover": {
          outline: "none",
          bgcolor: bgcolor,
          color: "white",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
