import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MyPins from "../pages/ProfilePage/MyPins";
import PinManagement from "../pages/Admin/PinManagement";
import AssignPins from "../pages/ProfilePage/AssignPins";

// Lazy load each page
const Team = lazy(() => import("../pages/TeamPage/Team"));
const Wallet = lazy(() => import("../pages/WalletPage/Wallet"));
const Home = lazy(() => import("../pages/HomePage/Home"));
const AddFund = lazy(() => import("../pages/WalletPage/AddFund"));
const WidthdrawFund = lazy(() => import("../pages/WalletPage/WidthdrawFund"));
const Bonus = lazy(() => import("../pages/BonusPage/Bonus"));
const Profile = lazy(() => import("../pages/ProfilePage/Profile"));
const Contact = lazy(() => import("../pages/BonusPage/Contact"));
const LevelView = lazy(() => import("../pages/TeamPage/LevelView"));
const MyReferrals = lazy(() => import("../pages/TeamPage/MyReferrals"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
        </div>
      }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-statics" element={<Team />} />
        <Route path="/wallet-statics" element={<Wallet />} />
        <Route path="/addfund" element={<AddFund />} />
        <Route path="/widthdrawfund" element={<WidthdrawFund />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/my-pins" element={<MyPins />} />
        <Route path="/profile/assign-pins" element={<AssignPins />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team/level-view" element={<LevelView />} />
        <Route path="/team/my-referrals" element={<MyReferrals />} />
        <Route path="/admin/generate-pins" element={<PinManagement />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
