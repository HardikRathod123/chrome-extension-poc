import { Button } from "@/components/ui/button";
import { useSteps } from "@/contexts/steps-context";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const OPTIONS = [
  {
    id: 1,
    title: "risk tolerance",
    image: "/images/onboarding/steps/1.png",
  },
  {
    id: 2,
    title: "Patience",
    image: "/images/onboarding/steps/2.png",
  },
  {
    id: 3,
    title: "Impulsivity",
    image: "/images/onboarding/steps/3.png",
  },
];

export const FirstStep = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const { handleNext } = useSteps();

  const onSubmit = () => {
    console.log("selectedOption", selectedOption);
    handleNext();
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h3 className="font-heading text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Why did you choose DOME?
          </h3>
          <p className="text-neutral-60 text-sm">Select one answer</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map(({ id, image, title }) => (
            <div
              className={cn(
                "relative flex w-full cursor-pointer flex-col gap-6 rounded-xl border p-4 sm:max-w-3xs sm:gap-9 sm:p-5",
                selectedOption === id &&
                  "bg-gradient-to-b from-[#CBBEAD] to-[#554027]",
              )}
              key={id}
              onClick={() => setSelectedOption(id)}
            >
              <div className="absolute top-4 right-4 flex size-4 items-center justify-center rounded-full border sm:top-5 sm:right-5">
                {selectedOption === id && (
                  <div className="bg-border size-2 rounded-full" />
                )}
              </div>
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt={`Onboarding Initial ${id}`}
                  width={200}
                  height={140}
                  className="h-auto w-full max-w-[200px]"
                />
              </div>
              <p
                className={cn(
                  "text-neutral-0 text-center capitalize sm:text-left",
                  selectedOption === id && "text-neutral-100",
                )}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-center sm:gap-1">
        <Button
          onClick={handleNext}
          variant={"ghost"}
          className="w-full sm:w-auto"
        >
          Skip for now
        </Button>
        <Button onClick={onSubmit} className="w-full sm:w-auto">
          Continue
        </Button>
      </div>
    </div>
  );
};
