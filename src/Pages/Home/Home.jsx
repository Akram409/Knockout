import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>KnockOut | Home</title>
      </Helmet>
      <Banner />
      <Classes />
    </div>
  );
};

export default Home;
