import { ArrowLeft, Globe } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import AppRoutes from "../routes/AppRoutes";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {pathname !== "/" && (
        <header className="sticky top-0 z-40 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mx-auto">
              <button
                onClick={() => navigate(-1)}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Go back">
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>

              {/* Page title */}
              <h1 className="text-lg font-semibold">
                {location.pathname
                  .replace("/", "")
                  .replace("-", " ")
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </h1>

              {/* App title/logo */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Globe className="text-white" size={22} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
              </div>
            </div>
          </div>
        </header>
      )}
      {/* Main Content */}
      <main className="pb-20">
        <AppRoutes />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Layout;
