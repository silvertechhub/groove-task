import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";


const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',

};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,

};


export const SSidebar = styled.div`
  width: ${v.sidebarWidth};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};
  position: relative;
  @media ${devices.mobileL} {
  display:flex;
  height:45px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom:0;
  width: 100vw;
  }
`;

export const SLogo = styled.div`
  width: 75px;
  padding: ${v.smSpacing} ${v.mdSpacing};
  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
  cursor: pointer;
  @media ${devices.mobileL} {
    display: none;
  }

`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  @media ${devices.mobileL} {
    display: none;
  }
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
  
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
export const SThemeLabel = styled.span`
  display: block;
  font-size: 16px;
  flex: 1;
  @media ${devices.mobileL} {
    display: none;
  }
`;
export const SThemeToggler = styled.button`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bg3 : theme.primary};

  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
