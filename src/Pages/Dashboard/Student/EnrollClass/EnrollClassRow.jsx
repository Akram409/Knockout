const EnrollClassRow = ({ item, index, refetch }) => {
    const {
        name,
        image,
        instructorName,
      } = item;
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>
        <div className="flex justify-center items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{instructorName}</td>
      <td>
        <button className="btn btn-outline btn-success text-white w-full font-bold">
          PAID
        </button>
      </td>
    </tr>
  );
};

export default EnrollClassRow;
