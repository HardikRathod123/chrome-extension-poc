"use client";
import { IconAlert } from "@/assets/icons/icon-alert";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [dismissOnboarding, setDismissOnboarding] = useState(false);

  return (
    <section className="relative pb-32 md:pb-10">
      <h3 className="font-heading px-4 text-center text-4xl font-bold tracking-tighter uppercase sm:text-5xl lg:text-7xl">
        Welcome to
      </h3>
      <div className="relative">
        <Image
          src={"/images/hero-word.png"}
          alt="Hero Word"
          width={1176}
          height={252}
          className="mx-auto mt-4 h-auto w-[calc(100vw-2rem)] max-w-7xl sm:mt-8 sm:w-[calc(100vw-4rem)] lg:mt-12 lg:w-[calc(100vw-10rem)]"
          quality={100}
          unoptimized
        />
        <Image
          src={"/images/smartphone-hero.png"}
          alt="Smartphone Hero"
          width={335}
          height={729}
          className="absolute top-full left-1/2 mx-auto h-auto w-48 -translate-x-1/2 -translate-y-1/5 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] sm:w-56 lg:w-xs xl:w-sm xl:-translate-y-1/4"
          quality={100}
          unoptimized
        />
      </div>

      {/* Bottom cards container for mobile */}
      <div className="fixed right-4 bottom-20 left-4 flex flex-col items-center gap-4 md:bottom-20 md:flex-row lg:hidden">
        <div className="bg-lime flex items-center gap-3 rounded-md px-4 py-2.5">
          <IconAlert className="size-5 shrink-0" />
          <p className="text-xs leading-tight">
            Do you know that 85% of Bulla users that used DOME 5 times a week
            improved their mental health?
          </p>
        </div>
        {!dismissOnboarding && (
          <div className="flex flex-col gap-3 rounded-md border bg-white p-4">
            <p className="text-sm">
              Let&apos;s start. We have a few questions to help us personalize
              your dashboard.
            </p>
            <div className="flex w-full gap-2">
              <Button
                variant={"ghost"}
                className="flex-1 py-2 text-sm"
                onClick={() => setDismissOnboarding(true)}
              >
                Skip for now
              </Button>
              <Button className="flex-1 py-2 text-sm" asChild>
                <Link href={"/onboarding/initial"}>Continue</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop layout - keep original positioning */}
      <div className="hidden lg:block">
        <div className="bg-lime fixed bottom-10 left-10 flex max-w-xs items-center gap-3 rounded-md px-5 py-2.5 xl:max-w-sm">
          <IconAlert className="size-6 shrink-0" />
          <p className="text-sm">
            Do you know that 85% of Bulla users that used DOME 5 times a week
            improved their mental health?
          </p>
        </div>
        {!dismissOnboarding && (
          <div className="fixed right-10 bottom-10 flex max-w-xs flex-col gap-10 xl:max-w-sm">
            <p className="">
              Let&apos;s start. We have a few questions to help us personalize
              your dashboard.
            </p>
            <div className="flex w-full justify-end gap-1">
              <Button
                variant={"ghost"}
                className="flex-1"
                onClick={() => setDismissOnboarding(true)}
              >
                Skip for now
              </Button>
              <Button className="flex-1" asChild>
                <Link href={"/onboarding/initial"}>Continue</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
