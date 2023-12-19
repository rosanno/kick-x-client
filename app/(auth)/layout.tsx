import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kick X | Login",
  description:
    "Login to your Kick X account and enjoy a personalized experience.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full flex items-center">
      {children}
    </main>
  );
}
