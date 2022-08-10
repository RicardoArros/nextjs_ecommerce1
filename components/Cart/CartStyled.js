import styled from "styled-components";

// Cart cont
const CartWrap = styled.div``;

// Cart title cont
const CartTitleCont = styled.div`
  margin-bottom: 2rem;

  & > h2 {
    // font-size: 1.25rem;
    // line-height: 1.75rem;
  }
`;

// Cart content cont
const CartContent = styled.div(
  ({ theme }) => `

  display: grid;  

  @media ${theme.breakpoints.md} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 3rem;
  }    
`
);

// Cart table
const CartTableCont = styled.div(
  ({ theme }) => `

  overflow-x: auto;

  @media ${theme.breakpoints.md} {
    grid-column: span 3 / span 3;
    gap: 2rem;
  }    
`
);

const CartTable = styled.table(
  ({ theme }) => `

  border-collapse: collapse;

  min-width: 100%;

  & thead {
    border-bottom: 1px solid ${theme.colors.neutral};
  }

  & th {
    padding: 1rem;
  }  

  & tbody tr {
    border-bottom: 1px solid ${theme.colors.neutral};
  }

  & tbody td {
    padding: 1rem;

    & > a {
      display: flex;
      align-items: center;
    }
  }

  & .textRight {
    text-align: right;
  }

  & .textCenter {
    text-align: center;
  }

  @media ${theme.breakpoints.md} {
    
  }    
`
);

const CartTableAction = styled.div``;

// Cart checkout
const CartCheckoutCont = styled.div``;

export {
  CartWrap,
  CartTitleCont,
  CartContent,
  CartTableCont,
  CartTable,
  CartTableAction,
  CartCheckoutCont,
};
