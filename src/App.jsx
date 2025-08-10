import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoute";
import Layout from "./layouts/Layout";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/authContext";
import ViewPlans from "./pages/PlansPage/ViewPlans";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes>
                <Layout />
              </ProtectedRoutes>
            }
          />
          {/* auth  */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/view-plans" element={<ViewPlans />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
