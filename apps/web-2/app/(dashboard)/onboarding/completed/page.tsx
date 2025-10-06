import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CompletedPage() {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full bg-[url(/images/main-bg.png)] bg-cover bg-center">
      <div className="relative flex flex-1 flex-col items-center justify-between px-4 sm:px-6">
        <Image
          src={"/images/logo.png"}
          alt="Dome Logo"
          width={56}
          height={56}
          className="absolute top-4 left-4 h-10 w-10 sm:top-5 sm:left-5 sm:h-14 sm:w-14"
        />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6 pt-16 sm:gap-8 sm:pt-0 md:gap-10">
          <h2 className="font-heading text-4xl leading-none font-bold tracking-tighter uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            Onboarding Completed!
          </h2>
          <p className="text-neutral-60 text-sm sm:text-base">
            Thank you for completing the onboarding process. Your dashboard is
            ready.
          </p>
          <div>
            <Button className="w-full sm:w-auto">Open extension</Button>
          </div>
        </div>
        <p className="text-2xs text-neutral-80 absolute bottom-4 left-4 pb-4 text-center sm:bottom-5 sm:left-5 sm:pb-5">
          2025 DOME, All right reserved
        </p>
      </div>
      <div className="relative hidden xl:block">
        <Image
          src="/images/onboarding/completed-hero.png"
          alt="Onboarding Completed Hero"
          width={640}
          height={832}
          className="h-screen w-auto object-contain"
        />
        <Image
          src={"/images/smartphone-hero.png"}
          alt="Smartphone Hero"
          width={335}
          height={729}
          className="absolute bottom-0 left-1/2 mx-auto h-[60vh] w-auto -translate-x-1/2"
          quality={100}
          unoptimized
        />
      </div>
    </div>
  );
}
