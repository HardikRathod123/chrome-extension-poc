"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function OtpPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = Array(6).fill("");

    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }

    setOtp(newOtp);
    setError("");
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = () => {
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    if (!/^\d{6}$/.test(otpString)) {
      setError("Please enter only numbers");
      return;
    }

    // Simulate verification (replace with actual verification logic)
    if (otpString !== "123456") {
      setError("Invalid verification code");
      return;
    }

    // Success - proceed with verification
    console.log("OTP verified:", otpString);

    router.push("/");
  };

  return (
    <section className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <p className="text-neutral-60 text-center">
        Code is sent to stas@devstudios.digital
      </p>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="h-12 w-12 text-center"
                  autoComplete="off"
                />
              ))}
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
          </div>
          <p className="text-neutral-80 text-center text-sm">
            Didn&apos;t receive code?
            <span className="text-neutral-0"> Request again</span>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Button
            onClick={handleVerify}
            disabled={!!error || otp.some((digit) => digit === "")}
          >
            Verify
          </Button>
          <Button variant={"ghost"} onClick={() => router.back()}>
            <MoveLeft className="size-5" /> Back
          </Button>
        </div>
      </div>
    </section>
  );
}
