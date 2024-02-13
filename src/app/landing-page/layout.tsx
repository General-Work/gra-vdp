"use client";
import Footer from "@app/components/landingPage/Footer";
import Header from "@app/components/landingPage/Header";
import Modal from "@app/components/ui/Modal";
import React, { createContext, useContext, useState } from "react";

export const LayoutContext = createContext<any>({});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggleSignIn = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <LayoutContext.Provider value={{ open, toggleSignIn, setOpen }}>
      <div className="flex flex-col overflow-y-auto h-full">
        <Header />
        <div className="flex-grow bg-white">{children}</div>
        <Footer />
        <Modal
          overLayClassName="backdrop-blur-md"
          open={open}
          size="md"
          closeModal={toggleSignIn}
        >
          This will be for log in
        </Modal>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;

export const useLayoutContext = () => {
  const { open, setOpen, toggleSignIn } = useContext(LayoutContext);
  return { setOpen, open, toggleSignIn };
};
