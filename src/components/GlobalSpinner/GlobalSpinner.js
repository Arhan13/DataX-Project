import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useSpinner } from "../../context/Context";

export default function CircularIndeterminate() {
  const spinner = useSpinner();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(spinner.isLoading);
  }, [spinner]);
 
  return (
    <Stack sx={{ color: "white" }} spacing={2} direction="row">
      {isLoading ? <CircularProgress color="inherit" /> : ""}
    </Stack>
  );
}
