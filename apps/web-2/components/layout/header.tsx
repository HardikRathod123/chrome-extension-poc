import { IconPoints } from "@/assets/icons/icon-points";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Image
        src="/images/logo.png"
        alt="Dome Logo"
        width={56}
        height={56}
        className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
      />
      <div className="border-neutral-80 flex gap-2 rounded-lg border p-1.5 pr-3 sm:gap-2.5 sm:rounded-xl sm:p-2 sm:pr-4">
        <div className="bg-neutral-0 flex size-8 items-center justify-center rounded-md sm:size-10 lg:size-11">
          <IconPoints className="size-3 sm:size-3.5 lg:size-4" />
        </div>
        <span className="font-heading text-lg leading-tight font-bold sm:text-xl lg:text-2xl">
          50
        </span>
      </div>
    </header>
  );
};
