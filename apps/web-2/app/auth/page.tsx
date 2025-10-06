"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function AuthPage() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Email:", values.email);
    router.push("/auth/otp");
  };

  return (
    <section className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center gap-2 text-center">
          <h3 className="font-heading text-4xl leading-tight font-bold">
            Get started now
          </h3>
          <p className="text-neutral-60 bg-neutral-10 text-sm leading-normal">
            Welcome Back! Please enter your details
          </p>
        </div>
        <Button variant={"outline"} className="w-full">
          <Image
            src="/images/icons/google.png"
            alt="Google Logo"
            width={22}
            height={22}
          />
          <span className="">Log in with Google</span>
        </Button>
        <div className="flex items-center gap-6">
          <div className="bg-neutral-90 h-px flex-1" />
          <span className="text-neutral-80 text-xs">or</span>
          <div className="bg-neutral-90 h-px flex-1" />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit">Log in</Button>
              <p className="text-neutral-80 text-center text-sm">
                Don&apos;t have an account?{" "}
                <span className="text-neutral-0">Sign up for free</span>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
