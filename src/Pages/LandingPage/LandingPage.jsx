import { Stack, Typography, Grow } from "@mui/material";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    // Trigger bounce animation after Grow animation finishes
    const timer = setTimeout(() => {
      setBounce(true);
    }, 1000); // Adjust the timeout based on your Grow animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center" className="App" height="100%">
      <Grow in={true} timeout={1000}>
        <a href="https://github.com/Thomas-Vargas">
          <img src="./logo2.svg" alt="Logo" className={bounce ? "bounce" : ""} />
        </a>
      </Grow>

      <Grow in={true} timeout={2000}>
        <Typography color="#FFFFFF" mt={2} style={{ fontFamily: 'Nunito', fontSize: '24px' }}>
          Under construction, stay tuned!
        </Typography>
      </Grow>
    </Stack>
  );
};

export default LandingPage;
