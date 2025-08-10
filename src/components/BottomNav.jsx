import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Wallet, Gift, User, Users } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navItems = [
    { text: "Home", path: "/", icon: <Home size={22} /> },
    { text: "Team", path: "/team-statics", icon: <Users size={22} /> },
    { text: "Wallet", path: "/wallet-statics", icon: <Wallet size={22} /> },
    { text: "Bonus", path: "/bonus", icon: <Gift size={22} /> },
    { text: "Profile", path: "/profile", icon: <User size={22} /> },
  ];

  const handleSubMenuToggle = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 flex justify-around py-3 border-t border-gray-700 z-50">
      {navItems.map((item, index) => (
        <div key={index} className="relative flex flex-col items-center">
          {item.subItem ? (
            <button
              onClick={() => handleSubMenuToggle(index)}
              className="flex flex-col items-center text-white focus:outline-none">
              <div className="text-xl">{item.icon}</div>
              <span className="text-xs">{item.text}</span>
            </button>
          ) : (
            <Link
              to={item.path}
              className={`flex flex-col items-center ${
                location.pathname === item.path
                  ? "text-yellow-400"
                  : "text-white"
              }`}>
              <div className="text-xl">{item.icon}</div>
              <span className="text-xs">{item.text}</span>
            </Link>
          )}

          {/* Sub Items Dropdown */}
          {openSubMenu === index && (
            <div className="absolute bottom-12 bg-gray-700 rounded shadow-md flex flex-col text-white min-w-[150px] z-50">
              {item.subItem.map((sub, subIndex) => (
                <Link
                  key={subIndex}
                  to={sub.path}
                  className="px-4 py-2 hover:bg-gray-600 text-sm"
                  onClick={() => setOpenSubMenu(null)}>
                  {sub.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
