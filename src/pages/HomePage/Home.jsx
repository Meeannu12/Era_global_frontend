import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Power,
  ArrowDown,
  Clock,
  Wallet,
  X,
  ChevronDown,
  Globe,
  Edit,
  Save,
  DollarSign,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Contact from "../BonusPage/Contact";
// import eraglobalLogo from "../../assets/ERA-Globe";
import toast from "react-hot-toast";
import {
  activePinService,
  addCalculateRewarincome,
  addDepositService,
  addWithdrawService,
  getPaymentTransactions,
  getTaskClaim,
  getWalletDetails,
} from "../../apis/userServices";
// import mainImage from "../../assets/main_image.jpg";
// import CountdownBanner from "../../components/CountdownBanner";

const Home = () => {
  const { user, logout, fetchUser } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pin, setPin] = useState("");
  const [showPinModal, setShowPinModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWithDrawModal, setShowWithDrawModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [error, setError] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [totalWithDrawal, settotalWithDrawal] = useState(0);
  const [previousRoyalty, setPreviousRoyalty] = useState([])

  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  async function getDetails() {
    const details = await getWalletDetails();
    // console.log("details", details);
    // Assuming response has Datalist
    if (details) {
      settotalWithDrawal(details.totalWithDrawal);
      setPreviousRoyalty(details.getUnpaidRoyalty)
    }
  }

  function getTimeFromServer() {
    if (user?.setClaimTime) {
      // Server se aaya hua timestamp (ISO string ya number)
      const claimTime = new Date(user.setClaimTime).getTime(); // ✅ timestamp (ms) bana lo

      const elapsed = Math.floor((Date.now() - claimTime) / 1000); // seconds me kitna time beet gaya
      const remaining = 24 * 60 * 60 - elapsed; // total 24h - elapsed

      if (remaining > 0) {
        setDisabled(true);
        setTimeLeft(remaining);
      } else {
        setDisabled(false);
        setTimeLeft(null);
      }
    }
  }


  // console.log("outercheck royalty", previousRoyalty)



  useEffect(() => {
    getTimeFromServer();
    let timer;

    if (timeLeft !== null && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev !== null ? prev - 1 : 0));
      }, 1000);
    } else if (timeLeft === 0) {
      setDisabled(false);
      setTimeLeft(null);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleClick = async () => {
    const data = {
      walletClaim: 0.11,
      setClaimTime: Date.now(), // ✅ yahan timestamp save kar
    };
    try {
      const res = await getTaskClaim(data);
      toast.success(res.message);
      // console.log(res);
      await fetchUser(); // ✅ ab user ka naya setClaimTime turant aa jayega
      getTimeFromServer(); // ✅ dobara se countdown start hoga bina refresh k
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setDisabled(true);
    setTimeLeft(24 * 60 * 60); // ✅ direct countdown set kar (seconds me)
  };

  // Convert seconds -> hh:mm:ss
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // Form states
  const [editForm, setEditForm] = useState({
    userID: user.sponsorID || "",
    walletAddress: user.walletAddress || "",
    amount: "",
    walletType: "",
    transaction: "",
    receive: "0xb9EDA4F6f890D914AEE8D2326E67a713646f763E",
  });

  const carouselImages = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=400&fit=crop",
      type: "image",
    },
  ];

  // console.log("::", user);

  const activePinHandler = async () => {
    if (!pin || pin.trim() === "") {
      toast.error("Please enter a valid PIN");
      return;
    }

    setIsLoading(true);
    try {
      const response = await activePinService(pin);

      if (response.success === false) {
        toast.error(response.data.message);
        return;
      }
      toast.success(response.message);
      setShowPinModal(false);
      setPin("");
      window.location.reload();
    } catch (error) {
      console.log("error", error);
      toast.error(
        error?.response.data.message || "Something went wrong while activating"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const openPinModal = () => {
    setShowPinModal(true);
    setPin("");
  };

  const closePinModal = () => {
    setShowPinModal(false);
    setPin("");
  };

  const getPayments = async () => {
    const response = await getPaymentTransactions();
    // console.log("response", response);
    setTransaction(response.data);
  };


  const getReward = async (id) => {
    const response = await addCalculateRewarincome(id)
    console.log(response)
  }

  useEffect(() => {
    getReward(user.sponsorID)
    getDetails();
  }, []);

  useEffect(() => {
    getPayments();
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleWithDrawClick = () => {
    setShowWithDrawModal(true);
    // setIsLoading(false);
  };

  const handleDepositClick = () => {
    setShowDepositModal(true);
    // setIsLoading(false)
  };

  // withDraw api call here
  const handelSubmitWithdraw = async () => {


    let amount;
    if (editForm.walletType === "royaltyWallet") {
      amount = editForm.amount
    } else {
      amount = Number(editForm.amount);
    }

    try {
      const today = new Date();
      const dayOfWeek = today.getDay(); // 0=Sunday ... 3=Wednesday
      const dateOfMonth = today.getDate(); // e.g. 1,2,3...5
      // const dayOfWeek = 3 // 0=Sunday ... 3=Wednesday
      // const dateOfMonth = 5; // e.g. 1,2,3...5


      // check wallet Address is exist or not
      if (!editForm.walletAddress || editForm.walletAddress.trim() === "") {
        toast.error("Please add wallet address go to profile");
        return;
      }



      // 5️⃣ Check conditions for withdrawal

      if (dayOfWeek === 3 && dateOfMonth === 5) {
        // ✅ Agar Wednesday + 5th hai → sab wallets allowed
        console.log("Allowed: Any wallet (including royalty)");
      } else if (dayOfWeek === 3) {
        // ✅ Sirf Wednesday hai
        if (editForm.walletType === "royaltyWallet") {
          toast.error("Royalty Wallet withdrawal is only allowed on 5th");
          return;
        }


        // 1️⃣ Empty or zero check
        if (!amount) {
          toast.error("Please enter amount");
          return;
        }

        // ✅ check amount Withdrawal Limit
        if (amount < 10) {
          toast.error("minimum Withdrawal Limit 10");
          return;
        }

        // Check sufficient balance
        if (user.walletEarning < amount) {
          toast.error("Not sufficient Balance in Wallet");
          return;
        }

        const remainingBalance = user.walletEarning - amount;
        const totalPreviourRoyalty = previousRoyalty.reduce((sum, item) => sum + item.creditedAmount, 0);
        if (remainingBalance < totalPreviourRoyalty) {
          toast.error(
            `You must keep at least $ ${totalPreviourRoyalty} in Earning Wallet (equal to your Royalty Wallet balance)`
          );
          return;
        }


      } else if (dateOfMonth === 5) {
        // ✅ Sirf 5th hai
        if (editForm.walletType !== "royaltyWallet") {
          toast.error("Only Royalty Wallet withdrawal is allowed on 5th");
          return;
        }

        // 🛑 Check balance in royalty wallet
        // if (amount > walletDetails?.totalPreviourRoyalty) {
        //   toast.error("Insufficient Royalty Wallet Balance");
        //   return;
        // }
      } else {
        // ❌ Na Wednesday hai, na 5 tareekh
        toast.error(
          "Withdrawals are only allowed on Wednesdays or 5th of the month"
        );
        return;
      }

      // console.log("earning amount",user.walletEarning)

      const data = {
        sponsorID: editForm.userID,
        senderWallet: editForm.receive,
        walletType: editForm.walletType,
        amount: editForm.amount,
        receiveWallet: editForm.walletAddress,
      };

      const response = await addWithdrawService(data);
      if (response.success) {
        toast.success(response.message);
        getPayments();
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error("Failed to send deposit Requist. Please try again later.");
    } finally {
      // console.log("api call pass");
      setEditForm((prev) => ({
        ...prev, // baaki fields as it is
        amount: "", // sirf amount reset
        walletType: "", // sirf amount reset
      }));
      setShowWithDrawModal(false);
      setIsLoading(false);
    }
  };

  // const handelSubmitWithdraw = async () => {
  //   toast.error("work in progress");
  // }

  // disposit api call here
  const handelSubmitDiposit = async () => {
    const amount = Number(editForm.amount);
    try {
      // 1️⃣ Empty or zero check
      if (!amount || !editForm.transaction) {
        toast.error("Please fill all required fields");
        return;
      }

      // if (!editForm.walletAddress || editForm.walletAddress.trim() === "") {
      //   toast.error("Please add wallet address go to profile");
      //   return;
      // }

      // ✅ Custom validation check
      if (!isValidAmount(amount)) {
        if (user.walletDeposit < 5) {
          toast.error("Please Enter more than 14 and also divisible by 5.");
          return; // Stop function here
        } else {
          toast.error("Please Enter more than 20 and also divisible by 10.");
          return; // Stop function here
        }
      }
      // if (user.wallet >= amount) {
      //   toast.error("Not sufficient Balance in Wallet");
      //   return;
      // }

      const data = {
        sponsorID: editForm.userID,
        senderWallet: editForm.walletAddress,
        transaction: editForm.transaction,
        amount: editForm.amount,
        receiveWallet: editForm.receive,
      };

      const response = await addDepositService(data);
      if (response.success) {
        toast.success(response.message);
        getPayments();
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error("Failed to send deposit Requist. Please try again later.");
    } finally {
      // console.log("api call pass");
      setEditForm((prev) => ({
        ...prev, // baaki fields as it is
        amount: "", // sirf amount reset
      }));
      setShowDepositModal(false);
      setIsLoading(false);
    }
  };

  // check enter amount by user is grater then 19 and multipal of 10
  function isValidAmount(amount) {
    return amount > 14 && amount % 5 === 0;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setEditForm((prev) => ({ ...prev, amount: e.target.value }));

    if (value && !isValidAmount(Number(value))) {
      setError("Please Enter more than 20 and also divisible by 10.");
    } else {
      setError("");
    }
  };

  const handelDepositCancel = (e) => {
    setEditForm((prev) => ({
      ...prev, // baaki fields as it is
      amount: "", // sirf amount reset
    }));
    setShowDepositModal(false);
  };

  const handelWithDrawCancel = (e) => {
    setEditForm((prev) => ({
      ...prev, // baaki fields as it is
      amount: "", // sirf amount reset
    }));
    setShowWithDrawModal(false);
  };

  // console.log(",,,,,,,", user);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="text-xs py-1 animate-pulse text-amber-400 hover:bg-amber-100/20 w-full text-center transition bg-white/5 border border-white/10 ">
        <Link to="/view-plans" className="">
          View Our Plans
        </Link>
      </div>
      <header className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex justify-between items-center h-4">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Globe className="text-white" size={22} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-4">
                <h1 className="text-white font-bold text-lg tracking-wide">
                  <span className="hidden md:inline bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    ERA GLOBAL
                  </span>
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm  hidden sm:inline">
                    Hi,
                  </span>
                  <span className="relative text-green-400 font-semibold text-sm bg-gradient-to-r from-green-400/10 to-emerald-500/10 px-4 py-2 rounded-full border border-green-400/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 shadow-lg shadow-green-400/10">
                    {user.username}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!user.pin ? (
              <button
                onClick={openPinModal}
                className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30 hover:bg-red-500/30 transition-all"
              >
                ACTIVATE PIN
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                Active
              </div>
            )}
          </div>
        </div>
      </header>

      {/* PIN Activation Modal */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={closePinModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              disabled={isLoading}
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              {/* <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="text-green-400" size={32} />
              </div> */}
              <h2 className="text-2xl font-bold text-white mb-2">
                Activate Your Account
              </h2>
              <p className="text-gray-400">
                Enter your activation PIN to start earning
              </p>
            </div>

            {/* PIN Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Activation PIN
              </label>
              <input
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter your PIN"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={closePinModal}
                className="flex-1 px-4 py-3 bg-gray-600/50 text-gray-300 rounded-lg hover:bg-gray-600/70 transition-all disabled:opacity-50"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={activePinHandler}
                disabled={isLoading || !pin.trim()}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Activating...
                  </div>
                ) : (
                  "Activate Account"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Section */}
      <div className="relative px-4 py-6">
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-48 md:h-64 lg:h-80">
            {carouselImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                {img.type === "video" ? (
                  <video
                    src={img.image}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={img.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            ))}

            {/* <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-6xl font-bold text-center p-2">
              From Vision to Reality in{" "}
            </h1>
            <CountdownBanner targetDate="2025-08-22T00:00:00" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center p-2">
              With Innovation & Integrity
            </h1> */}
            {/* <img src={mainImage} alt={`Slide`} className="w-full h-full" /> */}
          </div>

          {/* Carousel Dots */}
          {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-110" : "bg-white/50"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="px-4 mb-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Activate Card */}
          <div
            onClick={!user.pin ? openPinModal : undefined}
            className={`bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-4 backdrop-blur-sm hover:scale-105 transition-transform ${!user.pin ? "cursor-pointer" : "cursor-default opacity-50"
              }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-500/30 rounded-xl flex items-center justify-center mb-3">
                <Plus className="text-green-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-1">Activate</h3>
              <p className="text-green-400 text-xs">
                {user.pin ? "Activated" : "Start earning"}
              </p>
            </div>
          </div>

          {/* Withdraw Card */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-4 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
            <div
              className="flex flex-col items-center text-center"
              onClick={() => handleWithDrawClick()}
            >
              <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center mb-3">
                <ArrowDown className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-1">Withdraw</h3>
              <p className="text-blue-400 text-xs">Cash out</p>
            </div>
          </div>

          {/* Daily Task Card */}
          <div
            className={` bg-gradient-to-br  rounded-2xl p-4 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer ${disabled
              ? "from-yellow-100/20 to-yellow-200/20 border border-yellow-100/30 cursor-not-allowed"
              : "from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 hover:scale-105"
              }`}
            onClick={disabled ? "" : handleClick}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-20 h-12 ${disabled ? "bg-yellow-100/30" : "bg-yellow-500/30"
                  }  rounded-xl flex items-center justify-center mb-3`}
              >
                {/*<Clock className="text-yellow-400" size={24} />*/}${" "}
                {(user?.walletClaim).toFixed(2)}
                {/* $ {12.22} */}
              </div>
              <h3 className="text-white font-semibold mb-1">
                {disabled && timeLeft !== null
                  ? formatTime(timeLeft)
                  : "Daily Claim"}
              </h3>
              <p
                className={`${disabled ? "text-yellow-100" : "text-yellow-400"
                  } text-xs`}
              >
                {disabled ? "Time Remaining to claim again" : "Complete"}
              </p>
            </div>
          </div>

          {/* Deposit Card */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-4 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
            <div
              className="flex flex-col items-center text-center"
              onClick={() => handleDepositClick()}
            >
              <div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center mb-3">
                <Wallet className="text-purple-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-1">Deposit</h3>
              <p className="text-purple-400 text-xs">Add funds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="px-4 mb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Total Earnings Card */}
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-red-300 text-sm font-medium mb-2">
              Total Earning (USDT)
            </h3>
            <p className="text-white text-3xl font-bold">
              $ {user.totalEarning.toFixed(2)}
            </p>
            <div className="mt-3 h-1 bg-red-500/30 rounded-full">
              <div className="h-full bg-red-500 rounded-full w-3/4"></div>
            </div>
          </div>

          {/* Assets Card */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-green-300 text-sm font-medium mb-2">
              Assets (USDT)
            </h3>
            <p className="text-white text-3xl font-bold">
              $ {user.walletDeposit}
            </p>
            <div className="mt-3 h-1 bg-green-500/30 rounded-full">
              <div className="h-full bg-green-500 rounded-full w-4/5"></div>
            </div>
          </div>

          {/* This Month Earning card */}
          {/* <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-purple-300 text-sm font-medium mb-2">
              Month Earning (USDT)
            </h3>
            <p className="text-white text-3xl font-bold">
               $ {user.walletDeposit}
            </p>
            <div className="mt-3 h-1 bg-purple-500/30 rounded-full">
              <div className="h-full bg-purple-500 rounded-full w-4/5"></div>
            </div>
          </div> */}

          {/* Earnings Card */}
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-red-300 text-sm font-medium mb-2">
              Total WithDraw (USDT)
            </h3>
            <p className="text-white text-3xl font-bold">
              $ {totalWithDrawal}
            </p>
            <div className="mt-3 h-1 bg-red-500/30 rounded-full">
              <div className="h-full bg-red-500 rounded-full w-3/4"></div>
            </div>
          </div>

          {/* Assets Card */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-green-300 text-sm font-medium mb-2">
              Balance (USDT)
            </h3>
            <p className="text-white text-3xl font-bold">
              $ {user.walletEarning.toFixed(2)}
            </p>
            <div className="mt-3 h-1 bg-green-500/30 rounded-full">
              <div className="h-full bg-green-500 rounded-full w-4/5"></div>
            </div>
          </div>

          {/* Today Earning card */}
          {/* <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-purple-300 text-sm font-medium mb-2">
              Today (USDT)
            </h3>
            <p className="text-white text-3xl font-bold">0.0</p>
            <div className="mt-3 h-1 bg-purple-500/30 rounded-full">
              <div className="h-full bg-purple-500 rounded-full w-4/5"></div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-red-400 text-sm font-medium uppercase tracking-wider">
              Recent Transactions
            </h2>
            <button
              className="text-gray-400 text-sm hover:text-white transition-colors"
              onClick={() => navigate("/wallet-statistics")} // yaha apna route likho
            >
              VIEW ALL →
            </button>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
            {transaction.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                <p>No recent transactions</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-sm text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="px-4 py-2 text-left">Amount</th>
                      <th className="px-4 py-2 text-left">Mode</th>
                      <th className="px-4 py-2 text-left">
                        Your Wallet Address
                      </th>
                      <th className="px-4 py-2 text-left">Transaction Id</th>
                      <th className="px-4 py-2 text-left">Receive Wallet</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction
                      .slice(-10) // ye last 7 items lega, agar 7 se kam ho to jitne hain utne hi
                      .map((tx) => (
                        <tr
                          key={tx._id}
                          className={`border-b border-gray-700 rounded-2xl
                        ${tx.verficationStatus === "Verified"
                              ? "bg-green-500 rounded-full "
                              : ""
                            }
    ${tx.verficationStatus === "Rejected" ? "bg-red-500 " : ""}
    ${tx.verficationStatus === "Unverified" ? "bg-purple-500 rounded-full " : ""
                            }`}
                        >
                          <td className="px-4 py-2 text-black ">
                            $ {tx.amount}
                          </td>
                          <td className="px-4 py-2 text-black">{tx.mode}</td>
                          <td
                            className="px-4 py-2 max-w-[160px] truncate text-black"
                            title={tx.senderWallet}
                          >
                            {tx.senderWallet}
                          </td>
                          <td
                            className="px-4 py-2 max-w-[120px] truncate text-black"
                            title={tx.transaction || "Applicable in Withdrawal"}
                          >
                            {tx.transaction || "Applicable in Withdrawal"}
                          </td>
                          <td
                            className="px-4 py-2 max-w-[160px] truncate text-black"
                            title={tx.receiveWallet}
                          >
                            {tx.receiveWallet}
                          </td>
                          <td className="px-4 py-2 text-black">
                            {tx.verficationStatus}
                          </td>
                          <td className="px-4 py-2 text-black">
                            {new Date(tx.createdAt).toISOString().split("T")[0]}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Contact />

      {/* Edit WithDraw Modal */}
      {showWithDrawModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-99">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-400" />
                WithDraw
              </h2>
              <button
                onClick={handelWithDrawCancel}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="p-3 space-y-4">
              <div>
                <p className="p-0 text-sm text-red-500">
                  You withdraw on Wednesday Only
                </p>
                <p className="text-sm text-red-500">
                  You can request for Minimum $10 for withdrawal from your
                  earning wallet
                </p>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  User ID
                </label>
                <input
                  type="text"
                  value={user.sponsorID}
                  // onChange={(e) =>
                  //   setEditForm((prev) => ({
                  //     ...prev,
                  //     username: e.target.value,
                  //   }))
                  // }
                  placeholder={user.userID}
                  disabled={true}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  ERA Global TWT BEP20 Wallet is.
                </label>
                <input
                  type="text"
                  value={editForm.receive}
                  // onChange={(e) =>
                  //   setEditForm((prev) => ({ ...prev, email: e.target.value }))
                  // }
                  placeholder={editForm.receive}
                  disabled={true}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              {/* select Wallet */}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Select Wallet
                </label>
                <select
                  value={editForm.walletType}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      walletType: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
                >
                  <option value="" disabled>
                    -- Select Wallet --
                  </option>
                  <option value="royaltyWallet">
                    {/* Royalty Income (
                    {walletDetails.totalPreviourRoyalty.toFixed(1)}) */}
                    Royalty Income
                  </option>
                  <option value="selfWallet">
                    {/* Earning Income (
                    {(
                      Number(user.walletSelfEarn) +
                      Number(user.walletTeamEarn) +
                      Number(user.walletReward)
                    ).toFixed(1)}
                    ) */}
                    Earning Income
                  </option>
                </select>
              </div>




              {/* <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  value={editForm.amount}
                  // onChange={handleChange}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, amount: e.target.value }))
                  }
                  placeholder={"Enter amount Greater than 19"}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div> */}


              {`${editForm.walletType}` === "selfWallet" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    value={editForm.amount}
                    onChange={(e) =>
                      setEditForm((prev) => ({ ...prev, amount: e.target.value }))
                    }
                    placeholder="Enter amount greater than 19"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
              )}

              {`${editForm.walletType}` === "royaltyWallet" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Select Royalty Option
                  </label>
                  <select
                    value={editForm.amount}
                    onChange={(e) =>
                      setEditForm((prev) => ({ ...prev, amount: e.target.value }))
                    }
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="">-- Select Royalty --</option>
                    {/* <option value="monthly">Monthly Royalty</option>
                    <option value="yearly">Yearly Royalty</option> */}
                    {previousRoyalty.map((r) => (
                      <option key={r._id} value={r._id}>
                        {r.month} — $ {r.creditedAmount}
                      </option>
                    ))}
                  </select>
                </div>
              )}


              {/* Wallet Address Section  */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Your Wallet Address
                </label>
                <input
                  type="email"
                  value={user.walletAddress}
                  // onChange={(e) =>
                  //   setEditForm((prev) => ({ ...prev, email: e.target.value }))
                  // }
                  placeholder={user.walletAddress}
                  disabled={true}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>





              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={handelWithDrawCancel}
                  className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handelSubmitWithdraw()}
                  disabled={isLoading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Withdraw Amount
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Amount Deposit Modal */}
      {showDepositModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-99">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-purple-400" />
                Deposit
              </h2>
              <button
                onClick={handelDepositCancel}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  User ID
                </label>
                <input
                  type="text"
                  value={user.sponsorID}
                  // onChange={(e) =>
                  //   setEditForm((prev) => ({
                  //     ...prev,
                  //     username: e.target.value,
                  //   }))
                  // }
                  placeholder={user.userID}
                  disabled={true}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Transaction Id
                </label>
                <input
                  type="text"
                  value={user?.transaction}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      transaction: e.target.value,
                    }))
                  }
                  required={true}
                  placeholder={"your Transaction Id "}
                  // disabled={true}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  value={editForm.amount}
                  onChange={handleChange}
                  // onChange={(e) =>
                  //   setEditForm((prev) => ({ ...prev, amount: e.target.value }))
                  // }
                  placeholder={
                    user?.walletDeposit > 5
                      ? "Enter amount Greater than 19"
                      : "Enter amount Greater than 14"
                  }
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  ERA Global TWT BEP20 Wallet is
                </label>
                <input
                  type="text"
                  value={editForm.receive}
                  // onChange={(e) =>
                  //   setEditForm((prev) => ({ ...prev, email: e.target.value }))
                  // }
                  placeholder={editForm.receive}
                  disabled={true}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <span className="text-sm text-red-700">
                  # Minimum 20 Dollar Deposit/investment{" "}
                </span>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handelDepositCancel}
                  className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handelSubmitDiposit()}
                  disabled={isLoading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-purplr-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Deposit Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Banner */}
      <footer className="fixed bottom-0 w-full bg-gradient-to-r from-green-600 to-green-700 py-3 backdrop-blur-sm border-t border-green-500/30">
        <p className="text-center text-white font-semibold">
          Welcome to www.er.net
        </p>
      </footer>
    </div>
  );
};

export default Home;
