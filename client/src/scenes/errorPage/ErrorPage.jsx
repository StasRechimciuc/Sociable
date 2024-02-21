import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Button, Box } from "@mui/material";
const ErrorPage = () => {
  const navigate = useNavigate();
  const { palette } = useTheme();

  return (
    <Box>
      <h1>Page not found 404 Error</h1>
      <Button
        fullWidth
        type="submit"
        sx={{
          m: "2rem 0",
          p: "1rem",
          backgroundColor: palette.primary.main,
          color: palette.background.alt,
          "&:hover": { color: palette.primary.main },
        }}
        onClick={() => navigate("/home")}
      >
        Back To Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
