"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Footer from "./Footer";
// import PlaidLink from "./PlaidLink";

const Sidebar = ({ user }: { user: {} }) => {
  const pathname = usePathname();
  // SiderbarProps
  return (
    <section className="sidebar- sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-slate-700  pt-8 max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px] bg-slate-800 text-slate-100">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-20 text-slate-200"
          />
          <h1 className="- 2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-blue-600 max-xl:hidden">
            Horizon
          </h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start hover:bg-slate-700",
                {
                  "bg-bank-gradient": isActive,
                }
              )}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[1] invert-0 text-slate-200": isActive,
                  })}
                />
              </div>
              <p className="text-16 font-semibold text-slate-200 max-xl:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}

        {/* <PlaidLink user={user} /> */}
      </nav>

      {/* <Footer user={user} /> */}
    </section>
  );
};

export default Sidebar;
