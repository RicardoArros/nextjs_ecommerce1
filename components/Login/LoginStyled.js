import styled from "styled-components";

const Form = styled.form(
  ({ theme }) => `

  margin: 0 auto;

  @media ${theme.breakpoints.md} {
    max-width: 580px;
  }    
  `
);

const FormItem = styled.div(
  ({ theme }) => `

  margin-bottom: 2rem;

  & > p {
    font-size: 1.2rem;
    color: ${theme.colors.error};
  }
  
   
  `
);

const FormSubmit = styled.div(
  () => `

  
   
  `
);

const FormForgot = styled.div(
  () => `

  
   
  `
);

export { Form, FormItem, FormSubmit, FormForgot };
