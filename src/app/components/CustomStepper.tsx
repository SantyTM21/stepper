'use client';
import { Button, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import { useState } from 'react';
const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  //   const currentStep = 0;
  const nextStep = () => {
    if (activeStep < 4) {
      setActiveStep((currentStep) => currentStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep((currentStep) => currentStep - 1);
    }
  };

  return (
    <>
      <Stepper activeStep={activeStep} orientation='vertical'>
        <Step>
          <StepLabel>Step 1</StepLabel>
          <StepContent>
            <p>Step 1 content</p>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
          <StepContent>
            <p>Step 1 content</p>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
          <StepContent>
            <p>Step 1 content</p>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Step 4</StepLabel>
          <StepContent>
            <p>Step 1 content</p>
          </StepContent>
        </Step>
      </Stepper>
      <Button variant='outlined' color='primary' onClick={nextStep}>
        Next
      </Button>
      <Button variant='outlined' color='secondary' onClick={prevStep}>
        Prev
      </Button>
    </>
  );
};

export default CustomStepper;
