import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return <p className="Footer"> Copyright © {currentYear}</p>;
}

export default Footer;
