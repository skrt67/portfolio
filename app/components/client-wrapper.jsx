"use client";

import { ToastContainer } from "react-toastify";
import ScrollToTop from "./helper/scroll-to-top";
import GTM from "./helper/gtm";

export default function ClientWrapper() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <GTM />
    </>
  );
} 