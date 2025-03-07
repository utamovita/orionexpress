import Link from "next/link";
import React from "react";
import logo from "public/assets/images/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"}>
      <Image src={logo} alt={"grand transport logistics logo"} width={200} height={127} />
    </Link>
  );
}

export { Logo };
