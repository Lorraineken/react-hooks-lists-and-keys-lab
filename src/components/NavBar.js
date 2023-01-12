import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const Linktag = links.map((item) => {
    return (<a href={`#${item}`} key={item}>{item}</a>)
  })

  return <nav>{/* display an <a> tag for each link here */}
  {Linktag}
  </nav>;
}

export default NavBar;
