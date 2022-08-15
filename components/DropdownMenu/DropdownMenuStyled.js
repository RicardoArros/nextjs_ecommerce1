import styled from "styled-components";

// Dropdown cont
const DropdownMenu = styled.div(
  ({ theme, isOpen }) => `

  position: absolute;
  top: 5rem;
  // bottom: -14rem;
  // right: 0;

  transform: translateX(-85%);
  //transform-origin: top right;

  display: flex;
  flex-direction: column;

  min-width: 16rem; 
  
  background: ${theme.colors.light};  

  border-radius: ${theme.borderRadius.radiusFrame1};

  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  opacity: ${isOpen ? 1 : 0};

  transition: all 1s ease-out;

  overflow: hidden;

  z-index: 3;
  `
);

// Dropdown link
const DropdownLinkWrap = styled.div(
  ({ theme }) => `

  padding: 1rem;

  transition: background .5s;

  &:not(:last-child) {}

  &:hover {
    background-color: ${theme.colors.neutral}
  }
  
  `
);

export { DropdownMenu, DropdownLinkWrap };
