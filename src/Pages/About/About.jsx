import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import about from '/public/karate.jpg'
import signature from '/public/signature.png'
const About = () => {
  return (
    <div className="container mx-auto mt-20">
      <SectionTitle heading="About Us"></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-5 bg-[#0d1122] text-white">
        <div>
          <img src={about} alt="" />
        </div>
        <div className="py-10 px-5">
          <h1 className="text-4xl font-bold text-white mb-10">
            ABOUT <span className="text-red-500">KNOCKOUT</span>
          </h1>
          <div className="border-2 border-red-600 w-16 mb-5"></div>
          <div className="space-y-10">
          <p className="font-bold">
            Fight School has specialized in martial arts since 1986 and has one
            of the most innovative programs in the nation.
          </p>
          <p>
            We teach martial arts because we love it — not because we want to
            make money on you. Unlike other martial arts schools, we do not
            require you to sign long term contracts. You just pay one low
            monthly fee for your martial arts and self defense classes at the
            beginning of each month. Many martial arts
          </p>
          </div>

          <div className="flex justify-between items-center mt-40">
            <div>
              Akram Hossain <br /> DIRECTOR / INSTRUCTOR
            </div>
            <div>
                <img src={signature} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
