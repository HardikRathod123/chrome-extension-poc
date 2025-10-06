"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OPTIONS = [
  {
    id: 1,
    title: "Improve your trading",
    image: "/images/onboarding/initial/1.png",
  },
  {
    id: 2,
    title: "Decrease your anxiety",
    image: "/images/onboarding/initial/2.png",
  },
  {
    id: 3,
    title: "Personal development",
    image: "/images/onboarding/initial/3.png",
  },
  {
    id: 4,
    title: "Improve your focus",
    image: "/images/onboarding/initial/4.png",
  },
];

export default function InitialPage() {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const router = useRouter();

  const onSubmit = () => {
    console.log("selectedOption", selectedOption);
    router.push("/onboarding");
  };

  return (
    <section className="flex h-full flex-col px-4 sm:px-6">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-6 sm:gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl">
            Why did you choose DOME?
          </h3>
          <p className="text-neutral-60 text-sm">Select one answer</p>
        </div>
        <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {OPTIONS.map(({ id, image, title }) => (
            <div
              className={cn(
                "relative flex w-full cursor-pointer flex-col gap-3 rounded-xl border p-4 sm:p-5",
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
              <Image
                src={image}
                alt={`Onboarding Initial ${id}`}
                width={280}
                height={140}
                className="h-auto w-full"
              />
              <p
                className={cn(
                  "text-neutral-0 text-sm sm:text-base",
                  selectedOption === id && "text-neutral-100",
                )}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-sm flex-col-reverse justify-center gap-2 sm:flex-row sm:gap-1">
          <Button variant={"ghost"} asChild className="w-full sm:w-auto">
            <Link href={"/onboarding"}>Skip for now</Link>
          </Button>
          <Button onClick={onSubmit} className="w-full sm:w-auto">
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
