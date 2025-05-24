import React, { useState } from "react";
import Heading from "../../components/Heading";
import { useForm } from "react-hook-form";
import BackButton from "../../common/fields/BackButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PageCont from "../../components/PageCont";

const AddUser = () => {
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      mobile: data.mobile.trim(),
      address: data.address.trim(),
      profile: data.profile.trim(),
      password: data.password.trim(),
    };

    setLoading(true);

    try {
      const response = await axios.post(`${apiKey}/api/renepho/user/post`, formattedData);
      toast.success(response.data.message);
      navigate(`/:type/allUsers`);
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageCont>
      <div className="flex justify-start items-center gap-3">
        <BackButton />
        <Heading text="Add User" />
      </div>
      <form className="w-full max-w-4xl rounded-lg p-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-black font-medium mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
              placeholder="Enter Name"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Address</label>
            <input
              type="text"
              {...register("address", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
              placeholder="Enter Address"
            />
            {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
              placeholder="Enter Email"
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Phone</label>
            <input
              type="text"
              {...register("mobile", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
              placeholder="Enter Mobile Number"
            />
            {errors.mobile && <span className="text-red-500 text-sm">Phone number is required</span>}
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
              placeholder="Enter Password"
            />
            {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Profile</label>
            <select
              {...register("profile", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
            >
              <option value="user">User</option>
              {/* <option value="admin">Admin</option> */}
            </select>
            {errors.profile && <span className="text-red-500 text-sm">Profile is required</span>}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </PageCont>
  );
};

export default AddUser;
