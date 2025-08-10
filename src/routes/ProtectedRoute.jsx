import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { LoaderCircle } from "lucide-react";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <LoaderCircle className=" animate-spin" />
      </div>
    );

  if (!user) return <Navigate to="/signin" />;

  return children;
};

export default ProtectedRoutes;
