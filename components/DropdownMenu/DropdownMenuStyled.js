import styled from "styled-components";

//
const DropdownWrap = styled.div(
  ({ theme }) => `

  position: absolute;
  bottom: -14rem;
  right: 0;

  //transform-origin: top right;

  display: flex;
  flex-direction: column;

  min-width: 16rem; 
  
  background: ${theme.colors.light};

  border-radius: ${theme.borderRadius.radiusFrame1};

  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  `
);

// Dropdown link
const DropdownLinkWrap = styled.div(
  ({ theme }) => `

  padding: 1rem;

  &:hover {
    background-color: ${theme.colors.neutral}
  }

  
  `
);

export { DropdownWrap, DropdownLinkWrap };
