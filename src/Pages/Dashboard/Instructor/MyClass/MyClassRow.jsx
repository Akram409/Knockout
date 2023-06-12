import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyClassRow = ({ item, index, refetch }) => {
  const { _id,name, image, totalSeats, price, enrolled, status, feedback } = item;
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
  } = useForm();

  const [axiosSecure] = useAxiosSecure();


  const onSubmit = (data) => {
    data.instructorName = user?.displayName;
    data.instructorEmail = user?.email;

    axiosSecure.put(`/updateClass/${_id}`, data).then((data) => {     
        if (data.data.modifiedCount) {
        //   reset();
        console.log(data.data)
        refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(data);
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
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-3xl">Feedback</h3>
                <p className="py-4">{feedback}</p>
                <div className="modal-action">
                  <button className="btn btn-error btn-outline">Close</button>
                </div>
              </form>
            </dialog>
          </>
        )}
      </td>
      <td>
        <button
          className="btn btn-outline btn-warning text-white w-full"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Update
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Update</h3>
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)} >
                <div className="card-body">
                <div className="flex justify-between gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold">Class Name</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: false })}
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                      defaultValue={name}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold">
                        Instructor Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="instructorName"
                      defaultValue={user?.displayName}
                      placeholder="Instructor Name"
                      className="input input-bordered font-light"
                      disabled="disabled"
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold">
                        Instructor Email
                      </span>
                    </label>
                    <input
                      type="text"
                      name="instructorEmail"
                      placeholder="Instructor Email"
                      className="input input-bordered font-light"
                      defaultValue={user?.email}
                      disabled="disabled"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold">
                        Available Seats
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("totalSeats", { required: false })}
                      name="totalSeats"
                      placeholder="Available Seats"
                      className="input input-bordered"
                      defaultValue={totalSeats - enrolled}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold">Price</span>
                    </label>
                    <input
                      type="number"
                      {...register("price", { required: false })}
                      name="price"
                      placeholder="Price"
                      className="input input-bordered"
                      defaultValue={price}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      {...register("image", { required: false })}
                      name="image"
                      className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                      defaultValue={image}
                    />
                  </div>
                </div>
                </div>
                <input
                  className="btn btn-primary font-bold text-white"
                  type="submit"
                  value="Update Class"
                />
              </form>
            </div>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </div>
        </dialog>
      </td>
    </tr>
  );
};

export default MyClassRow;
