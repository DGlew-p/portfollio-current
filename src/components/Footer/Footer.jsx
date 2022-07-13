import React from "react";
import "./Footer.css";

import { landingData } from "../../data/landingData";

export default function Footer() {
  return (
    <div className='footer'>
      <p>Made by {landingData.name}</p>
    </div>
  );
}
