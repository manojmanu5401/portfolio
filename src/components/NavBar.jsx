import React, {useState} from 'react'
import { Disclosure } from "@headlessui/react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const navigation = [
  { name: "Home", href: "#home"},
  { name: "About", href: "#about"},
  { name: "Services", href: "#services"},
  { name: "Projects", href: "#project"},
  { name: "Contact", href: "#contact"}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const scrollPosition = useScrollPosition();
  const [active, setActive] = useState("#home")
  return (
    <>
    <header
        className={`sticky top-0 z-10 bg-white transition ease-in-out delay-200 ${
          scrollPosition > 0 ? "drop-shadow-lg py-5" : "drop-shadow-none py-5"
        } `}
      >
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <span className="text-3xl"><i className='bx bx-x'></i></span>
                    ) : (
                      <span className="text-3xl"><i className='bx bx-menu'></i></span>
                    )}
                  </Disclosure.Button>
                </div>
                <div>
                  <div>
                    <img
                      className="h-7"
                      src="/images/logo.png"
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="ml-10 md:flex items-baseline space-x-4 hidden">
                    {navigation.map((item) => (
                      <a
                      onClick={() => setActive(item.href)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === active
                            ? "text-[#E5383B] font-bold"
                            : "text-[#F3A3A5]  hover:text-[#E5383B] font-medium",
                          "rounded-md px-3 py-2 text-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* <button className="" onClick={()=>{setDarkMode(!darkMode)}}>
                    {darkMode ? (
                      <box-icon name="sun"></box-icon>
                    ) : (
                      <box-icon name="moon"></box-icon>
                    )}
                  </button> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="flex items-center flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-[#E5383B] font-bold"
                        : "text-[#F3A3A5]  hover:text-[#E5383B] font-medium",
                      "rounded-md px-3 py-2 text-md"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      </header>
    </>
  );
}
