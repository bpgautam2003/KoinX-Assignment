import React from "react";
import { Button } from "@mui/material";
import logo from "../Assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <header className="navigation-link">
      <img className="koinx-logo-icon" loading="lazy" alt="" src={logo} />
      <div className="crypto-taxes-parent">
        <div className="crypto-taxes">Crypto Taxes</div>
        <div className="free-tools">Free Tools</div>
        <div className="resource-center">Resource Center</div>
        <Button
          className="label-span"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background:
              "linear-gradient(81.62deg, #2870ea 8.72%, #1b4aef 85.01%)",
            borderRadius: "8px",
            height: 40,
          }}
        >
          Get Started
        </Button>
      </div>
      <div className="menu">
        <MenuIcon />
      </div>
    </header>
  );
};

export default Navbar;
