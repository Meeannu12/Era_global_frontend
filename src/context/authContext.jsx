import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUser } from "../apis/userServices";
import { logoutService } from "../apis/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUser();
        if (data.success === false) {
          setUser(null);
        } else {
          setUser(data.data);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      const response = await logoutService();

      if (response.success === false) {
        toast.error(response.message);
        return;
      }

      setUser(null);
      toast.success("Logout successful!");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#f4f7fe]">
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute w-full h-full flex items-center justify-center text-blue-600 font-semibold">
            ERA
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
