"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Send,
} from "lucide-react";

import {
  Company,
  Features,
  LegalTerms,
  Links,
} from "@/constants";

import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-10 mt-20 sm:mt-24">
      <div className="grid lg:grid-cols-4 items-center md:gap-10">
        <div className="col-span-4 md:col-span-1">
          <Logo />
          <div className="space-x-2 mt-5">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="border rounded-full"
            >
              <Twitter className="h-4 w-4 " />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="border rounded-full bg-[#313131]"
            >
              <Facebook className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="border rounded-full"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="border rounded-full"
            >
              <Github className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8">
            <h1 className="text-[13px] font-semibold">
              Sign up for personalized offers
            </h1>
            <div className="my-3 relative">
              <Input
                placeholder="Enter your email"
                className="rounded-2xl bg-[#F8F8FA] border-0 text-xs placeholder:text-black"
              />
              <Button
                size={"icon"}
                className="bg-[#131313] rounded-full absolute top-0 right-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 xl:gap-24 col-span-3 lg:ml-28">
          <div className="space-y-4 mt-6 md:mt-0">
            <h2 className="text-[13px] font-semibold">
              Links
            </h2>
            <div className="flex flex-col space-y-3">
              {Links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 mt-6 md:mt-0">
            <h2 className="text-[13px] font-semibold">
              Features
            </h2>
            <div className="flex flex-col space-y-3">
              {Features.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 mt-6 md:mt-0">
            <h2 className="text-[13px] font-semibold">
              Company
            </h2>
            <div className="flex flex-col space-y-3">
              {Company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 mt-6 md:mt-0">
            <h2 className="text-[13px] font-semibold">
              Legal & Terms
            </h2>
            <div className="flex flex-col space-y-3">
              {LegalTerms.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-4" />
      <div className="text-xs text-center text-muted-foreground py-5">
        &copy; Kick X 2023 All rights reserved.
      </div>
    </footer>
  );
};
