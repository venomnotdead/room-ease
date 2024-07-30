import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const navigation = [
  {
    name: "Split",
    href: "/split",
    icon: "material-symbols:calculate",
    dis: "left-0",
  },
  {
    name: "Polls",
    href: "/poll",
    icon: "fluent:poll-24-regular",
    dis: "left-16",
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: "carbon:task",
    dis: "left-32",
  },
  {
    name: "Suggestions",
    href: "/suggestions",
    icon: "mingcute:new-folder-line",
    dis: "left-48",
  },
  {
    name: "Switch",
    href: "/switch",
    icon: "tdesign:swap",
    dis: "left-64",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const url = window.location.href;
    navigation.forEach((_, i) => {
      if (url.includes(_.href)) setActive(i);
    });
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-darker max-h-[4.4rem] px-6 rounded-t-xl flex justify-center items-center">
      <ul className="flex relative">
        {active != -1 && (
          <span
            className={`bg-rose-600 duration-300 border-4 border-primary-default h-16 w-16 absolute -top-8 rounded-full transform ${navigation[active].dis}`}
          ></span>
        )}
        {navigation.map((nav, i) => (
          <li key={i} className="w-16">
            <Link
              href={nav.href}
              className="flex flex-col items-center text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 mb-3 ${
                  i === active && "-mt-8 text-primary-lightest z-10"
                }`}
              >
                <Icon icon={nav.icon} width="24" height="24" />
              </span>
              {/* <span
                className={`text-primary-lightest ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100 text-black"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {nav.name}
              </span> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
