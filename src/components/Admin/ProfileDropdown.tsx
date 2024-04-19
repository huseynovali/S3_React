import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ProfileDropdownProps } from "../../assets/types/products";

function ProfileDropdown({ profile }: Readonly<ProfileDropdownProps>) {
  let user = JSON.parse(localStorage.getItem("user") ?? "{}");
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Menu.Items}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" overflow-hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4">
            <p className=" break-words font-bold">{user ? user.sub : null}</p>
          </div>

          {profile.map((item) => (
            <Menu.Item key={item.text}>
              <button
                type="button"
                onClick={item.fun}
                className={
                  "block px-4 py-2 text-sm text-indigo-500 hover:text-indigo-300"
                }
              >
                {item.text}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ProfileDropdown;
