import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/3B00K_free-file.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src={logo} className="mr-2 h-9 w-full" alt="Logo" />
    </Link>
  );
}

export default Logo;
