import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useClass from "../../Hooks/useClass";
import ClassesCard from "./ClassesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Classes = () => {
  const [classes] = useClass();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-20">
      <SectionTitle heading="Our Programs"></SectionTitle>

      <Slider className="" {...settings}>
        {classes.map((item) => (
          <ClassesCard className="gap-3" key={item._id} item={item}></ClassesCard>
        ))}
      </Slider>
    </div>
  );
};

export default Classes;
