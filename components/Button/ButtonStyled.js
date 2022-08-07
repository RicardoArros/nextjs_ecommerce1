import styled from "styled-components";

export const ButtonCompany = styled.button(
  ({ theme, primary, isHalfWidth, isDisabled }) => `

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: ${
    isDisabled
      ? theme.colors.neutral
      : primary
      ? theme.colors.primary
      : "transparent"
  };

  width: ${isHalfWidth ? "50%" : "100%"};

  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.semiBold};
  color: ${primary ? theme.colors.light : theme.colors.primary};

  padding: .8rem 1.2rem;

  border: ${primary ? "none" : "1px solid " + theme.colors.accent}; 
  border-radius: ${theme.borderRadius.radiusBtn};

  &:hover {
    opacity: 0.9;
    //transform: scale(0.98);
  }

  & > svg {
    font-size: 2rem;
  }  
`
);
