"use client";

import { StepProvider } from "@/contexts/steps-context";
import { useRouter } from "next/navigation";
import { PageContent, STEPS } from "./steps";

export default function Page() {
  const router = useRouter();

  const onSubmit = () => {
    router.push("/onboarding/invitation");
  };

  return (
    <StepProvider totalSteps={STEPS.length} initialStep={0} onSubmit={onSubmit}>
      <PageContent />
    </StepProvider>
  );
}
