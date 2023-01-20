import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Navigation = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation array
  const navigation = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About",
      link: "#about",
    },
  ];

  return (
    <nav className="navigation">
      <span className="hamburger">X</span>
      <div className="navigation-menu">
        {navigation.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
