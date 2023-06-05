import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GobNavbar from "@/components/GobNavbar";
import TecNMNavbar from "@/components/TecNMNavbar";
import Menu from "@/components/Menu";
import MyFooter from "@/components/MyFooter";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GobNavbar></GobNavbar>
      <TecNMNavbar></TecNMNavbar>
      <Menu></Menu>

      <Component {...pageProps} />

      <MyFooter></MyFooter>
    </div>
  );
}
