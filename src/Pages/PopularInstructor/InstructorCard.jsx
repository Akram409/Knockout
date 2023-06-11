
const InstructorCard = ({ item }) => {
  const { name, image, experience, position,classesTaken } = item;
  return (
    <div className="card max-h-fit mx-3 bg-[#13182a] shadow-2xl text-center">
      <figure className="img-fluid w-full">
        <img src={image} className="w-full h-72" alt="Image Alt" />
      </figure>
      <div className="card-body mx-auto text-white ">
        <h2 className="text-3xl font-bold pb-1">{name}</h2>
        <div>
          <span className="text-xl font-bold">Role: {position}</span>
        </div>
        <div>
          <span className="text-sm">
            Experience: {experience} Year+
          </span>
        </div>
        <div>
          <span className="text-sm">
            Total ClassTaken: {classesTaken}
          </span>
        </div>
        <div className="card-actions justify-center pt-2">
          <button className="btn btn-primary text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
