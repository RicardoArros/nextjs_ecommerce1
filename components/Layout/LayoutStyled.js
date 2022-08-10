import styled from "styled-components";

// Layout container
const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`;

// Nav
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 4.8rem;

  padding: 0 1rem;

  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const NavAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  & svg {
    font-size: 2.5rem;
  }
`;

// Nav Cart
const NavCart = styled.div`

  cursor: pointer;

  & .cartIcon {
    position: relative;
  }
`;

const NavCartCount = styled.span`
  position: absolute;
  top: -.8rem;
  right: -1rem;

  background: ${({ theme }) => theme.colors.primary};

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.light};
  line-height: 1rem;

  padding: 0.5rem 0.7rem;

  border-radius: 50%;
`;

const NavLinks = styled.a`
  margin: 0 1rem;
`;

// Main
const Main = styled.main(
  ({ theme }) => `
  width: 100%;

  padding: 2rem;

  margin: auto;

  margin-top: 2rem;  

  @media ${theme.breakpoints.sm} {
    max-width: 640px;    
  }

  @media ${theme.breakpoints.md} {
    max-width: 768px;
  }

  @media ${theme.breakpoints.lg} {
    max-width: 1024px;
  } 

  @media ${theme.breakpoints.xl} {
    max-width: 1280px;
  }   

  @media ${theme.breakpoints.xxl} {
    max-width: 1536px;
  }  
`
);

// Footer
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
`;

export {
  LayoutWrap,
  Nav,
  NavAction,
  NavCart,
  NavCartCount,
  NavLinks,
  Main,
  Footer,
};
