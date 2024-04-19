import { Outlet } from "react-router";
import AdminNav from "./AdminNav";

export default function Example() {
  return (
    <div>
      <div className="bg-indigo-600 pb-32">
        <AdminNav />

        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <Outlet/>
          </div>
        </div>
      </main>
    </div>
  );
}
