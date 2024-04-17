import React from "react";

function AuthPageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {children}
      </h2>
    </div>
  );
}

export default AuthPageHeader;
