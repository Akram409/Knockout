import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../../../assets/404.json"

const Error = () => {
    return (
        <div className="">
         <div className="flex justify-center mt-5">
         <Link to="/"><button className="btn btn-primary font-bold text-white">Back to Home</button></Link>
         </div>
         <div className="relative lg:w-[100vh] mx-auto ">
          <div className="w-[100vh]  sm:h-96">
            <Lottie animationData={error} loop={true} />
          </div>
        </div>
       </div>
    );
};

export default Error;