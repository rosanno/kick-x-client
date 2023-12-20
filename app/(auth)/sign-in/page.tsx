"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(6),
});

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-sm mx-auto py-4 px-5">
      <div className="flex flex-col items-center text-center space-y-3 mb-7">
        <div className="bg-[#313131] h-11 w-11 rounded-full flex items-center justify-center mb-1.5">
          <Link
            href={"/"}
            className="text-5xl text-white font-merriweather"
          >
            K
          </Link>
        </div>
        <h2 className="font-bold text-2xl">Sign in</h2>
        <h3 className="text-[13px] leading-5 text-muted-foreground">
          Welcome back! Enter your email and <br />
          password below to sign in.
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px]">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={
                        !showPassword ? "password" : "text"
                      }
                      disabled={loading}
                      placeholder="Enter your password"
                      {...field}
                    />
                    {!showPassword ? (
                      <EyeOff
                        className="h-4 w-4 absolute top-2.5 right-2.5 text-muted-foreground"
                        onClick={() =>
                          setShowPassword(true)
                        }
                      />
                    ) : (
                      <Eye
                        className="h-4 w-4 absolute top-2.5 right-2.5 text-muted-foreground"
                        onClick={() =>
                          setShowPassword(false)
                        }
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={loading}
            className="
              w-full 
              bg-[#313131] 
              hover:bg-[#444444] 
              transition 
              duration-300
            "
          >
            Sign in
          </Button>
        </form>
      </Form>
      <div className="relative mt-10">
        <div className="border-b" />
        <div
          className="
          bg-white 
          rounded-full 
          absolute 
          left-1/2 
          bottom-1/2 
          translate-y-1/2 
          -translate-x-1/2 
          p-2.5
        "
        >
          <span className="text-base text-muted-foreground">
            or
          </span>
        </div>
      </div>
      <div className="mt-6">
        <Button
          type="button"
          variant={"ghost"}
          className="w-full"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-xl mr-2.5" />
          <span className="text-sm text-muted-foreground">
            Sign With Google
          </span>
        </Button>
      </div>
      <div className="mt-8">
        <p className="text-center text-[13px] text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-black font-semibold underline ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignInPage;
