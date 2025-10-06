import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <div className="relative flex min-h-[100vh] flex-1 flex-col items-center justify-between lg:min-h-screen">
        <Image
          src={"/images/logo.png"}
          alt="Dome Logo"
          width={56}
          height={56}
          className="absolute top-5 left-5"
        />
        <div className="flex w-full flex-1 flex-col justify-center px-6 text-center lg:px-0">
          {children}
        </div>
        <p className="text-2xs text-neutral-80 absolute right-0 bottom-0 left-0 pb-5 text-center lg:static">
          2025 DOME, All right reserved
        </p>
      </div>
      <div className="hidden xl:block">
        <Image
          src="/images/auth-hero.png"
          alt="auth-bg"
          width={640}
          height={832}
          className="h-screen w-auto object-contain"
        />
      </div>
    </div>
  );
}
