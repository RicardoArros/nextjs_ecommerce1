import styled from "styled-components";

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 4.8rem;

  padding: 0 1rem;
`;

const NavLinks = styled.a`
  margin: 0 1rem;
`;

const Main = styled.main`
  width: 100%;

  padding: 2rem;

  margin: auto;

  margin-top: 2rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
`;

export { LayoutWrap, Nav, NavLinks, Main, Footer };
