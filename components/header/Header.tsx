import React from "react";
import Navigation from "../Navigation";
import { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="header-container">
        <div>Jakub Urban</div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
