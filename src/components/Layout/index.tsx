"use client";

import React, { useRef, useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { usePathname } from "next/navigation";

import s from "./Layout.module.css";
import { Footer } from "../Footer";
import { Header } from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Header />
      <TransitionGroup>
        {mounted && (
          <CSSTransition
            key={pathname}
            timeout={{ enter: 600, exit: 0 }}
            classNames="fade"
            nodeRef={nodeRef} // Referência ao elemento que será animado
          >
            <div ref={nodeRef} className={s.container}>
              <div className={s.content}>{children}</div>

              <Footer />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export { Layout };
