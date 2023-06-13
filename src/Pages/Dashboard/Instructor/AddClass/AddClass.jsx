import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

  const onSubmit = (data) => {
    data.instructorName = user?.displayName
    data.instructorEmail = user?.email
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, instructorName, instructorEmail, totalSeats, price } =
            data;
          const newItem = {
            name,
            instructorName,
            instructorEmail,
            totalSeats: parseFloat(totalSeats),
            price: parseInt(price),
            image: imgURL,
            status: "pending",
            enrolled: parseFloat(0),
            feedback: ""
          };
          axiosSecure.post("/addClass", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>AddClass | KnockOut</title>
      </Helmet>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="flex justify-between gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Class Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Class Name is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Instructor Name</span>
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
                <span className="label-text font-bold">Instructor Email</span>
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
                <span className="label-text font-bold">Available Seats</span>
              </label>
              <input
                type="number"
                {...register("totalSeats", { required: true })}
                name="totalSeats"
                placeholder="Available Seats"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">
                  Available Seats is required
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Price is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                name="image"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
          </div>


          <input
            className="btn btn-primary font-bold text-white"
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    </>
  );
};

export default AddClass;
