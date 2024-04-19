import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/20/solid";
import { AdminMobileNavProps } from "../../assets/types/products";

function AdminMobileNav({
  profile,
  navigation,
}: Readonly<AdminMobileNavProps>) {
  return (
    <Disclosure.Panel className="border-b border-indigo-600 md:hidden">
      <div className="px-2 py-3 space-y-1 sm:px-3">
        {navigation.map((item, itemIdx) =>
          itemIdx === 0 ? (
            <Fragment key={item.id}>
              <button className="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium">
                {item.nav}
              </button>
            </Fragment>
          ) : (
            <button
              key={item.id}
              className="text-indigo-300 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.nav}
            </button>
          )
        )}
      </div>
      <div className="pt-4 pb-3 border-t border-indigo-600">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div className="text-sm font-medium leading-none text-indigo-300">
              tom@example.com
            </div>
          </div>
          <button className="ml-auto bg-indigo-600 flex-shrink-0 p-1 text-indigo-300 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          {profile.map((item) => (
            <button
              onClick={item.fun}
              key={item.text}
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600"
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
}

export default AdminMobileNav;
