import React from "react";
import HeaderMain from "../ui/header/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderMain />
      {children}
    </>
  );
}
