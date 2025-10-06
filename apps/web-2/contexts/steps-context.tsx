"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface StepContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isStepCompleted: (stepIndex: number) => boolean;
  isStepActive: (stepIndex: number) => boolean;
  handleNext: () => void;
  handleBack: () => void;
  goToStep: (stepIndex: number) => void;
  totalSteps: number;
  isFirst: boolean;
  isLast: boolean;
  isCompleted: boolean;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

interface StepProviderProps {
  children: ReactNode;
  totalSteps: number;
  initialStep?: number;
  onSubmit: () => void;
}

export function StepProvider({
  children,
  totalSteps,
  initialStep = 0,
  onSubmit,
}: StepProviderProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isCompleted, setIsCompleted] = useState(false);

  const isStepCompleted = (stepIndex: number) => stepIndex < currentStep;
  const isStepActive = (stepIndex: number) => stepIndex === currentStep;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === totalSteps - 1) {
      setIsCompleted(true);
      onSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < totalSteps) {
      setCurrentStep(stepIndex);
    }
  };

  const value = {
    currentStep,
    setCurrentStep,
    isStepCompleted,
    isStepActive,
    handleNext,
    handleBack,
    goToStep,
    totalSteps,
    isFirst: currentStep === 0,
    isLast: currentStep === totalSteps - 1,
    isCompleted,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export function useSteps() {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useSteps must be used within a StepProvider");
  }
  return context;
}
