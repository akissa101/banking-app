import MobileNav from "@/components/mobile-nav";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Abdikarim" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn.firstName} />

      <div className="flex size-full flex-col">
        <div className="root-layout- flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"
            className="text-white"
          />
          <div>
            <MobileNav user={loggedIn.firstName} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
