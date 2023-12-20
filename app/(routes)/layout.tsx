import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import Provider from "@/context/context-provider";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <Provider session={session}>
      <div>
        <Nav />
        <main className="w-full max-w-7xl mx-auto px-0 md:px-4">
          {children}
        </main>
        <div className="w-full max-w-7xl mx-auto px-0 md:px-4">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
