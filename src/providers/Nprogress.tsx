"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Nprogressprovider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar
        height="5px"
        color="#338DFF"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default Nprogressprovider;
