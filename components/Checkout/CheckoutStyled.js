import styled from "styled-components";

//

// Checkout form
const CheckoutForm = styled.form`
  margin: 0 auto;

  max-width: 768px;
`;

const CheckoutFormTitle = styled.div`
  & > h2 {
    margin-bottom: 3rem;
  }
`;

const CheckoutFormItem = styled.div(
  ({ theme }) => `

  margin-bottom: 2rem;

  & > p {
    font-size: 1.2rem;
    color: ${theme.colors.error};
  }
  
   
  `
);

const CheckoutFormSubmit = styled.div(
  ({ theme }) => `  

  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;
   
  `
);

//Checkout Wizard
const CheckoutWizardWrap = styled.div`
  display: flex;
  flex-wrap; wrap;

  margin-bottom: 3rem;
`;

//
const CheckoutWizardSteps = styled.div(
  ({ theme }) => `
  flex: 1 1 0%;

  text-align: center;

  border-bottom: 2px solid ${theme.colors.neutral};

  &.borderActive {
    border-color: ${theme.colors.primary};
  }

  &.borderInactive {
    border-color: ${theme.colors.neutral};
  }

  &.textActive {
    color: ${theme.colors.primary};
  }

  &.textInactive {
    color: ${theme.colors.neutral};
  }
`
);

export {
  CheckoutWizardWrap,
  CheckoutWizardSteps,
  CheckoutForm,
  CheckoutFormTitle,
  CheckoutFormItem, 
  CheckoutFormSubmit
};
