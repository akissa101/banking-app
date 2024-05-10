import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-ful justify-between font-inter">
      {children}
      <div className="auth-asset-1 flex h-screenl border-l border-slate-700 w-full  items-start justify-center bg-slate-900 max-lg:hidden">
        <div className="mt-14">
          <Image
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
