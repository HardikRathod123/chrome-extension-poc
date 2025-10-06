import { Button } from "@/components/ui/button";
import { useSteps } from "@/contexts/steps-context";
import { cn } from "@/lib/utils";
import { useState } from "react";

const MINDSET_OPTIONS = [
  "Patience",
  "Discipline",
  "Confidence",
  "Emotional",
  "Impulsivity",
  "Risk Tolerance",
  "Calm",
  "Analytical",
  "Ambitious",
  "Resilient",
  "Focused",
  "Creative",
  "Decisive",
];

export const SecondStep = () => {
  const { handleNext } = useSteps();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [error, setError] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        setError("");
        return prev.filter((t) => t !== tag);
      }
      if (prev.length < 5) {
        setError("");
        return [...prev, tag];
      }
      setError("You can only select up to 5 words");
      return prev;
    });
  };

  const onSubmit = () => {
    console.log("selectedTags:", selectedTags);
    handleNext();
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16">
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h3 className="font-heading text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Mindset Survey
          </h3>
          <p className="text-neutral-60 text-center text-sm">
            Select up to 5 words that describes you the best
          </p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {MINDSET_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => toggleTag(option)}
              className={cn(
                "border-neutral-90 rounded-md border px-3 py-2 text-sm transition-colors sm:px-4 sm:py-2.5 sm:text-base md:px-5",
                selectedTags.includes(option) && "border-lime bg-lime",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        {error && (
          <p className="text-destructive text-center text-sm">{error}</p>
        )}
      </div>
      <div className="flex w-full max-w-sm flex-col-reverse gap-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-1">
        <Button
          onClick={handleNext}
          variant={"ghost"}
          className="w-full sm:w-auto"
        >
          Skip For Now
        </Button>
        <Button
          onClick={onSubmit}
          disabled={selectedTags.length === 0}
          className="w-full sm:w-auto"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
