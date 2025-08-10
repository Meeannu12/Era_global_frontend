import PageEight from "./PageEight";
import PageEleven from "./PageEleven";
import PageFive from "./PageFive";
import PageFour from "./PageFour";
import PageNine from "./PageNine";
import PageOne from "./pageOne";
import PageSeven from "./PageSeven";
import PageSix from "./PageSix";
import PageTen from "./PageTen";
import PageThree from "./PageThree";
import PageTwelve from "./PageTwelve";
import PageTwo from "./PageTwo";
import Referral from "./Referral";
import Terms from "./Terms";
import ThankPage from "./ThankPage";

const ViewPlans = () => {
  return (
    <div>
      <PageOne />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight />
      <PageNine />
      <PageTen />
      <PageEleven />
      <PageTwelve />
      {/* <Referral /> */}
      <PageTwo />
      <Terms />
      <ThankPage />
    </div>
  );
};

export default ViewPlans;
