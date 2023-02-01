import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link,id) =>(
        <a href={`#${link}`} key={id}>{link}</a>
      ))}
    </nav>
    )
}



export default NavBar;
