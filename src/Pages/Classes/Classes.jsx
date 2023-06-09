import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useClass from "../../Hooks/useClass";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [classes] = useClass();
  console.log(classes);
  return (
    <div className="mt-20">
      <SectionTitle
        heading="Our Programs"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 container mx-auto">
        {classes.map((item) => (
          <ClassesCard key={item._id} item={item}></ClassesCard>
        ))}
      </div>
    </div >
  );
};

export default Classes;
