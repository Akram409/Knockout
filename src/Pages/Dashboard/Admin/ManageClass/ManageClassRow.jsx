import { useState } from "react";
import Swal from "sweetalert2";

const ManageClassRow = ({ item, index, refetch }) => {
  const {
    _id,
    name,
    image,
    instructorName,
    instructorEmail,
    totalSeats,
    price,
    status,
    enrolled,
  } = item;

  const [approveClick, setapproveClick] = useState(status === "approved");
  const [deniedClick, setdeniedClick] = useState(status === "denied");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleClose = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.close();
    }
  };

  const handleSubmit = () => {
    fetch(`https://summer-camp-school-server-dusky.vercel.app/manageClass/feedback/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ feedback }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount) {
        setFeedback("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Feedback Sent`,
          showConfirmButton: false,
          timer: 1500,
        });

        handleClose();
        refetch();
      }
    })
    .catch((error) => {
      console.error("Error submitting feedback:", error);
    });
  };
  const handleApprove = () => {
    fetch(`https://summer-camp-school-server-dusky.vercel.app/manageClass/approve/admin/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setapproveClick(true);
          setdeniedClick(true);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is Approved Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const handleDenied = () => {
    fetch(`https://summer-camp-school-server-dusky.vercel.app/manageClass/deny/admin/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setapproveClick(true);
          setdeniedClick(true);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${name} is Denied!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
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
            onClick={handleApprove}
            className="btn btn-outline btn-success text-white w-full font-bold"
            disabled={approveClick || deniedClick}
          >
            Approved
          </button>

          <button
            onClick={handleDenied}
            className="btn btn-outline btn-error text-white w-full"
            disabled={approveClick || deniedClick}
          >
            Denied
          </button>

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
            <form
              onSubmit={handleSubmit}
              method="dialog"
              className="modal-box space-y-4"
            >
              <h3 className="font-bold text-3xl">Feedback</h3>
              <textarea
                value={feedback}
                onChange={handleChange}
                className="textarea textarea-primary w-full"
                style={{ resize: "none" }}
                placeholder="Reason to Approve or Deny the Class"
              ></textarea>
              <div className="modal-action">
                <button className="btn btn-success text-black btn-xs sm:btn-sm md:btn-md lg:btn-md">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-error text-white btn-xs sm:btn-sm md:btn-md lg:btn-md"
                >
                  Close
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default ManageClassRow;
