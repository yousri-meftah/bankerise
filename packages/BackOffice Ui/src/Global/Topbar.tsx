
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SwitchButton from '../Components/DarkModeSwitch'
import LanguageSelector from '../Components/LanguageSelector'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Topbar = () => {

  return (
    <Disclosure as="nav" className="bg-[--primary] shadow-2xl transition duration-150 ease-out">
      {({ open }) => (
        <>
          <div className=" max-w-screen px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center ">

              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-start">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-[--searchBar] py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-[--searchBarFocus] focus:text-gray-900 focus:placeholder:text-gray-700 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block ">
                <div className="flex items-center gap-4">
                  <SwitchButton />
                  <LanguageSelector />


                  {/* <LanguageToggle /> */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0 ">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="../../public/user.jpg"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#0d0f1d] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-600' : '',
                                'block px-4 py-2 text-sm text-gray-100 rounded-md'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-600' : '',
                                'block px-4 py-2 text-sm text-gray-100 rounded-md'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/oauth2/sign_out"
                              className={classNames(
                                active ? 'bg-gray-600' : '',
                                'block px-4 py-2 text-sm text-gray-100 rounded-md'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">

            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="../../public/user.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Laith Ferjeoui</div>
                  <div className="text-sm font-medium text-gray-400">Laith.Ferjeoui@gmail.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Topbar