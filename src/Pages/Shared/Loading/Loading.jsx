import Lottie from "lottie-react";
import loading from "../../../assets/loading.json";

const Loading = () => {
  return (
    <div className="relative lg:w-[100vh] mx-auto ">
      <div className="w-[90vh]  sm:h-96">
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
