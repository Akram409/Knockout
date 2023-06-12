import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // Image,instructorname+email,availavle GiSeaTurtle,price,add button,status = pending
  const onSubmit = (data) => {
    data.status = 'pending'
    data.enrolled = 0
    console.log(data);
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
                {...register("instructorName", { required: true })}
                name="instructorName"
                placeholder="Instructor Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">
                  Instructor Name is required
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Instructor Email</span>
              </label>
              <input
                type="text"
                {...register("instructorEmail", { required: true })}
                name="instructorEmail"
                placeholder="Instructor Email"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Email is required</span>
              )}
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
                {...register("image", { required: false })}
                name="image"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary font-bold text-white"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
