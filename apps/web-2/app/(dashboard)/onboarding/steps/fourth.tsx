"use client";
import { IconAlert } from "@/assets/icons/icon-alert";
import { IconTelegram } from "@/assets/icons/icon-telegram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSteps } from "@/contexts/steps-context";
import { useState } from "react";

export const FourthStep = () => {
  const { handleNext } = useSteps();
  const [telegramUsername, setTelegramUsername] = useState("");
  const [error, setError] = useState("");

  const validateUsername = (username: string) => {
    if (!username) return "";

    if (!username.startsWith("@")) {
      return "Username must start with @";
    }

    if (username.length < 5) {
      return "Username must be at least 5 characters";
    }

    if (!/^@[a-zA-Z0-9_]+$/.test(username)) {
      return "Username can only contain letters, numbers and underscores";
    }

    return "";
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTelegramUsername(value);
    setError(validateUsername(value));
  };

  const onSubmit = () => {
    const validationError = validateUsername(telegramUsername);
    if (validationError) {
      setError(validationError);
      return;
    }
    handleNext();
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16">
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-6 sm:gap-8">
        <div className="bg-neutral-0 flex size-12 items-center justify-center rounded-xl sm:size-14">
          <IconTelegram className="size-9 sm:size-11" />
        </div>
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h3 className="font-heading text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Get your points
          </h3>
          <p className="text-neutral-60 text-center text-sm">
            Link your Telegram account
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label>Telegram username</Label>
          <Input
            placeholder="@userexample"
            value={telegramUsername}
            onChange={handleUsernameChange}
          />
          {error && <p className="text-destructive text-sm">{error}</p>}
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
      <div className="bg-lime mt-8 flex items-center gap-3 rounded-md px-4 py-2.5 sm:mt-12 sm:px-5 md:mt-20">
        <IconAlert className="size-5 shrink-0 sm:size-6" />
        <p className="text-sm">
          Link your Telegram account to receive the rewards
        </p>
      </div>
    </div>
  );
};
