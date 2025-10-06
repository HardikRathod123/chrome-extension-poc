import { useSteps } from "@/contexts/steps-context";
import { cn } from "@/lib/utils";
import { FirstStep } from "./first";
import { FourthStep } from "./fourth";
import { SecondStep } from "./second";
import { ThirdStep } from "./third";

export const STEPS = [
  {
    id: 0,
    isStep: true,
    step: <FirstStep />,
  },
  {
    id: 1,
    isStep: true,
    step: <SecondStep />,
  },
  {
    id: 2,
    isStep: true,
    step: <ThirdStep />,
  },
  {
    id: 3,
    isStep: true,
    step: <FourthStep />,
  },
];

export const PageContent = () => {
  const { currentStep, isStepCompleted, totalSteps, isStepActive } = useSteps();

  const renderStepContent = () => {
    return STEPS.find((step) => step.id === currentStep)?.step;
  };

  return (
    <section className="flex h-full flex-col">
      <div className="absolute top-16 left-1/2 flex -translate-x-3/5 flex-col gap-1 sm:top-20 sm:-translate-x-1/2">
        <div className="flex items-center gap-2.5 sm:gap-5">
          {STEPS.map(({ id }) => (
            <div
              className={cn(
                "bg-neutral-90 h-1 w-10 sm:w-20",
                (isStepCompleted(id) || isStepActive(id)) && "bg-neutral-60",
              )}
              key={id}
            />
          ))}
        </div>
        <p className="text-neutral-60 text-sm">
          {currentStep + 1} of {totalSteps}
        </p>
      </div>
      <div className="flex-1 pb-6">{renderStepContent()}</div>
    </section>
  );
};
