import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      <main className="w-full max-w-7xl mx-auto px-0 md:px-4">
        {children}
      </main>
      <div className="w-full max-w-7xl mx-auto px-0 md:px-4">
        <Footer />
      </div>
    </div>
  );
}
