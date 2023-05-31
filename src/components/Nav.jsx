import React from "react";

// ** Data import
import { navigationData } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((item, index) => {
          return (
            <li>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
