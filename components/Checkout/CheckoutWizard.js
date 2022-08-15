import React from "react";

import { CheckoutWizardSteps, CheckoutWizardWrap } from "./CheckoutStyled";

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <CheckoutWizardWrap>
      {["User Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <CheckoutWizardSteps
            key={step}
            className={`${index <= activeStep ? "borderActive textActive" : "borderInactive textInactive"}`}
          >
            {step}
          </CheckoutWizardSteps>
        )
      )}
    </CheckoutWizardWrap>
  );
};

export default CheckoutWizard;
