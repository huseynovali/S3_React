import { Disclosure } from "@headlessui/react";
import { Bars2Icon, BellIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import AdminMobileNav from "./AdminMobileNav";

const navigation = [
  { id: 1, nav: "Products" },
  { id: 2, nav: "Add product" },
];
const profile = [
  { text: "Your Profile", fun: () => {} },
  {
    text: "Sign out",
    fun: () => {
      localStorage.clear();
      window.location.href = "/";
    },
  },
];
function AdminNav() {
  return (
    <Disclosure as="nav" className="bg-indigo-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-indigo-600">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) =>
                        item.id === 1 ? (
                          <Link
                            key={item.id}
                            to={item.nav
                              .split(" ")
                              .join("")
                              .toLocaleLowerCase()}
                          >
                            <button className="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium">
                              {item.nav}
                            </button>
                          </Link>
                        ) : (
                          <Link
                            key={item.id}
                            to={item.nav
                              .split(" ")
                              .join("")
                              .toLocaleLowerCase()}
                            className="text-indigo-300 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                          >
                            {item.nav}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-indigo-600 p-1 text-indigo-300 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <ProfileDropdown profile={profile} />
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars2Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <AdminMobileNav profile={profile} navigation={navigation} />
        </>
      )}
    </Disclosure>
  );
}

export default AdminNav;
