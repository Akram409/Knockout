const SelectedClassRow = ({ item, index, refetch }) => {
  const {
    _id,
    name,
    image,
    instructorName,
    instructorEmail,
    totalSeats,
    price,
    enrolled,
  } = item;

  const handlePay = () => {
    console.log(_id)
  };
  const handleDelete = () => {
    console.log(_id)
  };

  
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
      <td>{instructorEmail}</td>
      <td>{totalSeats - enrolled}</td>
      <td>${price}</td>
      <td>
        <div className="flex flex-col gap-y-3">
          <button
            onClick={handlePay}
            className="btn btn-outline btn-success text-white w-full font-bold"
          >
            PAY
          </button>

          <button
            onClick={handleDelete}
            className="btn btn-outline btn-error text-white w-full"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedClassRow;
