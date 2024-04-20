import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

function AuthPage() {
  const [loading, setLoading] = useState(true);

  const [isTrue, setIsTrue] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        setLoading(false);

        setIsTrue(true);
        localStorage.setItem("user", JSON.stringify(decoded));
      }
    } else {
      setLoading(false);
      setIsTrue(false);
    }
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (isTrue) {
    return <Navigate to="/admin/products" />;
  }
  return <Outlet />;
}

export default AuthPage;
