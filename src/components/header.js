import * as React from "react"
import { Fragment } from "react"
import { Link } from "gatsby"

import { Disclosure, Menu, Transition } from "@headlessui/react"
import { PaperAirplaneIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubAlt,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const navigation = [
  { name: "About", href: "#about", current: false },
  { name: "Projects", href: "#projects", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <PaperAirplaneIcon
                    className="h-8 w-8 text-indigo-500"
                    aria-hidden="true"
                  />
                  <strong className="text-white">damicska</strong>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://github.com/adamicska"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    className="mx-2"
                    size="lg"
                  />
                </a>
                <a
                  href="https://stackoverflow.com/users/11724751/adamicska"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    className="mx-2"
                    size="lg"
                  />
                </a>
                <a
                  href="https://t.me/adamicska"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="mx-2"
                    size="lg"
                  />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
