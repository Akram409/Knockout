import Lottie from "lottie-react";
import loading from "../../../assets/loading.json"


const Loading = () => {
    return (
        <div className="">
            <Lottie animationData={loading} loop={true} />
       </div>
    );
};

export default Loading;