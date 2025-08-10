import React, { useEffect } from "react";
import {
  ArrowLeft,
  Smile,
  Heart,
  Flag,
  MessageCircle,
  List,
  ArrowRightCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import { getUserCount } from "../../apis/userServices";

const Team = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [directUserCount, setDirectUserCount] = React.useState(0);
  const [indirectUserCount, setIndirectUserCount] = React.useState(0);

  const fetchTotalCount = async () => {
    try {
      const response = await getUserCount({ sponsorID: user.sponsorID });
      setDirectUserCount(response.data.countUserDirectly);
      setIndirectUserCount(response.data.countUserIndirectly);
    } catch (error) {
      console.error("Error fetching total count:", error);
      toast.error(
        error.response.data.message ||
          "Something went wrong During Fetching Count"
      );
    }
  };

  useEffect(() => {
    fetchTotalCount();
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}

      {/* Stats Cards */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* My Referral */}
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">My Referral </p>
              <h2 className="text-2xl font-bold">{directUserCount}</h2>
            </div>
            <Smile className="text-green-400 w-5 h-5" />
          </div>
        </div>

        {/* My Team */}
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">My Team</p>
              <h2 className="text-2xl font-bold">{indirectUserCount}</h2>
            </div>
            <Heart className="text-red-400 w-5 h-5" />
          </div>
        </div>

        {/* Refer Business */}
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Refer Business</p>
              <h2 className="text-2xl font-bold">$ 0.00</h2>
              <p className="text-xs text-green-400 mt-1">
                ↑ $ 0.00 Yesterday Business
              </p>
            </div>
            <Flag className="text-yellow-400 w-5 h-5" />
          </div>
        </div>

        {/* Team Business */}
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Team Business</p>
              <h2 className="text-2xl font-bold">$ 0.00</h2>
              <p className="text-xs text-green-400 mt-1">
                ↑ $ 0.00 Yesterday Business
              </p>
            </div>
            <MessageCircle className="text-blue-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* List Items */}
      <div className="flex flex-col px-4 space-y-3 gap-2">
        <Link to={`/team/my-referrals`}>
          <div className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <List className="text-yellow-400 w-5 h-5" />
              <span>My Referral</span>
            </div>
            <span>
              <ArrowRightCircle className="w-5 h-5" />
            </span>
          </div>
        </Link>
        <Link to={`/team/level-view`}>
          <div className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <List className="text-yellow-400 w-5 h-5" />
              <span>Level View</span>
            </div>
            <span>
              <ArrowRightCircle className="w-5 h-5" />
            </span>
          </div>
        </Link>
        <div className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <List className="text-yellow-400 w-5 h-5" />
            <span>Downline Team</span>
          </div>
          <span>
            <ArrowRightCircle className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;
