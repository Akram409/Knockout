import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeContext } from "../../Providers/ThemeContext";

const Banner = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Carousel showThumbs={false}>
      <div className={`relative`}>
        <img
          className="w-full object-fill h-[110vh]"
          src="https://i.ibb.co/z5YTmxL/banner-1.jpg"
        />
        <div className="absolute top-1/4 left-20 text-left w-1/2">
          <h1 className={`text-5xl font-bold text-white mb-8`}>
            WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
          </h1>
          <p className={`text-2xl text-white mb-10`}>
            Karate is martial art and way of life that trains a practitioner to
            be peaceful.
          </p>
          <button className={`btn ${
            isDarkMode ? "btn-error text-white" : "btn-primary"
          }`}>Get a Free lessons</button>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full object-fill h-[110vh]"
          src="https://i.ibb.co/Gpqd0Ly/banner-2.jpg"
        />
                <div className="absolute top-1/4 left-20 text-left w-1/2">
          <h1 className="text-5xl font-bold text-white mb-8">
            WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
          </h1>
          <p className="text-2xl text-white mb-10">
            Karate is martial art and way of life that trains a practitioner to
            be peaceful.
          </p>
          <button className="btn btn-error text-white">Get a Free lessons</button>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full object-fill h-[110vh]"
          src="https://i.ibb.co/M9XqCgf/banner-3.jpg"
        />
                <div className="absolute top-1/4 left-20 text-left w-1/2">
          <h1 className="text-5xl font-bold text-white mb-8">
            WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
          </h1>
          <p className="text-2xl text-white mb-10">
            Karate is martial art and way of life that trains a practitioner to
            be peaceful.
          </p>
          <button className="btn btn-error text-white">Get a Free lessons</button>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full object-fill h-[110vh]"
          src="https://i.ibb.co/KhVcDwn/banner-4.jpg"
        />
                <div className="absolute top-1/4 left-20 text-left w-1/2">
          <h1 className="text-5xl font-bold text-white mb-8">
            WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
          </h1>
          <p className="text-2xl text-white mb-10">
            Karate is martial art and way of life that trains a practitioner to
            be peaceful.
          </p>
          <button className="btn btn-error text-white">Get a Free lessons</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
