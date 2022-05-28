import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(dest => {
    return <a key={dest} href={`#${dest}`}>{dest}</a>
  })}</nav>;
}

export default NavBar;
