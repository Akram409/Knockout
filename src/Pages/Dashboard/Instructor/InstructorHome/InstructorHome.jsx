import "animate.css";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../../../Providers/AuthProvider";

const InstructorHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="animate__animated animate__bounce text-5xl">
        Welcome{" "}
        <span className="text-[#0d1122] font-bold">{user?.displayName}</span>
      </h1>
      <div className="text-center text-primary font-bold text-xl mt-2">
      <Fade delay={1e3} cascade damping={1e-1}>
        Let's Code Your Future
      </Fade>
      </div>
    </div>
  );
};

export default InstructorHome;
