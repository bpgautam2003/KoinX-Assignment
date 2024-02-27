import { Button } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import frame from '../Assets/Frame.png'

const GetStarted = () => {
  return (
    <div className="blue-container">
      <h2>Get Started with KoinX for FREE</h2>
      <p>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src={frame} alt=" " />
      <Button
        sx={{
          maxWidth: "80%",
          borderRadius: 2.5,
          textTransform: "none",
          color: "black",
          fontSize: "16",
          background: "white",
          "&:hover": {
            background: "white",
            color: "black"
          },
          height: 40,
          marginTop: 3,
          fontWeight: "500",
          marginBottom: 2,
        }}
      >
        Get Started for FREE <ArrowForwardIcon fontSize="small" />
      </Button>
    </div>
  );
}

export default GetStarted
