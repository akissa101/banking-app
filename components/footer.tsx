import { logoutAccount } from "@/lib/actions/user.actions";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    console.log("logout: ", loggedOut);
    if (loggedOut) router.push("/sign-in");
  };

  return (
    <footer className="footer-1 flex cursor-pointer items-center justify-between gap-2 py-6 border px-3">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-100">{user?.name}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-200 font-semibold">
          {user.firstName || "Mr. Test"}
        </h1>
        <p className="text-14 truncate font-normal text-gray-200">
          {user.email || "test@example.com"}
        </p>
      </div>

      <div className="footer_image  p-5" onClick={handleLogOut}>
        {/* <Image src="icons/logout.svg" fill alt="jsm" /> */}
        {<LogOut size={36} color="rgb(251 113 133)" />}
      </div>
    </footer>
  );
};

export default Footer;
