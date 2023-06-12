import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | KnockOut</title>
      </Helmet>
      <Banner />
      <Classes />
      <PopularInstructor />
    </div>
  );
};

export default Home;
