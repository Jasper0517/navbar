import logo from "./assets/stylenest.svg";
import notify from "./assets/notify.svg";
import close from "./assets/close.svg";
import { useState } from "react";

const list = ["Shop all", "Latest arrivals"];

export default function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between px-4 pt-4 md:px-8 lg:mx-auto lg:my-0 lg:gap-[103px] lg:px-28 xl:max-w-[1440px]">
      {/* left */}
      <img src={logo} alt="StyleNest" className="h-[32px] w-[105px]" />
      {/* center */}
      <ul className="hidden lg:inline-block lg:flex lg:grow lg:items-center lg:gap-8">
        {list.map((item) => (
          <li className="cursor-pointer text-base font-medium text-neutral-600">
            {item}
          </li>
        ))}
      </ul>
      {/* right */}
      <div className="flex justify-center gap-5">
        <img src={notify} alt="notify" className="h-[24px] w-[24px]" />
        <div
          className="relative text-[20px] font-black before:absolute before:top-[-8px] before:text-[20px] before:content-['━'] after:absolute after:bottom-[-6px] after:left-0 after:text-[20px] after:content-['━'] lg:hidden"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          ━
        </div>
      </div>
      {isSideMenuOpen && (
        <div className="absolute left-0 top-0 h-screen w-screen bg-white px-4">
          <div className="absolute right-0 top-0 h-full w-5 bg-neutral-950"></div>
          {/* top */}
          <div className="flex justify-between py-8 pr-5">
            <img src={logo} alt="StyleNest" className="h-[32px] w-[105px]" />
            <img
              src={close}
              alt="StyleNest"
              className="h-5 w-5"
              onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
            />
          </div>
          {/* list */}
          <ul className="flex flex-col gap-3 px-3 py-2">
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
