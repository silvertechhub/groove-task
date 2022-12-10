import React, { useContext, useRef } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,

  SSidebar,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";

import {
  AiOutlineApartment,
  AiOutlineHome,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {

  const { setTheme, theme } = useContext(ThemeContext);
  const { pathname } = useLocation();



  return (
    <SSidebar >
        <SLink>
            <SLogo>
              <img src={logoSVG} alt="logo" />
            </SLogo>
            <SLinkLabel>Hey Alexxx</SLinkLabel>
          </SLink>
    
  
 
      <SDivider />
      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label}>
          <SLink>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {linksArray2.map(({ icon, label, to }) => (
        <SLinkContainer key={label}>
          <SLink>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
         <SThemeLabel>Dark Mode</SThemeLabel>
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Discover",
    icon: <MdOutlineAnalytics />,
    to: "/",
  },
  {
    label: "Your Library",
    icon: <BsPeople />,
    to: "/",
  },
  {
    label: "Liked",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
  },
];

const linksArray2 = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Discover",
    icon: <MdOutlineAnalytics />,
    to: "/",
  },
  {
    label: "Your Library",
    icon: <BsPeople />,
    to: "/",
  },
  {
    label: "Liked",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
  },
];

export default Sidebar;
