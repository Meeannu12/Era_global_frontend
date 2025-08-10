import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Users,
  CheckCircle,
  XCircle,
  Eye,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  PhoneCall,
  PinIcon,
} from "lucide-react";
import { getAllUserSponsorBySponsorID } from "../../apis/userServices";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";

const MyReferrals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth();
  const [limit, setLimit] = useState(10);
  const [apiResponse, setApiResponse] = useState({});

  const fetchData = async () => {
    if (!user.sponsorID) return;
    try {
      const response = await getAllUserSponsorBySponsorID({
        sponsorID: user.sponsorID,
        limit,
        page: currentPage,
      });

      setApiResponse(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, [user, currentPage, limit]);

  const { users, count, pagination } = apiResponse;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Here you would typically make an API call with the new page
    console.log(`Fetching page ${newPage} with limit ${limit}`);
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setCurrentPage(1);
    // Here you would make an API call with the new limit
    console.log(`Fetching data with limit ${newLimit}`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getInitials = (username) => {
    return username
      .split("-")
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <Users className="text-blue-400" size={32} />
                Sponsor Users
              </h1>
              <p className="text-gray-400 mt-2">
                Manage users referred by sponsors
              </p>
            </div>

            <div className="flex items-center gap-4 justify-between">
              <p className="text-sm text-gray-400">Total Referrals</p>
              <p className="text-3xl font-bold text-yellow-400">{count}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-700 bg-gray-800/50">
            <h2 className="text-lg font-semibold text-white">
              Referred Users Directory
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Showing {(currentPage - 1) * limit + 1} to{" "}
              {Math.min(currentPage * limit, count)} of {count} users
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700/50 border-b border-gray-600">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-200">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      User
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-200">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      Mail
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-200">
                    <div className="flex items-center gap-2">
                      <PhoneCall size={16} />
                      Phone
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-200">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      Referrals
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-200">
                    <div className="flex items-center gap-2">
                      <PinIcon size={16} />
                      Sponsor ID
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-200">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {users?.map((user, index) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-700/30 transition-colors">
                    <td className="py-2 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {getInitials(user.username)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            {user.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Mail size={14} />
                        <span className="text-sm">{user.email}</span>
                      </div>
                    </td>
                    <td className="py-2 px-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Phone size={14} />
                        <span className="text-sm">{user.phone}</span>
                      </div>
                    </td>
                    <td className="py-2 px-6">
                      <div className="bg-blue-900/30 border border-blue-700 text-blue-400 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {user.totalReferrals}
                      </div>
                    </td>
                    <td className="py-2 px-6">
                      <div className="bg-green-900/30 border border-green-700 text-green-400 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        <span className="flex items-center gap-1">
                          {user.sponsorID}
                        </span>
                      </div>
                    </td>

                    <td className="py-2 px-6">
                      <span className="text-gray-300 text-sm">
                        {formatDate(user.createdAt)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Show:</span>
              <select
                value={limit}
                onChange={(e) => handleLimitChange(parseInt(e.target.value))}
                className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-400">per page</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                <ChevronLeft size={16} />
                Previous
              </button>

              <div className="flex gap-1">
                {[...Array(pagination?.totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}>
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination?.totalPages}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Users className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Referred</p>
                <p className="text-xl font-bold text-white">{count}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-green-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Active Users</p>
                <p className="text-xl font-bold text-white">
                  {users?.filter((user) => user?.isActive).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Users className="text-purple-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Sub-Referrals</p>
                <p className="text-xl font-bold text-white">
                  {users?.reduce(
                    (total, user) => total + user.totalReferrals,
                    0
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center">
                <XCircle className="text-orange-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Inactive Users</p>
                <p className="text-xl font-bold text-white">
                  {users?.filter((user) => !user.isActive).length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReferrals;
