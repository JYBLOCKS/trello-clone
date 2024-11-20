import { ReactNode } from "react";
import { NavBar, SideBar } from "../components";

export function withBars(
  Component: () => ReactNode,
  sideBarEnable?: boolean | false
) {
  return () => {
    if (sideBarEnable) {
      return (
        <>
          <NavBar />
          <div className="w-full grid grid-cols-[200px_1fr] absolute top-12 left-0">
            <div className="h-screen">
              <SideBar />
            </div>
            <div className="z-40">
              <Component />
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <NavBar />
        <div className="w-full z-40 absolute top-12 left-0">
          <Component />
        </div>
      </>
    );
  };
}
