const MyClassRow = ({ item, index, refetch }) => {
  const { name, image, price, enrolled, status, feedback } = item;

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
      <td>{price}</td>
      <td>{enrolled}</td>
      <td>{status}</td>
      <td>
        {status === "pending" || status === "approved" ? (
          <h1>No Feedback</h1>
        ) : (
          <>
            <button
              className="btn btn-outline btn-warning text-white w-full"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Feedback
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <h3 className="font-bold text-3xl">Feedback</h3>
              <p>{feedback}</p>
            </dialog>
          </>
        )}
      </td>
      <td>
        <button
          className="btn btn-outline btn-warning text-white w-full"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Update
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <h3 className="font-bold text-3xl">Update</h3>
        
        </dialog>
      </td>
    </tr>
  );
};

export default MyClassRow;
