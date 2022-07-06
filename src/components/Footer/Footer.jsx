import React from "react";
import "./Footer.css";

import { headerData } from "../../data/headerData";

export default function Footer() {
  return (
    <div className='footer'>
      <p>Made by {headerData.name}</p>
    </div>
  );
}
