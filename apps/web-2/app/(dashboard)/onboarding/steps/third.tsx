"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSteps } from "@/contexts/steps-context";
import { useState } from "react";

export const ThirdStep = () => {
  const { handleNext } = useSteps();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateAnswer = (text: string) => {
    if (!text.trim()) return "";

    const words = text.trim().split(/\s+/);
    if (words.length < 10) {
      return "Please provide at least 10 words (3-4 sentences)";
    }

    return "";
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(validateAnswer(newValue));
  };

  const onSubmit = () => {
    const validationError = validateAnswer(value);
    if (validationError) {
      setError(validationError);
      return;
    }
    console.log("Answer", value);
    handleNext();
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16">
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <h3 className="font-heading text-2xl leading-tight font-bold tracking-tighter sm:text-3xl md:text-4xl">
            How have you been doing in trading for the last months? (Biggest
            win/lost)
          </h3>
          <p className="text-neutral-60 text-sm">Answer in 3-4 sentences</p>
        </div>
        <div className="w-full">
          <Textarea
            placeholder="For example: Made steady progress over the last few months. Biggest win: +15% on a single trade. Biggest loss: -8%"
            className="min-h-32 px-4 py-3 sm:min-h-40 sm:px-6 md:min-h-48"
            value={value}
            onChange={handleTextChange}
          />
          {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
        </div>
      </div>
      <div className="flex w-full max-w-sm flex-col-reverse gap-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-1">
        <Button
          onClick={handleNext}
          variant={"ghost"}
          className="w-full sm:w-auto"
        >
          Skip for now
        </Button>
        <Button
          onClick={onSubmit}
          disabled={!!error}
          className="w-full sm:w-auto"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
