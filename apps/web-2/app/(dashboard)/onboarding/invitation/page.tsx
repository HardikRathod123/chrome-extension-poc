"use client";
import { IconGroup } from "@/assets/icons/icon-group";
import { IconLink } from "@/assets/icons/icon-link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InvitationPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const referralLink = "https://dome.com/?ref=1eu3y4l9";

  const handleRedirect = () => {
    router.push("/onboarding/completed");
  };

  const onSubmit = () => {
    handleRedirect();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="flex h-full flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16">
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-6 sm:gap-8">
        <div className="bg-neutral-0 flex size-12 items-center justify-center rounded-xl sm:size-14">
          <IconGroup className="size-9 sm:size-11" />
        </div>
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h3 className="font-heading text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Invite your friends
          </h3>
          <p className="text-neutral-60 text-center text-sm">
            Make your own community
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label>Referral Link</Label>
          <div className="flex h-12 items-center gap-2 rounded-md border p-2 pl-3 sm:gap-3 sm:pl-4">
            <p className="flex-1 truncate text-sm sm:text-base">
              {referralLink}
            </p>
            <Button
              className="bg-neutral-90 text-neutral-20 shrink-0 border-0 hover:border"
              size={"icon"}
              onClick={copyToClipboard}
            >
              <IconLink className="size-4" />
            </Button>
          </div>
          <Button onClick={copyToClipboard} className="w-full">
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
      </div>
      <div className="flex justify-center gap-1">
        <Button onClick={handleRedirect} variant={"ghost"}>
          Skip for now
        </Button>
        <Button onClick={onSubmit}>Continue</Button>
      </div>
    </section>
  );
}
