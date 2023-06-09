import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
const SocialLogin = () => {

    return (
        <div>
            <div className="divider"></div>
            <div className="text-center space-x-2">
                <button
                  // onClick={handleGoogle}
                  className="btn btn-circle btn-outline"
                >
                  <FcGoogle size="2em"/>
                </button>
                <button
                //   onClick={handleGoogle}
                  className="btn btn-circle btn-outline"
                >
                  <BsGithub size="2em"/>
                </button>
              </div> 
        </div>
    );
};

export default SocialLogin;